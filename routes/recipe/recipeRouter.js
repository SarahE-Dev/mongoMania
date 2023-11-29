const express = require('express');
const router = express.Router();

const recipeController = require('./controller/recipeController');

router.get('/get-all-recipes', (req, res)=>{
    recipeController.getAllRecipe()
    .then((payload)=>{
        res.json({message: "Success", data: payload})
    })
    .catch((error)=>{
        res.status(500).json({message: "error", error})
    })
})

router.post('/create-recipe', (req, res)=>{
    recipeController.createRecipe(req.body)
    .then((payload)=>{
        res.json({message: "Success", data: payload})
    })
    .catch((err)=>{
        res.status(500).json({message: 'error', err})
    })
})

module.exports = router