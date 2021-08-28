const express = require('express');
const app = express();

const mysql = require('mysql');

const cors = require('cors');

app.use(cors());
app.use(express.json());

const contactsDB = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'password', 
    database: 'contacts_db'
})

app.post('/contacts', (req, res) => { 
    const firstName = req.body.firstName; 
    const lastName = req.body.lastName; 
    const companyName = req.body.companyName; 
    const phoneNumber = req.body.phoneNumber; 
    const email = req.body.email; 

    const contactInsertionString = 'INSERT INTO contacts (first_name, last_name, company_name, phone_number, email) VALUES (?, ?, ?, ?, ?);';

    contactsDB.query(contactInsertionString, [firstName, lastName, companyName, phoneNumber, email], (err, result) => {
        if (err) { 
            console.log(err);
        }
        else { 
            res.send('Values inserted');
        }
    })
})

app.listen(3001, () => { 
    console.log("3001 responding and working!");
})

