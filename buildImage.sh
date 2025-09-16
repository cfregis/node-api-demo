docker build -t node-image .
docker run --name node -p 8087:8087 --cpus=1 -m 2048m node-image
