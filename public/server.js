const http = require("http");
const fs = require("fs");
const path = require('path');
const { runInNewContext } = require("vm");
 
http.createServer(async (req, res) => {

  console.log(`req: ${req.url}`)
  if (req.url === '/') {
    sendRes('index.html', 'text/html', res);
  }
  else if (/\/uploads\/[^\/]+$/.test(req.url) && req.method === 'POST'){

  }
  else {
    res.end();
  }

  function sendRes(url, contentType, res) {
    let file = path.join(__dirname+'/', url);
    fs.readFile(file, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.write('file not found');
        res.end();
        console.log(`error 404 ${file}`);
      }
      else {
        res.writeHead(200, {'Content-Type': contentType});
        res.write(content);
        res.end();
        console.log(`res 200 ${file}`);
      }
    })
  }

  if(req.url == "/mimg"){

    const buffers = [];   // буфер для получаемых данных

    // получаем данные из запроса в буфер
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    // получаем строковое представление ответа
    let ch = Buffer.concat(buffers).toString();

    console.log(ch)
    //res.end(ch);
  }
  else{
  fs.readFile("index.html", (error, data) => res.end(data));
  }
 
}).listen(3000, ()=>console.log("Сервер запущен по адресу http://localhost:3000"));
