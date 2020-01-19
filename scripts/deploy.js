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
// shell.exec(`ssh -o "StrictHostKeyChecking no" ${sshAddress} rm -rf ${location}`);
// shell.exec(`ssh -o "StrictHostKeyChecking no" ${sshAddress} git clone -b ${branch} ${repository} ${location}`);
// shell.exec(`ssh -o "StrictHostKeyChecking no" ${sshAddress} HOSTNAME=${hostname} PUBLIC_URL=${publicURL} bash ${location}/scripts/load_html.sh`);
// shell.exec(`ssh -o "StrictHostKeyChecking no" ${sshAddress} rm -rf ${location}`);
shell.exec("yarn build");
shell.exec(`scp -o "StrictHostKeyChecking no" -R build/. ${sshAddress}:./test/`);
