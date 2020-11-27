import router from './router/router';
import Server from './server/server';

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}


const port = parseInt(`${process.env.PORT}`) || 3000;
const server = Server.init(port);

// MySQL.instance;
server.app.use(router);

server.start(()=>{
    console.log(`Servidor Corriendo en el puerto ${port}`);
});
