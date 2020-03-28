const { RESTDataSource } = require('apollo-datasource-rest');

class RentalsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getRentals() {
    return this.get('api/getRentals');
  }
};

module.exports = RentalsAPI;