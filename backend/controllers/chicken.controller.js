const { findById, findByIdAndUpdate } = require('../models/chicken.model');
const ChickenModel = require('../models/chicken.model');
const FarmyardModel = require('../models/farmyard.model');

// getChickens
// Retrieve all chickens from the database and send them as a JSON array in response.
module.exports.getChickens = async (req, res) => {
    const chickens = await ChickenModel.find();
    res.status(200).json(chickens);
};


// getChicken
// Retrieve a specific chicken using its ID and send it as a JSON object in response.
module.exports.getChickenById = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "This chicken does not exist" });    
    }

    res.status(200).json(chicken);
};


// setChicken
// Create a new chicken using the information provided in the request body and save it to the database.
module.exports.setChickens = async (req, res) => {
    if (!req.body.name || !req.body.weight) {
        res.status(400).json({ message : "Please provide a name and weight" });
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
// Modify a specific chicken using its ID and the information provided in the request body.
module.exports.editChiken = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "This chicken does not exist" });    
    }
    
    const updateChicken = await ChickenModel.findByIdAndUpdate(
        chicken,
        req.body,
        { new: true }
    );
    res.status(200).json(updateChicken);
};

// deleteChicken
// Delete a specific chicken using its ID.
module.exports.deleteChicken = async (req, res) => {
    const chicken = await ChickenModel.findById(req.params.id);

    if (!chicken) {
        res.status(400).json({ message: "This chicken does not exist" });    
    }

    await ChickenModel.deleteOne({ _id: req.params.id });
    res.status(200).json("Chicken deleted: " + req.params.id);
};


// runChicken
// Increment the "steps" variable of a specific chicken using its ID.
module.exports.runChiken = async (req, res) => {
    try {
        const chicken = await ChickenModel.findById(req.params.id);
        chicken.steps++;
        await chicken.save();
        res.status(200).json({ message: `Steps variable incremented to ${chicken.steps}` });
    } catch (err) {
        res.status(400).json(err);
    }
};

// linkChicken
// Get farmyard for a specific chicken
module.exports.linkChiken = async (req, res) => {
    try {
        const chicken = await ChickenModel.findById(req.params.id);
        if (!chicken) {
          res.status(400).json({ message: 'Chicken not found' });
        }
        const farmyard = await FarmyardModel.findById(chicken.farmyardId);
        if (!farmyard) {
          res.status(400).json({ message: 'Farmyard not found' });
        }
        res.status(200).json(farmyard);
    } catch (err) {
        res.status(400).json(err);
    }
};