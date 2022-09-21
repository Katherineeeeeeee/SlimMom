export const field = {
  name: {
    // label: 'Name',
    name: 'name',
    type: 'text',
    placeholder: 'Name',
    pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    required: true,
  },

  email: {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    required: true,
    pattern: '/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/',
    // pattern:"[^@\s]+@[^@\s]+\.[^@\s]+",
    title: '',
  },
  password: {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    required: true,
    pattern:
      '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$',
    title: '',
  },
  height: {
    name: 'height',
    type: 'text',
    placeholder: 'Height',
    required: true,
    //pattern and title
  },
  age: {
    name: 'age',
    type: 'text',
    placeholder: 'Age',
    required: true,
    pattern: '[0-1]{1}[0-9]{0,2}',
    title: 'Please enter a valid number between 0 and 200.',
  },
  currentWeight: {
    name: 'currentWeight',
    type: 'text',
    placeholder: 'Current weight',
    required: true,
  },
  desiredWeight: {
    name: 'desiredWeight',
    type: 'text',
    placeholder: 'Desired weight',
    required: true,
  },
  bloodType: {
    name: 'blodtype',
    type: '',
    placeholder: 'Blood Type',
    pattern: '([AaBbOo]|[Aa][Bb])[+-]',
    title: '',
  },
};
