const deployJSON = require("$config/environment.json");
const shell = require("shelljs");

const env = process.env.NODE_ENV || "development";
const config = deployJSON[env];

const location = config.location;
const repository = config.repository;
const branch = config.branch;
const publicURL = config.PUBLIC_URL;
shell.exec(`rm -rf ${location}`);
shell.exec(`git clone -b ${branch} ${repository} ${location}`);
shell.exec(`PUBLIC_URL=${publicURL} bash ${location}/scripts/apache/load_html.sh`);
