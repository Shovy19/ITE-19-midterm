// schemas/user.js
export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      // Add more fields as needed
    ],
  };
  