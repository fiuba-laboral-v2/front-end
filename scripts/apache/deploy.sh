#!/bin/bash

cd ~./fiuba-laboral-v2
git clone git@github.com:fiuba-laboral-v2/front-end.git
cd front-end
yarn deploy:up
