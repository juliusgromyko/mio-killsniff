// Remove sniffers and crawlers by User-Agent
// Created for MIO server | www.MakeItOnce.net
// Author: Julius Gromyko | juliusgromyko@gmail.com
// Julius Gromyko (C) 2016
'use strict';

// Magic Function
function killSniff(opts){
  var middleware = function(req, res, next){

    // Skip all request to errors pages
    if(req.path.substring(0,6)=='/error'){
      return next();
    }

    // Detect Sniffer User Agent
    var ua = req.headers['user-agent'].toLowerCase();
    var isSniff = !!/nmap|nikto|wikto|sf|sqlmap|bsqlbf|w3af|acunetix|havij|appscan/.exec(ua);
    if(isSniff){
      res.redirect('/error/403');
      return;
    }

    // Check for Requested Domain
    if(opts.domains && opts.domains.length){
      if(opts.domains.indexOf(req.hostname) == -1){
        res.redirect('/error/404');
        return;
      }
    }

    // If all is ok
    return next();
  };

  return middleware;
}

module.exports = killSniff;
