#!/bin/sh
deployAddress="46.101.204.43"
ssh root@${deployAddress} docker rm -f web-presentation
ssh root@${deployAddress} docker pull u2668/web-presentation
ssh root@${deployAddress} docker run --name web-presentation -p 80:80 --net go-to-canteen -d u2668/web-presentation
