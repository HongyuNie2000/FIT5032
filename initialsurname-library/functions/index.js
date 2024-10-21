/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();
const db = admin.firestore();

// Function to capitalize the first character of a string


// Cloud Function to count the number of books in Firestore
exports.countBooks = onRequest(
    (req, res) =>{
      cors(req, res, async () => {
        try {
          const booksCollection = admin.firestore().collection("books");
          const snapshot = await booksCollection.get();
          //const count = snapshot.size;
          const booksData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          res.status(200).send({booksData});
        } catch (error) {
          console.error("Error counting books:", error.message);
          res.status(200).send("Error counting books");
        }
      });
    },
);


exports.addBook = functions.https.onRequest(
    (req, res) =>{
      cors(req, res, async ()=>{
        try {
          const {isbn, name} = req.body; // Extract data from the request body

          // Validate that ISBN is a number
          const isbnNumber = Number(isbn);
          if (isNaN(isbnNumber)) {
            return res.status(400).send({error: "ISBN must be a valid number"});
          }
          await db.collection("books").add({
            isbn: isbnNumber,
            name: name.toUpperCase(),
          });

          // Send success response
          res.status(200).send({message: "Book added successfully"});
        } catch (error) {
          console.error("Error add book:", error.message);
          res.status(200).send("Error adding books");
        }
      });
    },
);


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


