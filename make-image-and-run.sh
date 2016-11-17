#!/bin/sh
# build app
npm install
gulp build

docker build -t u2668/web-presentation .
#docker push u2668/web-presentation

# local
docker rm -f web-presentation
docker run --name web-presentation -p 80:80 --net go-to-canteen -d u2668/web-presentation

# remote
#ssh root@46.101.204.43 docker rm -f web-presentation
#ssh root@46.101.204.43 docker pull u2668/web-presentation
#ssh root@46.101.204.43 run --name web-presentation -p 80:80 --net go-to-canteen -d u2668/web-presentation


# for debug
#docker exec -it web-presentation /bin/bash
