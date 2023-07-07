import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic for a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('POST to the database'); // Used to verify connection
  const jateDb = await openDB('jate', 1); // Opening link to 'jate' db version '1'
  const tx = jateDb.transaction('jate', 'readwrite'); // Config type of 'transaction' allowed
  const store = tx.objectStore('jate'); // Creating an objectStore which can be added to db
  const request = store.add({ textBody: content }); // Adds objectStore to db as key-value pair
  const result = await request; // Checks for success to be returned as log to user
  console.log('Success! Saved to database', result);
}

// Logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database'); // Notes for logic similar to notes for postDb method
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
