let express = require('express');
let router = express.Router();
let Controller = require("../../../../../controllers/Users/Api/SetupByCopy/Garments/FromPk.Controllers");

router.get('/:inUserPK', Controller.CreateFunc);


module.exports = router;