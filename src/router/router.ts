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
            let mensajeC = `${userEmail} es incorrecto o ya esta registrado.`
            return res.render('confirmacion',{mensaje:mensajeC,titulo:'Error',advertencia:'',boton:textBtn('/','Inténtalo de nuevo')});
        }else{
            let mensajeC = `Te enviamos un email a ${userEmail}. Si no lo ves en tu bandeja de entrada, revisa la carpeta de correo no deseado.`
            email(userEmail,'UAMIStream - ¡Bienvenido!',renderizarGMAIL(
                '¡Bienvenido a UAMIStream!',
                'Para crear una contraseña presione el siguiente botón',
                'Crear contraseña',
                `${process.env.UAMI_STREAM}invite?uuid=${token}`));
            return res.render('confirmacion',{mensaje:mensajeC,titulo:'Email enviado',advertencia:'Ya puedes cerrar esta página'});
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
        if(Object.values(user)[1]){
            let mensajeC = `Te enviamos un email con instrucciones para restablecer la contraseña a ${userEmail}. Si no lo ves en tu bandeja de entrada, revisa la carpeta de correo no deseado.`
            email(userEmail,'UAMIStream - Recupera contarseña',renderizarGMAIL(
                'Recupera tu contraseña',
                'Para recuperar tu contraseña presione el siguiente botón',
                'Recuperar contraseña',
                `${process.env.UAMI_STREAM}invite?uuid=${token}`));
            return res.render('confirmacion',{mensaje:mensajeC,titulo:'Email enviado',advertencia:'Ya puedes cerrar esta página'});
            
        }else{
            let mensajeC = `${userEmail} no esta registrado`
            return res.render('confirmacion',{mensaje:mensajeC,titulo:'Error',advertencia:'',boton:textBtn('/recuperar.html','Inténtalo de nuevo')});
        }
    });
    
    
});

const renderizarGMAIL = (titulo:string,body:string,msgbtn:string,url:string):string =>{
    
    let html = `
    <div>&nbsp;</div>
    <table style="max-width: 600px; padding: 10px; margin: 0 auto; border-collapse: collapse;">
        <tbody>
            <tr>
            <td style="padding: 3; background-color: black;">
            <div class="container m-3 p-3">
            <img style="display: block;" src="http://imgfz.com/i/ZKvEljU.png" width="100%" /></td>
            </div>
            </tr>
            <tr>
                <td style="background-color: #ecf0f1;">
                    <div style="color: #494e52; margin: 4% 10% 2%; text-align: justify; font-family: sans-serif;">
                        <h2 style="color: black; margin: 0 0 7px;">${titulo}</h2>
                        <br/>
                        <p style="margin: 2px; font-size: 15px;">${body}</p>
                        <br /><br />
                        <div style="width: 100%; text-align: center;"><a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: black; text-align: center;" href="${url}">${msgbtn}</a></div>
                        <p style="color: #8b8484; font-size: 12px; text-align: center; margin: 30px 0 0;">UAMISTREAM es un un servidor de videos que est&aacute; desarrollado como parte de un proyecto de la IntraNet Comunitaria SIN FINES DE LUCRO</p>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>`;
    
    return html;
}

const textBtn = (view:string,mensaje:string ):string => {
    return ` 
    <div class="container">
        <div class="row d-block">
            <a class="colortextbtn" href="${view}">${mensaje}</a>
        </div>
    </div>`;
}
export default router;