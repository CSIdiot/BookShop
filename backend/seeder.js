import mongoose from 'mongoose'
import colors from 'colors'
import dotenv from 'dotenv'
import users from './data/users.js'
import books from './data/books.js'
import User from './models/userModel.js'
import Book from './models/bookModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

//insert data to database
const importData = async () => {
  try {
    //empty database
    await Order.deleteMany()
    await User.deleteMany()
    await Book.deleteMany()

    //insert data
    const createdUsers = await User.insertMany(users)

    const adminUser = createdUsers[0]._id

    const sampleBooks = books.map((book) => {
      return { ...book, user: adminUser }
    })

    await Book.insertMany(sampleBooks)

    console.log('insert sucessfully'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    //delete data
    await Order.deleteMany()
    await User.deleteMany()
    await Book.deleteMany()

    console.log('sucessfully deleted'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}



if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}