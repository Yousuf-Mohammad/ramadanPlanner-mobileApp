# Docker Setup Guide for Claude Code

This guide will help you set up a Docker environment to run Claude Code for your Ramadan Planner mobile app project.

## Prerequisites
1. Docker installed
2. Node.js 18 or higher
3. Basic Docker knowledge

## Steps to Set Up
1. **Build the Docker Image**
   ```bash
   docker build -t claude-code ./docker
   
   # Navigate to your project directory first
   cd /Volumes/HomeX/projects/products/ramadanPlanner-mobileApp
   
   # Build the image
   docker build -t claude-code .
   
   # Tag with latest for easy updates
   docker tag claude-code:latest claude-code:latest
   ```

2. **Run the Container**
   ```bash
   docker run -d \
     --name claude-code \
     -v $(pwd)/projects:/app/projects:rw \
     -v $(pwd)/.claude:/home/claude/.claude:rw \
     -p 3000:3000 \
     claude-code:latest
   ```

3. **Access Claude Code**
   Visit http://localhost:3000 in your browser

4. **Update as Needed**
   To update to the latest version:
   ```bash
   docker rmi claude-code:latest
   docker pull claude-code:latest
   docker run -d \
     --name claude-code \
     -v $(pwd)/projects:/app/projects:rw \
     -v $(pwd)/.claude:/home/claude/.claude:rw \
     -p 3000:3000 \
     claude-code:latest
   ```

## Configuration Options
- Adjust volume mounts as needed for your project structure
- You can modify the docker-compose.yml if you prefer that approach

## Troubleshooting
- Check container logs: `docker logs claude-code`
- Verify container status: `docker ps -a`
- If connectivity issues: `docker inspect claude-code`

## Notes
- Keep your project directory structure consistent with volume mounts
- Regularly update the base image to get security patches
- Consider adding health checks for production use