const  getServerInfo=(req,res)=>{
    //  console.log(req);
      const url=req.url;
      const method=req.method;
      if(url==='/'){
          res.write('<html>');
          res.write('<head><title>Enter Message</title><head>');
          res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="Submit">Send</form></input></body>');
          res.write('</html>');
          return res.end();
      }
  
  
      if(url==='/message' && method==='POST'){
          const body=[];
          req.on('data',(chunk)=>{
              console.log(chunk);
              body.push(chunk);
          });
  
          req.on('end',()=>{
              const typeMessage=Buffer.concat(body).toString();
              const message=typeMessage.split('=')[1];
              console.log(message);
              console.log(body);
          });
          
          return res.end();
      }
  
  
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>My First Place</title><head>');
      res.write('<body><h1>Hello how are you</h1></body>');
      res.write('<html>');
      res.end();
  
  }


//   module.exports={
//     :getServerInfo,
//     someText:"FKDLFDL;"
//   };

exports.someText="kfdsldl";
exports.requestHandler=getServerInfo;


  