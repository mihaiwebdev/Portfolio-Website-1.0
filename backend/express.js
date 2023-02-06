const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const nodemailer = require('nodemailer')
const app = express()
const port = process.env.PORT || 5000

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
        
    },
})

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/contactme', (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.text

    const mailOptions = {
        from: process.env.AUTH_USER,
        to: process.env.RECEIVER,
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    }


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
    
            res.status(404).json({message: error})
        
        } else {
            res.status(201).json({message: 'Message sent!'})
        }

    })

})

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))

}


app.listen(port, () => {
    console.log('Server started on port 5000')
})