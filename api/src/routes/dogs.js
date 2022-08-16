const { Router } = require("express");
const { Dogs, Temperament } = require("../db");
const router = Router();
const { getAllDogs } = require("./auxiliars");

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

router.get("/:id", async (req, res) => {
    try{
        const {id} = req.params;
        const totalDogs = await getAllDogs()
        if(id) {
            let dogId = await totalDogs.filter ( el => el.id == id);
            dogId.length ?
            res.status(200).json(dogId) :
            res.status(404).send(`error: ${id} invalido`)
        }
    } catch {
        console.log(error)
        res.status(202).send(`error: ${id} innvalido`)
    }
});

router.post("/", async (req, res) => {
    let {
        name,
        life_span,
        height,
        weight,
        image,
        temperament,
    } = req.body;
    try {
        let postDog = await Dogs.create ({
            name,
            life_span,
            height,
            weight,
            image
        })
        let temperamentDb = await Temperament.findAll ({
            where: {name: temperament}
        })
        postDog.addTemperament(temperamentDb)
        res.send("Dog add succefully")
    } catch (error) {
        res.status(500).send("error: post failed")
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let {id} = req.params;
        res.json(await Dogs.destroy({
            where: {id}
        }));
    }catch (error){
        res.send("borrado fallido")
    }
})

module.exports = router;

