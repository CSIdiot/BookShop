import mongoose from 'mongoose'

const bookSchema = mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
      
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
      },
      price: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
  
  const Book = mongoose.model('Book', bookSchema)
  
  export default Book