import faker from 'faker';

export class Company {
  companyName: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: Number(faker.address.latitude()),
      longitude: Number(faker.address.longitude()),
    };
  }
}