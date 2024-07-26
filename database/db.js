import mongoose from "mongoose";
const mongodbURI = 'mongodb+srv://pawar_pratik:Pawar123@atlascluster.xumqhhi.mongodb.net/';

const options = {
}
     

mongoose
.connect(mongodbURI, options)
.then(()=>{
  console.log("connected to mongodb");
})
.catch((error)=>{
   console.error("error connecting to mongodb:", error)
});