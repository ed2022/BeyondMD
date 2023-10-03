# This is the node version to the most updated one
ARG NODE_VERSION=19.5.0
FROM node:${NODE_VERSION}-alpine
# Anything being executed will start from this directory
WORKDIR /app

# This will help make sure that everything is being copied into the right folders
COPY package*.json ./

# Then we run it
RUN npm install

# We clean this up with the .dockerignore file so that node_modules aren't being inputted again and again
COPY . .

# This is where we place the enviornment
ENV port=8080 

# Exposes this port 
EXPOSE 8080

# There can only be one of these in every file, this tells docker how to correctly run the code. 
CMD ["npm", "start"]

