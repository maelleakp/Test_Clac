const express = require('express');
const { 
    setChickens, 
    getChickens, 
    getChickenById, 
    editChiken, 
    deleteChicken,
    runChiken,
    linkChiken
} = require('../controllers/chicken.controller');
const router = express.Router();


router.get("/", getChickens);
router.get("/:id", getChickenById);
router.post("/", setChickens); 
router.put("/:id", editChiken);
router.delete("/:id", deleteChicken);
router.patch("/run/:id", runChiken);
router.get("/:id/farmyard", linkChiken);

module.exports = router;
