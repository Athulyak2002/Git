const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string
const dbName = 'athulya';

// Create
const createDocument = async (document) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('person');
        await collection.insertOne(document);
    } finally {
        await client.close();
    }
};

// Read
const findDocuments = async () => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('person');
        const result = await collection.find({}).toArray();
        console.log(result);
    } finally {
        await client.close();
    }
};

// Update
const updateDocument = async (filter, update) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('person');
        await collection.updateOne(filter, { $set: update });
    } finally {
        await client.close();
    }
};

// Delete
const deleteDocument = async (filter) => {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('person');
        await collection.deleteOne(filter);
    } finally {
        await client.close();
    }
};

// Example usage:
createDocument({ key: 'value' });
findDocuments();
updateDocument({ key: 'value' }, { key: 'new-value' });
deleteDocument({ key: 'new-value' });