import { User } from './models/User';

const user = new User({ id: 1, name: 'Olivia', age: 25 });

user.on('save', () => {
  console.log(user);
});

user.save();
