module.exports = {
  'extends': [ "eslint:recommended", "plugin:react/recommended" ],
  'plugins': [
    'react',
  ],
  'rules': {
    'prefer-template': 2,
    'prefer-arrow-callback': 2,
    'indent': [2, 2, { SwitchCase: 1 }],
    'radix': [2, 'as-needed'],
    'default-case': 0,
  },
  'parser': 'babel-eslint',
};
