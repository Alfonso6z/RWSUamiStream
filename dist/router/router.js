"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const mysql_1 = __importDefault(require("../sql/mysql"));
const controlerEmail_1 = __importDefault(require("../server/controlerEmail"));
const jws = require("jsonwebtoken");
const router = express_1.Router();
router.use(express_1.default.urlencoded({ extended: true }));
router.post('/user', (req, res) => {
    const user = req.body.username;
    const token = jws.sign({
        username: user
    }, `${process.env.SEED}`, { expiresIn: 60 });
    const usernameEscape = mysql_1.default.instance.cnn.escape(user);
    const tokenEscape = mysql_1.default.instance.cnn.escape(token);
    const query = `
    INSERT INTO user (id,version,account_expired,account_locked,amount_of_media_entries,date_created,deleted,enabled,full_name,invitation_sent,language,last_updated,password,password_expired,pause_video_on_click,username,uuid) VALUES (NULL, '0', b'0', b'0', NULL, NULL, b'0', b'1', NULL, b'1', 'es', NULL, 'NO_PASSWORD', b'0', b'1',${usernameEscape}, ${tokenEscape})
    `;
    mysql_1.default.ejecutarQuery(query, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Se registro correctamente');
        }
    });
    controlerEmail_1.default(user, 'UamiStream', `${process.env.UAMI_STREAM}invite?uuid=${token}`);
    res.render('confirmacion', { email: user });
});
exports.default = router;
