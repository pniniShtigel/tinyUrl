
import mongoose from "mongoose";

const ClicksSchema = mongoose.Schema({
    insertedAt: Date ,
    ipAddress: String
});
const LinkSchema = mongoose.Schema({
    originalUrl: String,
    clicks: [ClicksSchema]
});

const LinksModel = mongoose.model('Links', LinkSchema);

export default LinksModel;


  