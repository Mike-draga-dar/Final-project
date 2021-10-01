const express = require('express');
const router = express.Router()
const Drink = require('./models/Drink');
const User = require('./models/User');
const jwt = require('jsonwebtoken')

//http://localhost:5000/api/all-drinks GET
router.get('/all-drinks', async (req, res) => {
    let allDrinks = await Drink.find().populate('userId')
    // console.log(allDrinks, "vnfkjvbdfk")
    res.json(allDrinks)
})

//http://localhost:5000/api/new-drink POST
router.post('/new-drink', authorize, async (req, res) => {
    //Everyime you put authorize as middleware you'll have the user as res.locals.user
    let newDrink = req.body
    newDrink.userId = res.locals.user._id //How we add the userId to the post document
    let drink = await Drink.create(newDrink)
    res.json(drink)
})

router.get('/my-drinks', authorize, async (req, res) => {

    let myDrinks = await Drink.find({ userId: res.locals.user._id }).populate('userId')

    res.json(myDrinks)

})

router.post('/getOneCocktail', authorize, async (req, res) => {
    console.log('did i  hit this!?', req.body)
    let getOneCocktail = await Drink.findById(req.body.drinkId)
    res.json(getOneCocktail)
})


router.get('/get-user', authorize, async (req, res) => {
    let user = await User.findById(res.locals.user._id)
    res.json(user)
})
router.post('/like-drink', authorize, async (req, res) => {
    console.log('did i  hit this!?', req.body)
    let updatedDrink = await Drink.findByIdAndUpdate(req.body.drinkId, { $inc: { likes: 1 } }, { new: true }).populate('userId')
    res.json(updatedDrink)
})

router.post('/authenticate', async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (!user) { //if the user is not in database create them
        user = await User.create(req.body)
    }
    jwt.sign({ user }, 'secret key', { expiresIn: '30min' }, (err, token) => {
        res.json({ user, token })
    })
})


//Middleware >>> Put this in the middle of any route where you want to authorize
function authorize(req, res, next) {
    let token = req.headers.authorization.split(' ')[1] //Token from front end 
    if (token) {
        jwt.verify(token, 'secret key', (err, data) => {
            if (!err) {
                res.locals.user = data.user //Set global variable with user data in the backend 
                next()
            } else {
                res.status(403).json({ message: err })
                //throw new Error({ message: "ahhh" })
            }

        })
    } else {
        res.status(403).json({ message: "Must be logged in!" })
    }
}

module.exports = router