const deployJSON = require("$config/environment.json");
const shell = require("shelljs");

const env = process.env.NODE_ENV || "development";
const config = deployJSON[env];

const hostname = config.hostname;
const location = config.location;
const repository = config.repository;
const branch = config.branch;
const publicURL = config.PUBLIC_URL;
shell.exec(`rm -rf ${location}`);
shell.exec(`git clone -b ${branch} ${repository} ${location}`);
shell.exec(`HOSTNAME=${hostname} PUBLIC_URL=${publicURL} bash ${location}/scripts/load_html.sh`);
shell.exec(`rm -rf ${location}`);
