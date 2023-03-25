const { findById, findByIdAndUpdate } = require('../models/chicken.model');
const ChickenModel = require('../models/chicken.model');

// getChickens
// Récupère tous les chicken de la base de données et les renvoie en réponse sous forme de tableau JSON.
module.exports.getChickens = async (req, res) => {
    const chickens = await ChickenModel.find();
    res.status(200).json(chickens)
};

// getChicken
// Récupère un poulet spécifique en utilisant son ID et le renvoie en réponse sous forme de JSON.
module.exports.getChickenById = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "Ce chicken n'existe pas" })    
    }

    res.status(200).json(chicken)
};

// setChicken
// Crée un nouveau chicken en utilisant les informations fournies dans le corps de la requête et les enregistre dans la base de données. 
module.exports.setChickens = async (req, res) => {
    if (!req.body.name || !req.body.weight) {
        res.status(400).json({ message : "Merci de renseigner un nom et un poids" });
    }

    const chicken = await ChickenModel.create({
        name: req.body.name,
        birthday: req.body.birthday,
        weight: req.body.weight,
        steps: req.body.steps,
        isRunning: req.body.isRunning,
    });
    res.status(200).json(chicken);
};

// editChicken
// Modifie un poulet spécifique en utilisant son ID et les informations fournies dans le corps de la requête.
module.exports.editChiken = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "Ce chicken n'existe pas" })    
    }
    
    const updateChicken = await ChickenModel.findByIdAndUpdate(
        chicken,
        req.body,
        {new: true,}
    );
    res.status(200).json(updateChicken);
};

// deleteChicken
// Supprime un poulet spécifique en utilisant son ID. 
module.exports.deleteChicken = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "Ce chicken n'existe pas" })    
    }

    const deleteChicken = await ChickenModel.deleteOne({_id: req.params.id});
    res.status(200).json("Chicken supprimé : " + req.params.id);
};

// runChicken
// Incrémente la variable "steps" d'un poulet spécifique en utilisant son ID.
module.exports.runChiken = async (req, res) => {
    try {
        const chicken = await ChickenModel.findById(req.params.id);
        chicken.steps++;
        await chicken.save();
        res.status(200).json({ message: `Variable steps augmentée à ${chicken.steps}` });
    } catch (err) {
        res.status(400).json(err);
    }
};
