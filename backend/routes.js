const express = require('express');
const router = express.Router()
const Drink = require('./models/Drink');
const User = require('./models/User');
const jwt = require('jsonwebtoken')

//http://localhost:5000/api/all-drinks GET
router.get('/all-drinks', async (req, res) => {
    let { limit, skip } = req.query
    console.log(req.query, limit)
    let allDrinks = await Drink.find().populate('userId').limit(Number(limit)).skip(Number(skip))
    // console.log(allDrinks, "vnfkjvbdfk")
    res.json(allDrinks)
})

//http://localhost:5000/api/new-drink POST
router.post('/new-drink', authorize, async (req, res) => {
    //Every time you put authorize as middleware you'll have the user as res.locals.user
    let newDrink = req.body
    console.log('new rink', req.body)
    newDrink.userId = res.locals.user._id //How we add the userId to the post document
    let drink = await Drink.create(newDrink)
    res.json(drink)
})

router.get('/my-drinks', authorize, async (req, res) => {

    let myDrinks = await Drink.find({ userId: res.locals.user._id }).populate('userId')

    res.json(myDrinks)

})

router.post('/getOneCocktail', async (req, res) => {
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
    let updatedDrink = await Drink.findByIdAndUpdate(req.body.drinkId, { $addToSet: { likes: res.locals.user._id } }, { new: true }).populate('userId')
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
router.get('/getLikedDrinks', authorize, async (req, res) => {
    let likedDrinks = await Drink.find({ likes: { $in: res.locals.user._id } })
    console.log('likedDrinks')
    res.json(likedDrinks)
})

router.get('/results', async (req, res) => {
    console.log("results", req.query)
    let { keyword } = req.query
    let drinks = await Drink.find({
        $or: [
            { name: { $regex: keyword, $options: 'i' } },
            { ingredients: { $regex: keyword, $options: 'i' } },
            { instructions: { $regex: keyword, $options: 'i' } }
        ]
    })
    // var result = db.collection('AdSchema').find({
    //     $or: [ {vehicleDescription : { $regex: search.keyWord, $options: 'i' }}, { adDescription: { $regex: search.keyWord, $options: 'i' } } ]
    return res.json(drinks)
})

// Get New Drink
router.get('/get-new-drinks', async (req, res) => {
<<<<<<< HEAD
    let drinks = await Drink.find().sort({ createdAt:-1 }).limit(6)
=======
    let drinks = await Drink.find().sort({ createdAt: -1 }).limit(4)
>>>>>>> d57efd96c4668203d164e6d1c0e6173b403629f5
    res.json(drinks)
})

// Get Random Drink
router.get('/get-random-drinks', async (req, res) => {
<<<<<<< HEAD
    let drinks = await Drink.aggregate([ {$sample: {size:6}} ])
=======
    let drinks = await Drink.aggregate([{ $sample: { size: 4 } }])
>>>>>>> d57efd96c4668203d164e6d1c0e6173b403629f5
    res.json(drinks)
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