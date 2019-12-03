var http = require('http');
var Cookies = require('cookies');

class CookieHandler{
  static getCookie(searchTerm){
    var url = "";
    var server = http.createServer(function (req, res){

      var cookies = new Cookies(req, res);

      try{
        url = cookies.get(searchTerm);
      } catch {
        url = "failed";
      }
    });
    return url;
  }
}
