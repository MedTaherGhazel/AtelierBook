import  express  from 'express';

import { addBook, getAllBooks } from '../controllers/books';

export default (router :express.Router)=>{
    router.get('/books/get-all-books', getAllBooks);
    router.post('/books/add-book',addBook);
}
