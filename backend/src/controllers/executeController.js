import { exec } from "child_process";
import fs from "fs/promises";
import path from "path";
import os from "os";
import crypto from "crypto";

export const executeCode = async (req, res) => {
  try {
    const { language, files } = req.body;
    if (!files || files.length === 0) {
      return res.status(400).json({ error: "No files provided" });
    }
    
    const file = files[0];
    const code = file.content;
    const fileName = file.name || "main";

    const tempDir = path.join(os.tmpdir(), `code-exec-${crypto.randomUUID()}`);
    await fs.mkdir(tempDir, { recursive: true });
    
    const filePath = path.join(tempDir, fileName);
    await fs.writeFile(filePath, code);

    let command = "";
    if (language === "javascript") {
      command = `node ${fileName}`;
    } else if (language === "python") {
      // Use python instead of python3 for windows compatibility by default
      command = `python ${fileName}`; 
    } else if (language === "java") {
      command = `javac ${fileName} && java ${fileName.replace(".java", "")}`;
    } else {
      return res.status(400).json({ error: "Unsupported language" });
    }

    exec(command, { cwd: tempDir, timeout: 5000 }, async (error, stdout, stderr) => {
      // Clean up temp dir
      try {
        await fs.rm(tempDir, { recursive: true, force: true });
      } catch (cleanupErr) {
        console.error("Failed to clean up temp dir:", cleanupErr);
      }

      let combinedOutput = (stdout || "") + (stderr || "");
      let errorOutput = stderr || "";
      
      // If exec error (like timeout or compilation error) occurred
      if (error && !stderr) {
         errorOutput = error.message;
         combinedOutput += error.message;
      }

      res.json({
        run: {
          output: combinedOutput,
          stderr: errorOutput
        }
      });
    });

  } catch (error) {
    console.error("Execute code error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
