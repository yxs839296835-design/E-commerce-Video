import { createReadStream, stat } from "node:fs";
import { createServer } from "node:http";
import { extname, resolve } from "node:path";

const root = process.cwd();
const port = Number(process.env.PORT || 8788);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".svg", "image/svg+xml"],
]);

const server = createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const requestedFile = resolve(root, `.${pathname.replace(/\\/g, "/")}`);

  if (!requestedFile.startsWith(root)) {
    response.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  stat(requestedFile, (error, fileStat) => {
    if (error || !fileStat.isFile()) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "content-type": contentTypes.get(extname(requestedFile).toLowerCase()) || "application/octet-stream",
    });
    createReadStream(requestedFile).pipe(response);
  });
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local site running at http://127.0.0.1:${port}/ from ${root}`);
});
