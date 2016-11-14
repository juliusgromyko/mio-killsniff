# MIO Kill Sniffers Lib

Middleware for Express to filter sniffers and crawlers by User-Agent.

It's block request from port scanners, nmap, appscan, etc.

Also blocking requests pointed to other domains

# Quick Start

Just add middleware to your express app

# Sample

const killSniff = require('mio-killSniff');

...

app.use(killSniff({domains: Domains}));
