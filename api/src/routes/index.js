const { Router } = require("express");
const countryRoute = require("./CountryRoutes");
const activityRoute = require("./ActivityRoutes");

const router = Router();

router.use("/country", countryRoute);
router.use("/activity", activityRoute);
module.exports = router;
