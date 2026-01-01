#!/usr/bin/env node

import { Command } from "commander";
import { input, select } from "@inquirer/prompts";
import fs from "fs-extra";
import path from "path";
import ora from "ora";
import { execSync } from "child_process";

const program = new Command();

const templates = [
  {
    name: "Next.js • Supabase • Tailwind (App Router)",
    value: "next-supabase-template",
  },
  {
    name: "React + Vite • Supabase • Tailwind (JavaScript)",
    value: "react(jsx)-tailwind-supabase-template",
  },
  {
    name: "React + Vite • Supabase • Tailwind (TypeScript)",
    value: "react(tsx)-tailwind-supabase-template",
  },
];

program
  .name("create-fork")
  .argument("[project-name]")
  .action(async (projectName) => {
    // Ask for project name if not provided
    const finalProjectName =
      projectName ||
      (await input({
        message: "Project name:",
        validate: (value) => (value ? true : "Project name cannot be empty"),
      }));

    // Ask user to select a template
    const template = await select({
      message: "Select a template",
      choices: templates,
    });

    const targetPath = path.join(process.cwd(), finalProjectName);

    if (fs.existsSync(targetPath)) {
      console.log(`❌ Folder "${finalProjectName}" already exists.`);
      process.exit(1);
    }

    const templatePath = path.join(
      new URL(".", import.meta.url).pathname,
      `../templates/${template}`
    );

    const spinner = ora("Creating project...").start();

    await fs.copy(templatePath, targetPath);

    spinner.succeed("Project created");

    console.log("\nInstalling dependencies...\n");
    execSync("npm install", { cwd: targetPath, stdio: "inherit" });

    console.log("\nDone 🚀");
    console.log(`cd ${finalProjectName}`);
    console.log("npm run dev");
  });

program.parse();
