import e, {Router,Request,Response} from 'express';
import MySQL from '../sql/mysql';
import email from '../server/controlerEmail';
import jws = require('jsonwebtoken');



const router = Router();
router.use(e.urlencoded({extended:true}));
router.get('/user',(req:Request,res:Response)=>{
    const query =`
        SELECT * 
        FROM user`;
    
    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            res.status(400).json({
                ok:false,
                error:err,
            });
        }else{
            res.json({
                ok:true,
                user:user
            });
        }
    });

});

router.get('/user/:id',(req:Request,res:Response)=>{
    const id = req.params.id;
    const escapeId = MySQL.instance.cnn.escape(id);
    const query =`
            SELECT * 
            FROM user
            where id = ${escapeId}`;
    
    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            res.status(400).json({
                ok:false,
                error:err,
            });
        }else{
            res.json({
                ok:true,
                user:user[0]
            });
        }
    });
   
});

router.post('/user',(req:Request,res:Response)=>{
 

    const user = req.body.username;
       
    const token = jws.sign({
        username:user
    },`${process.env.SEED}`,{expiresIn:60*60});


    const usernameEscape = MySQL.instance.cnn.escape(user);
    const tokenEscape = MySQL.instance.cnn.escape(token);
    const query = `
    INSERT INTO user (id,version,account_expired,account_locked,amount_of_media_entries,date_created,deleted,enabled,full_name,invitation_sent,language,last_updated,password,password_expired,pause_video_on_click,username,uuid) VALUES (NULL, '0', b'0', b'0', NULL, NULL, b'0', b'1', NULL, b'1', 'es', NULL, 'NO_PASSWORD', b'0', b'1',${usernameEscape}, ${tokenEscape})
    `;

    MySQL.ejecutarQuery(query,(err:any,user:Object[])=>{
        if(err){
            res.status(400).json({
                ok:false,
                error:err,
            });
        }else{
            res.json({
                ok:true,
                user:user
            });
        }
    });
    email(user,'UamiStream',`${process.env.UAMI_STREAMA}invite?uuid=${token}`);
    
});

export default router;