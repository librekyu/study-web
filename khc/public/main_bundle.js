(()=>{var e={605:e=>{"use strict";e.exports=require("http")}},r={};(function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports})(605).createServer((function(e,r){r.writeHead(200,{"Content-Type":"text/plain"}),r.end("Hello World\n")})).listen(3e3,"127.0.0.1"),console.log("Server running at http://127.0.0.1:3000")})();