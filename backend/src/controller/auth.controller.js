const userModel = require('../models/user.model');
const foodPartnerModel = require('../models/foodpartner.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {

    const { fullname, email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })
    
    if(isUserAlreadyExists){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullname,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullname: user.fullname
        }
    })


}

async function loginUser(req, res) {
    //login user logic
    const { email, password} = req.body;

    const user = await userModel.findOne({
        email
    })  

    if(!user){
        return res.status(404).json({
            message: "invalid email or password"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user._id,
            email: user.email,
            fullname: user.fullname
        } 
    })


}

function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "User logged out successfully"
    });
}

async function registerFoodPartner(req, res) {
    //register food partner logic
    const { name, email, password } = req.body;
     const isAccountAlreadyExists = await foodPartnerModel.findOne({
        email
    })

    if(isAccountAlreadyExists){
        return res.status(400).json({
            message: "Food Partner account already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({

    name,
    email,
    password: hashedPassword
    
   })
   const token = jwt.sign({
    id: foodPartner._id,
   }, process.env.JWT_SECRET)
   res.cookie("token", token)      
   
   res.status(201).json({
    message: "Food Partner registered successfully",
    foodPartner: {
        _id: foodPartner._id,
        email: foodPartner.email,
        name: foodPartner.name
    }

})
}

async function loginFoodPartner(req, res) {
    //login food partner logic
    const { email, password} = req.body;
    const foodPartner = await foodPartnerModel.findOne({
        email
    })
    if(!foodPartner){
        return res.status(404).json({
            message: "Invalid email or password"
        })
    }
    const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid password"
        })
    }
    const token = jwt.sign({
        id: foodPartner._id,
    }, process.env.JWT_SECRET)
    res.cookie("token", token)

    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
            _id: foodPartner._id,
            email: foodPartner.email,   
            name: foodPartner.name
        } 
    })
}

function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({
        message: "Food Partner logged out successfully"
    });
}



module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner

}