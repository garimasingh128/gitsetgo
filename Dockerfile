FROM node:8-alpine 
WORKDIR /app 
COPY package.json . 
RUN apk add --no-cache ffmpeg opus pixman cairo pango giflib ca-certificates \ 
&& apk add --no-cache --virtual .build-deps python g++ make gcc .build-deps curl git pixman-dev cairo-dev pangomm-dev libjpeg-turbo-dev giflib-dev \ 
&& npm install \ 
&& apk del .build-deps 
COPY . . 
CMD ["npm", "start"]
