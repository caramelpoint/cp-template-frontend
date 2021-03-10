FROM node:15-alpine AS alpine

FROM alpine AS builder

WORKDIR /usr/src/app/build

COPY . .

RUN npm i

RUN npm run build

FROM alpine AS runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build/.next ./.next
COPY --from=builder /usr/src/app/build/node_modules ./node_modules
COPY --from=builder /usr/src/app/build/next.config.js ./next.config.js
COPY --from=builder /usr/src/app/build/public ./public

# Create a port variablen with a default value in case of any parameter is provided on the shell.
ARG PORT=3000

# ARGs can only be used in build image time, so we need to save the port in an environment variable.
ENV PORT ${PORT}

EXPOSE ${PORT}

CMD ["sh","-c","node_modules/.bin/next start -p ${PORT}"]
