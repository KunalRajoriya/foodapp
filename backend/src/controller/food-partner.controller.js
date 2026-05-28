const foodPartnerModel = require('../models/food-partner.model');

async function getFoodPartnerById(req, res) {
 
    const foodPartnetId = req.params.id;
    
    const foodPartner = await foodPartnerModel.findById(foodPartnetId);

    if(!foodPartner){
        return res.status(404).json({
            message: "Food Partner not found"
        })
    }
    res.status(200).json(
        {
            message: 'food partner retrieved successfully',
            foodPartner
        }
    );
}
module.exports = {
    getFoodPartnerById
}