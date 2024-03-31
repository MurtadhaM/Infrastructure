---
FROM node:12.16.1-alpine3.11
COPY . /app
WORKDIR /app
RUN apk  update && apk add --no-cache git && npm install
EXPOSE 8080
CMD ["node", "/app/app/index.js"]
ENTRYPOINT ["sh"]

