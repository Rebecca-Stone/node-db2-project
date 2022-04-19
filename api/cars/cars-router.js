// DO YOUR MAGIC

// ### Write a Cars API
const Cars = require("./cars-model");
const {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
} = require("./cars-middleware");

const router = require("express").Router();

// - Write CR (of CRUD) for the `cars` resource, using the middleware and model functions described above wherever appropriate inside `api/cars/cars-router.js` :

//   - `[GET] /api/cars` returns an array of cars sorted by id (or an empty array if there aren't any).
router.get("/", (req, res) => {
  Cars.getAll()
    .then((cars) => {
      res.json(cars);
    })
    .catch((err) => {
      console.log("err at get(/)", err);
    });
});
//   - `[GET] /api/cars/:id` returns a car by the given id.
router.get("/:id", checkCarId, (req, res) => {
  Cars.getById(req.params.id)
    .then((car) => {
      if (car) {
        res.status(201).json(car);
      }
    })
    .catch((err) => {
      console.log("err at get(/:id)", err);
    });
});

//   - `[POST] /api/cars` returns the created car.
router.post(
  "/",
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid,
  (req, res) => {
    Cars.create(req.body)
      .then((newCar) => {
        res.status(201).json(newCar);
      })
      .catch((err) => {
        console.log("err at post(/)", err);
      });
  }
);

// - Manually test your endpoints with a REST client like `Insomnia` or `Postman` to check they are working as expected.
// - Test your endpoints automatically by running `npm test`.

module.exports = router;
