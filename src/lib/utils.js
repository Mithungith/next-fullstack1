import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using existing connection");
            return;
        }

        // Mongoose connection options
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        };

        // Establish a new connection
        await mongoose.connect(process.env.MONGO, options);

        // Set isConnected to the readyState of the connection
        connection.isConnected = mongoose.connections[0].readyState;

        // Connection event listeners
        mongoose.connection.on("connected", () => {
            console.log("Connected to MongoDB");
        });

        mongoose.connection.on("error", (err) => {
            console.error("MongoDB connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.log("Disconnected from MongoDB");
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        throw new Error(error.message);
    }
};
