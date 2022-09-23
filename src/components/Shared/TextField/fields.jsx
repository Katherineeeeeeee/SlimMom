export const field = {
  name: {
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    required: true,
  },
  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Email*',
    required: true,
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Password*',
    required: true,
  },
  height: {
    name: 'height',
    type: 'number',
    placeholder: 'Height*',
    required: true,
  },
  age: {
    name: 'age',
    type: 'number',
    placeholder: 'Age*',
    required: true,
  },
  weight: {
    name: 'weight',
    type: 'number',
    placeholder: 'Current weight*',
    required: true,
    pattern: '[0-9]{2,3}',
    title: 'Please enter a valid number between 0 and 200.',
  },
  desiredWeight: {
    name: 'desiredWeight',
    type: 'number',
    placeholder: 'Desired weight*',
    required: true,
    pattern: '[0-9]{2,3}',
    title: 'Please enter a valid number between 0 and 200.',
  },
  bloodType: {
    name: 'blodtype',
    type: 'number',
    placeholder: 'Blood Type*',
  },
};
