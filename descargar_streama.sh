#!/bin/bash

URL_DOWNLOAD_LATEST_RELEASE=$(curl -L https://api.github.com/repos/streamaserver/streama/releases | grep -i browser_download_url | head -n 1 | cut -d '"' -f 4)

curl -o streama.jar -L $URL_DOWNLOAD_LATEST_RELEASE

chmod u+x streama.jar