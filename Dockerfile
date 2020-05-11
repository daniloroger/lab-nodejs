FROM node:alpine
MAINTAINER DLR Lab
ENV NODE_ENV=production
COPY /files /var/www
WORKDIR /var/www
RUN npm install 
ENTRYPOINT ["npm"]
CMD ["start"]
EXPOSE 3000
