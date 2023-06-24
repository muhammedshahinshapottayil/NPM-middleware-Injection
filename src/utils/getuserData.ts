const { MongoClient, ObjectId } = require("mongodb");
import "dotenv/config";
const fetchUserById = async (id: string) => {
  try {
    const url = process.env.URL || "mongodb://127.0.0.1:27017/";
    const dbName = process.env.DBNAME || "enterprisepro_users";
    const client = new MongoClient(url, { monitorCommands: true });
    await client.connect();
    const db = client.db(dbName);
    const user = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });
    client.close();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return false;
  }
};

export default fetchUserById;
