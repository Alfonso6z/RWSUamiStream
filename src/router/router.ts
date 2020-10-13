import e, {Router,Request,Response} from 'express';
import MySQL from '../sql/mysql';
import email from '../server/controlerEmail';
import jws = require('jsonwebtoken');



const router = Router();
router.use(e.urlencoded({extended:true}));

router.post('/user',(req:Request,res:Response)=>{
 

    const user = req.body.username;
       
    const token = jws.sign({
        username:user
    },`${process.env.SEED}`,{expiresIn:60});


    const usernameEscape = MySQL.instance.cnn.escape(user);
    const tokenEscape = MySQL.instance.cnn.escape(token);
    const query = `
    INSERT INTO user (id,version,account_expired,account_locked,amount_of_media_entries,date_created,deleted,enabled,full_name,invitation_sent,language,last_updated,password,password_expired,pause_video_on_click,username,uuid) VALUES (NULL, '0', b'0', b'0', NULL, NULL, b'0', b'1', NULL, b'1', 'es', NULL, 'NO_PASSWORD', b'0', b'1',${usernameEscape}, ${tokenEscape})
    `;

    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            console.log(err);
        }else{
            console.log('Se registro correctamente');
        }
    });
    email(user,'UamiStream',`${process.env.UAMI_STREAM}invite?uuid=${token}`);
    res.render('confirmacion',{email:user});
    
});

export default router;