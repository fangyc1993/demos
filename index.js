var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query

  //从这里开始看，上面不要看

  if(path === '/'){
    var string = fs.readFileSync('./index.html') 
    response.end(string)
  }if(path === '/style.css'){
    var string = fs.readFileSync('./style.css');
    response.end(string)
  }if( path === '/main.js'){
    var string = fs.readFileSync('./main.js')
    response.setHeader('Content-Type','application/javascript')
    response.end(string)
  }else if( path === '/page1.json'){
    var string = fs.readFileSync('./page1.json')
    response.setHeader('Content-Type','application/xml')
    response.end(string)
  }else if( path === '/page2.json'){
    var string = fs.readFileSync('./page2.json')
    response.setHeader('Content-Type','application/xml')
    response.end(string)
  }else if( path === '/page3.json'){
    var string = fs.readFileSync('./page3.json')
    response.setHeader('Content-Type','application/xml')
    response.end(string)
  }else if( path === '/page4.json'){
    var string = fs.readFileSync('./page4.json')
    response.setHeader('Content-Type','application/xml')
    response.end(string)
  }else if( path === '/page5.json'){
    var string = fs.readFileSync('./page5.json')
    response.setHeader('Content-Type','application/xml')
    response.end(string)
  }else{
    response.end('404')
  }
