import nodemailer = require('nodemailer');

function enviarCorreo(para:string,asunto:string,text:string){
    const transpoter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port: 465 ,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASS
        },
        secure: true
    });

    let mensaje = {
        from:"no-reply@gmail.com",
        to:para,
        subject:asunto,
        html:text
    }

    transpoter.sendMail(mensaje).then(()=>{
        console.log(`Correo enviado a ${para}`);
    }).catch((err)=>{
        console.log('error al enviar el correo');
        console.log(err);
    });
}
export default enviarCorreo;