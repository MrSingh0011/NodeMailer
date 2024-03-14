const nodemailer = require("nodemailer");
const sendMail=async(req,res)=>{
    let testAccount=await nodemailer.createTestAccount()

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'noah.simonis@ethereal.email',
            pass: 'cvRGGHdcpUEnKkpJuP'
        }
    });

    let info= await transporter.sendMail({
    from: '"Rishabh Singh 👻" <noah.simonis@ethereal.email>', // sender address
    to: "rishabh.singh@jbmgroup.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    })

    console.log("Message sent: %s",info.messageId)

    res.json(info)
}



module.exports=sendMail;