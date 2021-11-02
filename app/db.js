const mongoose = require("mongoose")
 const config = {
    url: 'mongodb://mongodb',
    user: 'admin',
    pwd: 'password'
}
module.exports={
    connect:()=>{
        mongoose.Promise = global.Promise;
        mongoose.connect(config.url, {
            useNewUrlParser: true,
            user: config.user,
            pass: config.pwd,
            dbName:"test"
        }).then(() => {
            console.log('successfully connected to the database');
        }).catch(err => {
            console.log(err)
            console.log('error connecting to the database');
            process.exit();
        });
    }
}