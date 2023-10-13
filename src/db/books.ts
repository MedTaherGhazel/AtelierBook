import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
});

export const BookModel = mongoose.model('Book', BookSchema);

export const getBooks = () => BookModel.find();
export const getBookByName = (name: string) => BookModel.findOne({ name });
export const getBookByAuthor = (name: string) => BookModel.findOne({ name });
export const getBookById = (id: string) => BookModel.findById(id);
export const createBook = (values: Record<string, any>) => new BookModel(values).save().then((book) => book.toObject());
export const deleteBookById = (id: string) => BookModel.findOneAndDelete({ _id: id });
export const updateBookById = (id: string, values: Record<string, any>) => BookModel.findByIdAndUpdate(id, values);