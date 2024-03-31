#Author: Murtadha Marzouq
#!/bin/bash
# Create a new droplet with SSH key
#GET THE API KEY FROM THE ENV
API_KEY=$DIGITAL_OCEAN_API_TOKEN

#GET THE SSH Public Key from the SSH folder
SSH_KEY=$(cat ~/.ssh/id_rsa.pub)

size="s-1vcpu-2gb-intel"
region="nyc3"
image="centos-stream-9-x64"
#Make a request to create a new droplet
curl -X POST -H 'Content-Type: application/json' \
    -H 'Authorization: Bearer '$DIGITAL_OCEAN_API_TOKEN'' \
    -d '{"name":"SnakeCentOSDroplet",
        "size":"'$size'",
        "region":"'$region'" ,
        "image":"'$image'"}' \
    "https://api.digitalocean.com/v2/droplets"


  # Add the SSH key to the account
  curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DIGITAL_OCEAN_API_TOKEN" \
  -d '{"name":"SnakeSSHKey","public_key":"'$SSH_KEY'"}' \
  "https://api.digitalocean.com/v2/account/keys" 

  