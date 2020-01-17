#!/bin/bash

sudo ufw allow 'Apache'
sudo ufw enable

bash scripts/apache/build_html.sh
bash scripts/apache/set_default_settings.sh
