// #### Write Middleware
const Cars = require('./cars-model');
const vinValidator = require('vin-validator');
// - Write the following middlewares inside `api/cars/cars-middleware.js`:


//   - `checkCarId` returns a status 404 with a `{  }` if the id in `req.params` does not exist in the database.
async function checkCarId(req, res, next){
  // DO YOUR MAGIC
  // const { id } = req.params.id;
  try {
    const car = await Cars.getById(req.params.id);
    if (!car) {
      res.status(404).json({ message: `car with id ${req.params.id} is not found` });
    } else {
      req.car = car;
      next();
    }
  } catch (err) {
    console.log("err at checkCarId", err);
  }
}

//   - `checkCarPayload` returns a status 400 with a `{  }` if any required field is missing.
function checkCarPayload(req, res, next){
  // DO YOUR MAGIC
  let { vin, make, model, mileage } = req.body;
  if (vin === undefined) {
    // let missingField = "vin";
    res.status(400).json({ message: `vin is missing` });
  } else if (make === undefined) {
    // let missingField = "make";
    res.status(400).json({ message: `make is missing` });
  } else if (model === undefined) {
    // let missingField = "model";
    res.status(400).json({ message: `model is missing` });
  } else if (mileage === undefined) { 
    res.status(400).json({ message: `mileage is missing` });
    // let missingField = "mileage";
  } else {
    next();
  }
    // res.status(400).json({ message: `${missingField} is missing` })
}

//   - `checkVinNumberValid` returns a status 400 with a `{  }` if the vin number is [invalid](https://www.npmjs.com/package/vin-validator).
async function checkVinNumberValid(req, res, next){
  // DO YOUR MAGIC
  const { vin } = req.body;
  const isValidVin = await vinValidator.validate(vin);
  if (isValidVin) {
    next();
  } else {
    res.status(400).json({ message: `vin ${vin} is invalid` })
  }
}

//   - `checkVinNumberUnique` returns a status 400 with a `{ message: "vin <vin number> already exists" }` if the vin number already exists in the database.
async function checkVinNumberUnique(req, res, next){
  // DO YOUR MAGIC
  try {
    const existingVin = await Cars.getByVin(req.body.vin);
    if (!existingVin) {
      next();
    } else {
      res.status(400).json({ message: `vin ${req.body.vin} already exists` });
    }
  } catch (err) {
    console.log("err at checkVinNumberUnique", err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
};