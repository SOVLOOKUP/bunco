# bunco

Compile JS/TS to one single executable file using Bun. Alternative for pkg and ncc.

 - compile 

```bash
$ bun x bunco ./src/main.ts
./compile
│ 
└─main-windows-x64.exe
```

 - cross compile and compress

```bash
$ bun x bunco -t all -c ./src/main.ts
./compile
│  main-darwin-arm64
│  main-darwin-x64
│  main-linux-arm64
│  main-linux-x64
│  main-windows-x64.exe
│
└─compressed
        main-darwin-arm64.7z
        main-darwin-x64.7z
        main-linux-arm64.7z
        main-linux-x64.7z
        main-windows-x64.7z
```

## bunco -h 

```bash
$ bunco -h           
Usage: bunco [options] <inputFile <string>>

CLI to compile JS/TS file to one single executable file using Bun

Arguments:
  inputFile <string>        file to compile

Options:
  -V, --version             output the version number
  -t, --target <string>     platform/arch target | support: all or linux-x64,linux-arm64,windows-x64,darwin-x64,darwin-arm64
  -o, --outputDir <string>  output directory | default: compile
  -n, --name <string>       output name
  -i, --iconPath <string>   icon path
  -c, --compress            compress output to outputDir/compressed
  -m, --hideConsole         hide console window
  -b, --bytecode            compile to bytecode
  -h, --help                display help for command
```

## API

```ts
import { compile } from "bunco"

await compile({
  outputDir,
  inputFile,
  target,
  compress,
  hideConsole,
  icon,
  name,
  bytecode,
});
```
