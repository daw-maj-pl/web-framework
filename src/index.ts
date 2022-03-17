import { User } from './models/User';

const user = new User({ name: 'John', age: 30 });

user.set({ name: 'Mark' });

console.log(user.get('name'));
console.log(user.get('age'));
