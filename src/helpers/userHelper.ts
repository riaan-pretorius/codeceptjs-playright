import { faker } from "@faker-js/faker";
import User from "../types/User";

export const generateUsers = (numberOfUsers: number): User[] => {
  const users: User[] = [];
  for (let index = 0; index < numberOfUsers; index++) {
    users.push({
      id: faker.number.int({ max: 100 }),
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      address: {
        id: faker.number.int({ max: 100 }),
        line1: faker.location.street(),
        line2: faker.location.secondaryAddress(),
        city: faker.location.city(),
        province: faker.location.state(),
        country: faker.location.country(),
      },
    });
  }

  return users;
};
