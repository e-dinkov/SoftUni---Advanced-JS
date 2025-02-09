function solve(obj) {
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
  const messagePattern = /[<>\\&'"]+/g;
  const uriPattern = /[^a-zA-Z\.0-9]/g;
  if (!obj.hasOwnProperty("method") || !methods.includes(obj.method)) {
    throw new Error("Invalid request header: Invalid Method");
  }
  if (
    !obj.hasOwnProperty("uri") ||
    uriPattern.test(obj.uri) ||
    obj.uri === ""
  ) {
    throw new Error("Invalid request header: Invalid URI");
  }
  if (!obj.hasOwnProperty("version") || !versions.includes(obj.version)) {
    throw new Error("Invalid request header: Invalid Version");
  }
  if (!obj.hasOwnProperty("message") || messagePattern.test(obj.message)) {
    throw new Error("Invalid request header: Invalid Message");
    }
    return obj
}
solve({
  method: "OPTIONS",

  uri: "git.master",

  version: "HTTP/1.1",

  message: "-recursive",
});
