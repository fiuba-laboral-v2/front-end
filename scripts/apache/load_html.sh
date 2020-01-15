#!/bin/bash

source scripts/apache/domain.sh

yarn build
sudo rm -rf "/var/www/$DOMAIN/html/*"
cp -R build/. "/var/www/$DOMAIN/html/"
sudo systemctl restart apache2
