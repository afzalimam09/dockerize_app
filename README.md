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
