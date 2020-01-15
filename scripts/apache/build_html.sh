#!/bin/bash

source scripts/apache/domain.sh

sudo mkdir -p "/var/www/$DOMAIN/html"
sudo chown -R "$USER:$USER" "/var/www/$DOMAIN/html"
sudo chmod -R 755 "/var/www/$DOMAIN"
bash scripts/apache/load_html.sh
