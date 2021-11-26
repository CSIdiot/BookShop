import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'lei',
    email: 'lei@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Menglin',
    email: 'menglin@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users