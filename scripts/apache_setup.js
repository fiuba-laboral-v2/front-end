const deployJSON = require("$config/environment.json");
const shell = require("shelljs");

const env = process.env.NODE_ENV || "development";
const config = deployJSON[env];

const hostname = config.hostname;
shell.exec("sudo ufw allow 'Apache'");
shell.exec("sudo ufw enable");

shell.echo(`creating "/var/www/${hostname}/html" folder`);
shell.exec(`sudo mkdir -p "/var/www/${hostname}/html"`);

shell.echo(`creating user permissions for the "/var/www/${hostname}/html" folder`);
shell.exec(`sudo chown -R "$USER:$USER" "/var/www/${hostname}/html"`);
shell.exec(`sudo chmod -R 755 "/var/www/${hostname}"`);

shell.echo("creating apache cofiguration");
shell.exec(`HOSTNAME=${hostname} bash scripts/set_default_settings.sh`);

shell.echo("Set up docker permissions");
shell.exec("sudo groupadd docker");
shell.exec("sudo usermod -aG docker $USER");
shell.exec("sudo usermod -aG docker $USER");

shell.exec(`node scripts/deploy.js`);
