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
    console.log(process.env.NODE_ENV);
    console.log(process.env.PORT);
    console.log(process.env.MYSQL_HOST);
    console.log(process.env.MYSQL_USER);
    console.log(process.env.MYSQL_PASS);
    console.log(process.env.MYSQL_DB);
    console.log(process.env.EMAIL);
    console.log(process.env.PASS);
    console.log(process.env.CADUCIDAD_TOKEN);
    console.log(process.env.SEED);
    console.log(process.env.UAMI_STREAM);
});
