const express = require('express');
const { 
    setChickens, 
    getChickens, 
    getChickenById, 
    editChiken, 
    deleteChicken,
    runChiken
} = require('../controllers/chicken.controller');
const router = express.Router();


router.get("/", getChickens);
router.get("/:id", getChickenById);
router.post("/", setChickens); 
router.put("/:id", editChiken);
router.delete("/:id", deleteChicken);
router.patch("/run/:id", runChiken);

module.exports = router;
