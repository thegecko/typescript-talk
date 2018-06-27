const path = require("path");
const http = require("http");
const exec = require("child_process").exec;
const express = require("express");

const port = 8080;
const app = express();

app.use(express.static("./", { index: "index.html" }));

http.createServer(app)
.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`Server listening at ${url}`);

    let cmd = path.join(__dirname, "xdg-open");
    if (process.platform === "darwin") cmd = "open";
    else if (process.platform === "win32") cmd = `start ""`;

    exec(`${cmd} ${url}`);
});
