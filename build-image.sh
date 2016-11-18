#!/bin/sh
# build app
npm install
gulp build

docker build -t u2668/web-presentation .
docker push u2668/web-presentation

