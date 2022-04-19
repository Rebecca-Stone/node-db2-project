// #### Cars Schema

// The critical information for each car is the vin, make, model, and mileage. They also track transmission type (manual, automatic...) and status of the title (clean, salvage...), but this information is not always immediately known. Write the "up" and "down" functions inside the `data/migrations/01-make_cars_table.js` migration file to satisfy the following schema:

// | field        | data type        | metadata                                            |
// | ------------ | ---------------- | --------------------------------------------------- |
// | id           | unsigned integer | primary key, auto-increments, generated by database |
// | vin          | string           | required, unique                                    |
// | make         | string           | required                                            |
// | model        | string           | required                                            |
// | mileage      | numeric          | required                                            |
// | title        | string           | optional                                            |
// | transmission | string           | optional                                            |

exports.up = function (knex) {
  // DO YOUR MAGIC
};

exports.down = function (knex) {
  // DO YOUR MAGIC
};
