# latest tag is optional, I hope u knoe this

# use the Ubuntu base image
FROM ubuntu

# Use Bash as the default shell
SHELL ["/bin/bash", "-c"]

# Set the working directory inside the container
WORKDIR /app

# Copy a script file to the container
COPY script.sh .

# Make the script executable
RUN chmod +x script.sh

# Run the script when the container starts
CMD ["bash", "./script.sh"]