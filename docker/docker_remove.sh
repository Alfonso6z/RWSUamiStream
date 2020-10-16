# docker stop streama && \
# docker stop mysql && \
# docker stop proxy-reverse && \
docker stop node-uami && \
docker rm $(docker ps -a -f status=exited -q) && \
# docker rmi streama:latest && \
docker rmi node-uami:latest && \
# docker volume rm docker_app_data && \
# docker volume rm docker_db_data && \
# docker volume rm docker_proxy_reverse_data && \
# docker volume rm docker_proxy_reverse_data_log && \
docker network rm rwsuamistream_intranet