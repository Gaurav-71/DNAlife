# Steps

Log into virtual machine

`ssh ubuntu@aws-ip -i pem-file`

Get root permissions

`sudo -i`

CD into correct directory

`cd ..`

`cd home`

`cd ubuntu`

`cd DNA Life`

`cd Server`

# PM2 Commands

Start server

`pm2 start server.js`

Restart server

`pm2 restart all`

List active servers

`pm2 list`
