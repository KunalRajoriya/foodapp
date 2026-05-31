const foodPartnerModel = require('../models/foodpartner.model');
const foodModel = require('../models/food.model');

async function getFoodPartnerById(req, res) {
  try {
    const foodPartnerId = req.params.id;
    console.log("Food Partner ID:", foodPartnerId); // Debugging log
    
    const foodPartner = await foodPartnerModel.findById(foodPartnerId);
    
    if (!foodPartner) {
      return res.status(404).json({ message: 'Food partner not found' });
    }

    const foodItemsByFoodPartner = await foodModel.find({ foodpartner: foodPartnerId });

    res.status(200).json({
      message: 'food partner retrieved successfully',
      foodPartner: foodPartner,
      foodItems: foodItemsByFoodPartner
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching food partner', error: error.message });
  }
}

module.exports = { getFoodPartnerById };