class Database {
  static instance = null

  constructor() {
    if (Database.instance !== null) {
      throw new Error('Use Database.getInstance() instead of new')
    }
  }

  static getInstance = () => {
    if (Database.instance === null) {
      Database.instance = new Database()
      console.log('Database instance is active')
    }
    return Database.instance
  }

  connect = () => {
    console.log("Connecting to the database...");
    return {};
  }

  query = (filter) => {
    console.log(`Executing query: ${JSON.stringify(filter)}`);
    return {}
  }
}

// Testando o Singleton
const db1 = Database.getInstance();
db1.query({ _id: 'any_id_1' });

const db2 = Database.getInstance();
db2.query({ _id: 'any_id_2' });

console.log(db1 === db2); // true


