FROM node:22-alpine AS build
WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
ARG VITE_BOOKING_URL
ENV VITE_BOOKING_URL=$VITE_BOOKING_URL
ARG VITE_SERVICES_URL
ENV VITE_SERVICES_URL=$VITE_SERVICES_URL
RUN pnpm build

FROM nginx:alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build/client /usr/share/nginx/html
EXPOSE 80
