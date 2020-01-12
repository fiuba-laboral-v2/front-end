#!/bin/bash

yarn build
sudo rm -rf /var/www/laboral-v2.fi.uba.ar/html/*
cp -R build/. /var/www/laboral-v2.fi.uba.ar/html/
sudo systemctl restart apache2
