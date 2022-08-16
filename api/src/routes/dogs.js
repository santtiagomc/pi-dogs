const { Router } = require('express');
const { Dogs, Temperament } = require('..db/');
const router = Router();
const { getAllDogs } = require('./auxiliars');

router.get("/", async(req, res, next) => {
    try{
        const { name } = req.query;
        let totalDogs = await getAllDogs();

        if (name) {
            let dogName = await totalDogs.filter( el => 
                el.name.toUpperCase().includes(name.toUpperCase()))
                dogName.length ?
                res.status(200).send(dogName) :
                req.status(404).send(`error: ${name}, invalido`)
        } else {
            res.status(200).json(totalDogs ? totalDogs : `No ${name}, encontrado`)
        }
    } catch (error) {
        console.log(error)
    }
});