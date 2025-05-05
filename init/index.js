const mongoose= require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(Mongo_URL);
}

const initDB = async ()=>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj)=>({
    ...obj,
    owner:"66e0b56a62eab14089233829"
   }));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();