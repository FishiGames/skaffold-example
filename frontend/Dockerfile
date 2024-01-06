FROM node:20-bookworm-slim

RUN apt-get update
RUN apt-get clean -y
RUN rm -rf /var/lib/apt/lists/*

WORKDIR /workdir
COPY . .
RUN npm install .
RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "serve:ssr:skaffold-example-frontend", "."]
