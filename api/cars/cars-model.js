// #### Write Model Functions
const db = require('../../data/db-config');

// - Write the following db access functions inside `api/cars/cars-model.js` using Knex:


//   - `getAll` resolves to an array of car records (or an empty array)
const getAll = () => {
  // DO YOUR MAGIC
  return db('cars');
}

//   - `getById` resolves to a car record by the given id
const getById = (id) => {
  // DO YOUR MAGIC
  return db('cars').where('id', id).first();
}

//   - `create` resolves to the newly created car record
async function create(car) {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(car);
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create
}