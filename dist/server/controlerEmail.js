"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
function enviarCorreo(para, asunto, text) {
    console.log(process.env.EMAIL);
    console.log(process.env.PASS);
    const transpoter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        },
        secure: true
    });
    let mensaje = {
        from: "no-reply@gmail.com",
        to: para,
        subject: asunto,
        text: text
    };
    transpoter.sendMail(mensaje).then(() => {
        console.log(`Correo enviado a ${para}`);
    }).catch((err) => {
        console.log('error al enviar el correo');
        console.log(err);
    });
}
exports.default = enviarCorreo;
