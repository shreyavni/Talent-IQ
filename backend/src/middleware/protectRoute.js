import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(),
  async (req, res, next) => {
    try {
      const clerkId = req.auth().userId;

      if (!clerkId) return res.status(401).json({ message: "Unauthorized - invalid token" });

      let user = await User.findOne({ clerkId });

      if (!user) {
        // Fallback: If user is missing from DB (e.g. webhook failed), create them now
        const { clerkClient } = await import("@clerk/express");
        const { upsertStreamUser } = await import("../lib/stream.js");
        
        try {
          const clerkUser = await clerkClient.users.getUser(clerkId);
          
          user = await User.create({
            clerkId: clerkId,
            email: clerkUser.emailAddresses[0]?.emailAddress,
            name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim(),
            profileImage: clerkUser.imageUrl,
          });

          await upsertStreamUser({
            id: clerkId,
            name: user.name,
            image: user.profileImage,
          });
        } catch (syncError) {
          console.error("Failed to sync missing user:", syncError);
          return res.status(404).json({ message: "User not found and failed to sync" });
        }
      }

      // attach user to req
      req.user = user;

      next();
    } catch (error) {
      console.error("Error in protectRoute middleware", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
];
