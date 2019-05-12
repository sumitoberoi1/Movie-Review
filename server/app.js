<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const proc = require("child_process");
const configRoutes = require("./routes");
const cors = require("cors");
const redis = require("redis");
const bluebird = require("bluebird");

const client = redis.createClient();

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

client.on("connect", function() {
  console.log("Connected to Redis...");
});
=======

const proc = require('child_process');
const server = require('./movierecjs');
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

/**
 * Entrypoint for the server applicaiton.
 *
 * This file will first start up the Python daemon application, then start
 * up the JavaScript server application.
 *
 * It expects that a Redis instance is already running at localhost.
 */

/**
 * THE COMMANDS USED FOR THIS FILE ARE OPERATING SYSTEM DEPENDENT
 *          - USE CAUTION WHEN RUNNING ON WINDOWS/MAC -
 */

<<<<<<< HEAD
// Correct Python command is `py` in Windows but `python3` in Linux/Mac.
const isWin = process.platform === "win32";
const python = isWin ? "py" : "python3";
const pymovierec = proc.spawn(python, ["./pymovierec"], {
  stdio: [process.stdin, process.stdout, process.stderr]
});
const PORT = 3001;
const app = express();
app.use(cors());
=======
const isLinux    = process.platform === "linux";
const python     = isLinux ? 'python3' : 'py'; // python3 is Linux only
const pymovierec = proc.spawnSync( python, ["./pymovierec"] );
const movierecJS = new server();
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434

/**
 * Cleans up a stale daemon.
 */
function cleanup() {
<<<<<<< HEAD
  console.log("Cleaning up daemon...");
  pymovierec.kill("SIGINT");
  process.exit();
}

//
// Python Module
//

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

//
// Express
//

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

configRoutes(app);

app.listen(PORT, () => {
  console.log("We've now got a server!");
  console.log(`Your routes will be running on http://localhost:${PORT}`);
});
=======
    pymovierec.kill('SIGINT');
    process.exit();
}

// Sync.
console.log(pymovierec.stdout.toString());
exports.default = movierecJS.server;
/*/ Async.
pymovierec.stdout.on('data', (data) => {
    console.log(data.toString());
});

movierecJS.startup();

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
//*/
>>>>>>> 52f313985fc6211210710917de4ceb64e489c434
