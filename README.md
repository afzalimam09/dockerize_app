# Dockerize_app

## Main technologies and framework used

-   Node.js
-   Express
-   Docker

## Requirements

Node.js and Docker should be installed to run this app on your machine.

## Installation

Follow the steps below to run the app in your system

1. Open terminal and run command
   `git clone https://github.com/afzalimam09/dockerize_app.git` to clone the project or download it from the download button.

2. Open the project in VS code or any other code editor.
3. Run `npm run docker:build` to build the docker image.
4. Run the command `npm run docker:run` to run the docker image into the container.

## Note

I have also pushed this docker image on docker hub.

https://hub.docker.com/r/afzalimam09/express_app


# Docker Instruction

```
# Build the image
docker build . -t afzalimam09/express_app:0.0.1.RELEASE

# Run the docker image into the container
docker run -p 3000:3000 -d afzalimam09/express_app:0.0.1.RELEASE

# List the the running container
docker ps

# Show the logs
docker logs <containersId> -f

# Don't forget to replace container id with the id from the list getting from previous command
```
