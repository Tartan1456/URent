const { RESTDataSource } = require('apollo-datasource-rest');

class RentalsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:4000/';
  }

  async getRentals(searchLocation) {
    return this.get(`api/getRentals?searchLocation=${searchLocation}`);
  }
};

module.exports = RentalsAPI;