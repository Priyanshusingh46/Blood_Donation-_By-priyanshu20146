const mongoose = require ("mongoose");
mongoose.connect("mongodb+srv://priyanshu:12345@practicum3.ggdpq.mongodb.net/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true

}).then(()=>{
    console.log("connection build")
}).catch((e)=>{
    console.log(e);
})