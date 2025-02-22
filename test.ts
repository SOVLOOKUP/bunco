import { fdir } from "fdir";

const out = await new fdir()
  .withBasePath()
  .withDirs()
  .crawl("C:\\Users")
  .withPromise();

console.log(out.length);
