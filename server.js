
const net = require('net');
const page = require('./homePage.js');
const get404 = require('./routes/404');
const getHelium = require('./routes/helium');
const getHydrogen = require('./routes/hydrogen');
const getHome = require('./routes/index');
const getStyles = require('./routes/styles');

const server = net.createServer((socket) => {
    // 'connection' listener
    // console.log('client connected');
    // console.log('data:', data);
    
    socket.on('data', data => {
        // console.log('client disconnected');
        // console.log('data:', data.toString().split(' ')[0]);
        let method = ('data:', data.toString().split(' ')[0]);
        let address = ('data:', data.toString().split(' ')[1]);
        (`HTTP/1.1 \n\n <html>${getHome}<html>`);
        if(method === 'GET'){
            if(address === '/'){
                socket.write(`HTTP/1.1 \n\n <html>${getHome}<html>`);
            }else if(address === '/hydrogen.html'){
                socket.write(`HTTP/1.1 \n\n <html>${getHydrogen}<html>`);
            }else if(address === '/helium.html'){
                socket.write(`HTTP/1.1 \n\n <html>${getHelium}<html>`);
            }else{
                socket.write(`HTTP/1.1 \n\n <html>${get404}<html>`);
            }
        }
    socket.write(`<html><link href=${getStyles} type='text/css' rel='stylesheet'><html>`);
    //socket.write(getHome);
    socket.end();

    });
  });




  server.on('error', (err) => {
    throw err;
  });


  server.listen(8080, () => {
    console.log('sick');

  });

  

