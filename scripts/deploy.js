const deployJSON = require("$config/environment.json");
const shell = require("shelljs");

const env = process.env.NODE_ENV || "development";
const config = deployJSON[env];

const hostname = config.hostname;
const location = config.location;
const repository = config.repository;
const branch = config.branch;
const publicURL = config.PUBLIC_URL;
const sshAddress = config.ssh_address;

shell.exec(`PUBLIC_URL=${publicURL} yarn build`);
shell.exec(`ssh -o "StrictHostKeyChecking no" ${sshAddress} rm -rf /var/www/${hostname}/html/*`);
shell.exec(`scp -o "StrictHostKeyChecking no" -r build/* ${sshAddress}:/var/www/${hostname}/html/`);
