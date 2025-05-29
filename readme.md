After generate the permitions we have to:

```
# Make Let's Encrypt directories accessible
sudo chmod 755 /etc/letsencrypt/{live,archive}

# Set proper permissions for certificate files
sudo chmod 644 /etc/letsencrypt/archive/ernestolora.lat/*.pem

# Verify permissions
ls -l /etc/letsencrypt/live/ernestolora.lat/
```
