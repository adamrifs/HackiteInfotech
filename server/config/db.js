const mongoose = require('mongoose')

const connectDB = () => mongoose.connect('mongodb+srv://rifsadam81_db_user:rifsadam81_db_user@cluster0.hwkhmmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('database connected succesfully')
    })
    .catch(err => {
        console.log(err)
    })

module.exports = connectDB