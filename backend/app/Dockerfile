FROM node:14-alpine

# Create app directory
WORKDIR /app

# Copy the files to docker-server
COPY . .

# Install app dependencies
RUN ["yarn", "install"]

# Compile the code
RUN ["yarn", "build"]

EXPOSE 6000

CMD [ "yarn", "start" ]
