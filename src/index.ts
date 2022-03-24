import { User } from './models/User';

const user = new User({ name: 'James', age: 28 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('change');
});

user.trigger('change');
