const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing");
const MONGO_URL="mongodb://127.0.0.1:27017/wl";

main()
    .then(()=>{
        console.log("connected to db")
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect(MONGO_URL);
}
const initDB=async () =>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({
        ...obj,owner:'66588dc6afe78d689623fe08'
    }))
    await Listing.insertMany(initdata.data);
    console.log("data was initialised");
}
initDB();