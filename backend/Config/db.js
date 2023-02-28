const mongoose = require("mongoose");
//through mongoose.conect we are connecting our database with our application
const connection = mongoose.connect(

  "mongodb+srv://satyam1516:161996@cluster0.si6bxuk.mongodb.net/esmagico?retryWrites=true&w=majority"
);

module.exports={
    connection
}