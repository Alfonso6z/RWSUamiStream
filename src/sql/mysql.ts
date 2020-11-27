import mysql = require('mysql');

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

export default class MySQL{

    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor(){
        console.log('Clase inicializada');
        this.cnn = mysql.createConnection({
            host:process.env.MYSQL_HOST,
            user:process.env.MYSQL_USER,
            password:process.env.MYSQL_PASS,
            database:process.env.MYSQL_DB,
        });

        this.conectarDB();
    }

    public static get instance(){
        return this._instance || ( this._instance = new this());
    }

    static ejecutarQuery(query: string, callback:Function){

        this.instance.cnn.query(query,(err,results:Object[],fields)=>{
            
            if(err){
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if(results.length === 0){
                callback('El registro solicitado no existe');
            }else{

                callback(null,results);
            }
            
        });

    }

    private conectarDB(){
        this.cnn.connect((err:mysql.MysqlError)=>{
            
            if(err){
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }


}