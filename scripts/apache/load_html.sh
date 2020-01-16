#!/bin/bash

source scripts/apache/domain.sh

PUBLIC_URL="http://localhost/laboral" yarn build
sudo rm -rf "/var/www/$DOMAIN/html/*"
cp -R build/. "/var/www/$DOMAIN/html/"
sudo systemctl restart apache2
