# The image tha will be used in the project
FROM node:16

# Is the folder inside the docker image
WORKDIR /user/src/app

# Install the dependencies
# Copy the two files (package and package-lock) into the directory created above
COPY package*.json ./

RUN npm install

# The first dot is used to copy everything in this project folder
# with the exception of .dockerignore file
# the second dot is to paste into the directory created above /usr/src/app
COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]