const faker = require("faker");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clucks').del()
    .then(() => {
      const clucks = Array.from({length:100}).map(()=>{
        return {
          username: faker.name.findName(),
          image_url :faker.image.imageUrl(),
          content:faker.lorem.paragraph(),
          createdAt: faker.date.past(),
        }
      })
      return knex('clucks').insert(clucks);
    });
  };


