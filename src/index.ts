import router from './router/router';
import Server from './server/server';
import * as dotenv from 'dotenv';
dotenv.config();

const port = parseInt(`${process.env.PORT}`) || 3000;
const server = Server.init(port);

// MySQL.instance;
server.app.use(router);

server.start(()=>{
    console.log(`Servidor Corriendo en el puerto ${port}`);
    console.log(process.env.UAMI_STREAM);
});
