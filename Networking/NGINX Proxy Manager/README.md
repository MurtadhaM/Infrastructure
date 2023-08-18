# NGINX Proxy Manager

## Installation
```
docker run --name=nginx-proxy-manager --network=host  -p 8181:8181 -p 8080:8080 -p 4443:4443 -v /docker/appdata/nginx-proxy-manager:/config:rw jc21/nginx-proxy-manager
```

