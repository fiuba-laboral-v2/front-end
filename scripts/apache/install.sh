#!/bin/bash

sudo apt update
sudo apt install apache2
sudo ufw allow 'Apache'
sudo ufw allow 'OpenSSH'
sudo ufw enable
