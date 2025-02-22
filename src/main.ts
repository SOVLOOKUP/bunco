import { Command } from "@commander-js/extra-typings";
import { vs, compile } from "./index";
import pkg from "../package.json";

const program = new Command();

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)
  .option(
    "-t, --target <string>",
    "platform/arch target | support: " + "all or " + vs.join(",")
  )
  .option("-o, --outputDir <string>", "output directory | default: compile")
  .option("-b, --bytecode", "compile to bytecode")
  .option("-c, --compress", "compress output to outputDir/compressed")
  .option("-m, --hideConsole", "hide console window")
  .option("-i, --iconPath <string>", "icon path")
  .argument("inputFile <string>", "file to compile")
  .action(async (inputFile, options) => {
    const compress = options.compress;
    const bytecode = options.bytecode;
    const hideConsole = options.hideConsole;
    const outputDir = options.outputDir;
    const icon = options.iconPath;
    const target =
      options.target === "all" ? "all" : options.target?.split(",");

    await compile({
      outputDir,
      inputFile,
      target: target as unknown as typeof vs,
      compress,
      hideConsole,
      icon,
      bytecode,
    });
  });

program.parse();
