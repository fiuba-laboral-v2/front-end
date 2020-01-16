#!/bin/bash

source scripts/apache/domain.sh

DEFAULT_SETTINGS_FILE=/etc/apache2/sites-available/$DOMAIN.conf
SERVED_HTML_PATH=/var/www/$DOMAIN/html

sudo touch "$DEFAULT_SETTINGS_FILE"
cat <<EOT > "./scripts/$DOMAIN.conf"
<VirtualHost *:80>
    ProxyPass /laboral-api http://localhost:5000
    ServerAdmin admin@$DOMAIN
    ServerName $HOSTNAME
    ServerAlias www.$HOSTNAME
    DocumentRoot /var/www/html
    Alias "/laboral" $SERVED_HTML_PATH
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
EOT

sudo cp "./scripts/$DOMAIN.conf" "$DEFAULT_SETTINGS_FILE"
rm "./scripts/$DOMAIN.conf"

sudo a2ensite "$DOMAIN.conf"
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo systemctl restart apache2
