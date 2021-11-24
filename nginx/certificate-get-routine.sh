# Script to generate SSL certificates
# https://mindsers.blog/post/https-using-nginx-certbot-docker/ 

read -p "Remove HTTPS server and HTTP to HTTPS redirection from nginx config and press any key..."
docker-compose run --rm  certbot certonly --webroot --webroot-path /home/certbot/ --dry-run -d sticky-link.com
docker-compose run --rm  certbot certonly --webroot --webroot-path /home/certbot/ -d sticky-link.com
echo "Return HTTPS server and HTTP to HTTPS redirection. Done!"
