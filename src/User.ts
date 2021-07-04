import faker from 'faker';

class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      latitude: Number(faker.address.latitude()),
      longitude: Number(faker.address.longitude()),
    };
  }
}
