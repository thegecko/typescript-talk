## Slide 1

Some Code

```javascript
const path = require("path");
const http = require("http");
const exec = require("child_process").exec;
const express = require("express");

const port = 8080;
const app = express();

app.use(express.static("./", { index: "index.html" }));

http.createServer(app).listen(port);
```

note:
some notes

---

## Slide 2

An image?

<img src="https://thegecko.github.io/bleat/images/bleat.png">

note:
some moar notes
