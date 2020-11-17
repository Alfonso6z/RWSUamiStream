import e, {Router,Request,Response} from 'express';
import MySQL from '../sql/mysql';
import email from '../server/controlerEmail';
import jws = require('jsonwebtoken');



const router = Router();
router.use(e.urlencoded({extended:true}));


router.post('/user',(req:Request,res:Response)=>{
 

    const userEmail = req.body.username;
       
    const token = jws.sign({
        username:userEmail
    },`${process.env.SEED}`,{expiresIn:60});


    const usernameEscape = MySQL.instance.cnn.escape(userEmail);
    const tokenEscape = MySQL.instance.cnn.escape(token);
    const query = `
    INSERT INTO user (id,version,account_expired,account_locked,amount_of_media_entries,date_created,deleted,enabled,full_name,invitation_sent,language,last_updated,password,password_expired,pause_video_on_click,username,uuid) VALUES (NULL, '0', b'0', b'0', NULL, NULL, b'0', b'1', NULL, b'1', 'es', NULL, 'NO_PASSWORD', b'0', b'1',${usernameEscape}, ${tokenEscape})
    `;

    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            return res.render('confirmacion',{msg:{email:userEmail,mensaje:'No se puede registrar este correo'}});
        }else{
            // TODO: Colocar el cuerpo del mensaje registro
            email(userEmail,'UamiStream',`${process.env.UAMI_STREAM}invite?uuid=${token}`);
            return res.render('confirmacion',{msg:{email:userEmail,mensaje:'Se envio un correo de verificación, verifica tu bandejaq de entrada para continuar con tu registro'}});
        }
    });
    
    
});

router.post('/userPassword',(req:Request,res:Response)=>{
 

    const userEmail = req.body.username;
       
    const token = jws.sign({
        username:userEmail
    },`${process.env.SEED}`,{expiresIn:60});


    const usernameEscape = MySQL.instance.cnn.escape(userEmail);
    const tokenEscape = MySQL.instance.cnn.escape(token);
    const query = `
    UPDATE user SET uuid=${tokenEscape} WHERE username=${usernameEscape}`;

    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            return res.render('confirmacion',{msg:{email:userEmail,mensaje:'No se encontro este correo'}});
        }else{
            // TODO: Colocar el cuerpo del mensaje recuperar contraseña
            email(userEmail,'UamiStream',`${process.env.UAMI_STREAM}invite?uuid=${token}`);
            return res.render('confirmacion',{msg:{email:userEmail,mensaje:'Se envio un correo de verificación, verifica tu bandejaq de entrada para actualizar tu contraseña'}});
        }
    });
    
    
});

export default router;