const { MongoClient } = require('mongodb');

let cachedDb1 = null;
let cachedDb2 = null;
let cachedDb3 = null;

const dbName1="NEET";
const dbName2="JEE";
const dbname3="Scholarship";

export const connectToDBNEET = async () => {
  if (cachedDb1 && cachedDb1.serverConfig.isConnected()) {
    console.log('Using cached database instance');
    return cachedDb1;
  }

  const uri = process.env.MONGO; // URI for connecting to MongoDB

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const conn = await client.connect();
    console.log('Connected to MongoDB');

    const db = conn.db(dbName1); // Get the default database
    cachedDb1 = db; // Cache the database connection

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB database NEET:', error);
    throw error;
  }
};

export const connectToDBJEE = async () => {
  if (cachedDb2 && cachedDb2.serverConfig.isConnected()) {
    console.log('Using cached database instance');
    return cachedDb2;
  }

  const uri = process.env.MONGO; // URI for connecting to MongoDB

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const conn = await client.connect();
    console.log('Connected to MongoDB');

    const db = conn.db(dbName2); // Get the default database
    cachedDb2 = db; // Cache the database connection

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB database JEE:', error);
    throw error;
  }
};



export const connectToDBScholarship = async () => {
  if (cachedDb3 && cachedDb3.serverConfig.isConnected()) {
    console.log('Using cached database instance');
    return cachedDb3;
  }

  const uri = process.env.MONGO; // URI for connecting to MongoDB

  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    const conn = await client.connect();
    console.log('Connected to MongoDB');

    const db = conn.db(dbname3); 
    cachedDb3 = db; // Cache the database connection

    return db;
  } catch (error) {
    console.error('Error connecting to MongoDB database Scholarship:', error);
    throw error;
  }
};


// import mongoose from "mongoose";

// export const connectToDB = async () => {
//   const connection = {};
//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect(process.env.MONGO);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     throw new Error(error);
//   }
// };