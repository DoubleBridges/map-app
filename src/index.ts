import { User } from './User';

const {
  name,
  location: { lat, lon },
} = new User();
console.log(name, lat, lon);
