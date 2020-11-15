FROM node As builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx as build_for_prod

COPY --from=builder /usr/src/app/dist/SampleApp/ /usr/share/nginx/html
