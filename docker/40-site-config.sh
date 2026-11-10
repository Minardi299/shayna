#!/bin/sh
set -e

html=/usr/share/nginx/html
services="${VITE_SERVICES_URL:-https://shaynanailsaz.magsoft.us/api/menu}"

sed "s#__SERVICES_URL__#${services}#" /etc/nginx/site.conf.template > /etc/nginx/conf.d/default.conf

{
  echo "window.SITE_CONFIG = {"
  [ -n "$VITE_BOOKING_URL" ] && echo "  \"bookingUrl\": \"${VITE_BOOKING_URL}\""
  echo "}"
} > "$html/config.js"
