

import mongoose from "mongoose";
const dbconnectionurl = process.env.MONGODB_URI

type ConnectionObject = {
    isConnected?: number;
};
const connection: ConnectionObject = {};
// void is basiclly when we dont know what type of data is 
 // also i dont care what type of data will be here
export async function dbconnection(): Promise<void> {
      // Check if we have a connection to the database or if it's currently connecting
    if (connection.isConnected) {
        console.log('Already connected to the database');
        return;
    }
    try {
        const db = await mongoose.connect(dbconnectionurl || "", {});
        connection.isConnected = db.connections[0].readyState;

        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);

        // Graceful exit in case of a connection error
        // as we know that there is no datbase connect so we exist the application
        process.exit(1);

    }
}
