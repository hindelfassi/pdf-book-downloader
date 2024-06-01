import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

// Connect to the database once on startup
let db;
async function connectToDatabase() {
  if (db) {
    return db;
  }

  try {
    await client.connect();
    db = client.db("book_api_database");
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export default connectToDatabase;
