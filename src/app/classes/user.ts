export class User {

  constructor(public id?: string,
              public name?: string,
              public surname?: string,
              public section?: string,
              public position?: string,
              public phoneNumber?: string,
              public email?: string,
              public dateOfBirth?,
              public address?: Address) {
    if (!address) {
      this.address = new Address();
    }
  }
}

export class Address {
  constructor(public streetName?: string,
              public buildingNumber?: number,
              public city?: string) {}
}
