#!/bin/bash

yarn build
rm -rf "/var/www/$HOSTNAME/html/*"
cp -R build/. "/var/www/$HOSTNAME/html/"
