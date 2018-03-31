const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) => {
  console.log("We are here")
  res.json({msg: "Let get this shit popping!"});
});

router.post('/articles', (req, res) => {
  // Write code to save article to database.

});

// I will have to choose the verb I would like to use for this api.
router.delete('/articles', (req, res) => {
  // Write code to delete a specific article from the database
})
module.exports = router;
