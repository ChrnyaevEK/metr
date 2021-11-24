# Script to generate SSL certificates
# https://mindsers.blog/post/https-using-nginx-certbot-docker/ 

# Remove HTTPS server and HTTP to HTTPS redirection from nginx config
docker-compose run --rm  certbot certonly --webroot --webroot-path /var/www/certbot/ -d sticky-link.com

# Return HTTPS server and HTTP to HTTPS redirection. Done!
