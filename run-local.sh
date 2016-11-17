#!/bin/sh
docker rm -f web-presentation
docker run --name web-presentation -p 80:80 --net go-to-canteen -d u2668/web-presentation
# for debug
#docker exec -it web-presentation /bin/bash
