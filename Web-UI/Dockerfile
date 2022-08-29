FROM node:16
# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal
 
WORKDIR /web-ui
 
ENV PATH /web-ui/node_modules/.bin:$PATH

COPY package.json /web-ui/
COPY tests/ /web-ui/tests/

# Get the needed libraries to run Playwright
RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

# Install the dependencies in Node environment
RUN npm install