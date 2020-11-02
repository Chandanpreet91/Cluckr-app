const knexfile = require('../knexfile');

const knexConnector = require('knex');

const Knex = require('knex');

const knex = knexConnector(knexfile.development);

module.exports = Knex ;