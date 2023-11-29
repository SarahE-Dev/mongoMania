const Recipe = require('../model/Recipe');

module.exports = {
    getAllRecipe: ()=>{
        return new Promise((res, rej)=>{
            Recipe.find({})
            .then((payload)=>{
                res(payload)
            })
            .catch((error)=>{
                rej(error)
            })
        })
    },
    createRecipe: (body)=>{
        return new Promise((res, rej)=>{
            let newRecipe = new Recipe({
                recipeName: body.recipeName
            })
            return newRecipe.save()
            .then(newRecipe=>{
                res(newRecipe)
            })
            .catch(err=>{
                rej(err)
            })
        })
    }
}