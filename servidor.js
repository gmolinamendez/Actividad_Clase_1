const http = requiere(http);

http.createServer((req, res) => {
    console.log("Here we are")
    res.write("Hello from JS");
    res.end;
}).listen(4000);