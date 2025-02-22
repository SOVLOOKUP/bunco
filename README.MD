# Compiler

compile JS/TS file to one single executable file using Bun

```bash
$ compiler -h           
Usage: compiler [options] <inputFile <string>>

CLI to compile JS/TS file to one single executable file using Bun

Arguments:
  inputFile <string>        file to compile

Options:
  -V, --version             output the version number
  -t, --target <string>     platform/arch target | support: all or linux-x64,linux-arm64,windows-x64,darwin-x64,darwin-arm64
  -o, --outputDir <string>  output directory | default: compile
  -b, --bytecode            compile to bytecode
  -c, --compress            compress output to outputDir/compressed
  -m, --hideConsole         hide console window
  -i, --iconPath <string>   icon path
  -h, --help                display help for command
```