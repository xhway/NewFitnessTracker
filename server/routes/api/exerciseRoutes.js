const router = require("express").Router();

const {
    createResistance,
    getResistanceById,
    deleteResistance,
  } = require("../../controllers/resistance-controller");
  
  const {
    createCardio,
    getCardioById,
    deleteCardio,
  } = require("../../controllers/cardio-controller");
  

  const { authMiddleware } = require('../../utils/auth');
  
 
  router.use(authMiddleware);
  
 
  router.route("/cardio").post(createCardio);
  

  router.route("/cardio/:id").get(getCardioById).delete(deleteCardio);
  

  router.route("/resistance").post(createResistance);
  
  
  router.route("/resistance/:id").get(getResistanceById).delete(deleteResistance);
  
  module.exports = router;