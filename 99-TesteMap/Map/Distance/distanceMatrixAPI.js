require("dotenv").config();
const axios = require("axios");
// Distance Between Two Addresses using Google Maps API NodeJs
async function calculateDistance() {
  try {
    const apiKey = process.env.GOOGLE_API_KEY;

    // De:
    const deliveryAddress =
      "Mohali 7 Phase, Sector 61, Sahibzada Ajit Singh Nagar, Chandigarh, Punjab, India";

    // Para:
    const vendorAddress = "IT City Road, India";

    const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${vendorAddress}&destinations=${deliveryAddress}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    console.log(response.data);
    console.log(response.data.rows[0].elements);
  } catch (error) {
    console.log(error);
  }
}

// Call the function to calculate the distance
calculateDistance();
