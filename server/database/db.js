
import mongoose from "mongoose";


const Connection = async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-uvdvstd-shard-00-00.ofalqik.mongodb.net:27017,ac-uvdvstd-shard-00-01.ofalqik.mongodb.net:27017,ac-uvdvstd-shard-00-02.ofalqik.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkq69l-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-inshorts`;
    try{
       await  mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error);
    }
}

export default Connection;
