const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = 5000;
mongoose.connect('mongodb+srv://dharanigilli1510:151004@recharge.pe2o9nu.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mobileSchema = new mongoose.Schema({
  mobile: String,
});
const Mobile = mongoose.model('Mobile', mobileSchema);
app.use(express.json());
// Create a POST endpoint for registering mobile numbers
app.post('/register', async (req, res) => {
  try {
    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({ message: 'Mobile number is required' });
    }

    // Create a new mobile number document
    const mobileDoc = new Mobile({ mobile });

    // Save the document to the database
    await mobileDoc.save();

    return res.status(201).json({ message: 'Mobile number registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
