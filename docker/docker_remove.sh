docker stop proxy-reverse && \
docker stop streama && \
docker stop mysql && \
docker stop node-uami && \
docker rm $(docker ps -a -f status=exited -q) && \
docker rmi streama:latest && \
docker rmi node-uami&& \
docker volume rm docker_app_data && \
docker volume rm docker_db_data && \
docker volume rm docker_proxy_reverse_data && \
docker volume rm docker_proxy_reverse_data_log && \
docker volume rm rwsuamistream_rws_data
