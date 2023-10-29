const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/HabitTrackerDb").then(()=>{
    console.log("connection sucessfull");
}).catch((e)=>{
    console.log("connection unsuccesfull");
});