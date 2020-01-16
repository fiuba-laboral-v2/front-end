#!/bin/bash

ENVIRONMENT=$1


cd ~./fiuba-laboral-v2  || echo "DIRECTORY fiuba-laboral-v2 DOES NOT EXIST" && exit
git clone -b "$ENVIRONMENT" git@github.com:fiuba-laboral-v2/front-end.git
cd front-end  || echo "DIRECTORY front-end DOES NOT EXIST" && exit
yarn deploy:up
