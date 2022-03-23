import { User } from './models/User';

const user = new User({ name: 'James', age: 28 });

user.on('change', () => {
  console.log('change');
});

user.trigger('change');
