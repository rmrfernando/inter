import mongoose from "mongoose";

const connect = ()=>{
    const dbUrl='mongodb+srv://roshailfernando2001:B7nK7iYPcXSdXYuC@interact.v4gqgjh.mongodb.net/Interact'

    return mongoose.connect(dbUrl);
}

export default connect;