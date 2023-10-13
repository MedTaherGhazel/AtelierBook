import express from 'express';
import { getBookByName,getBookByAuthor,createBook,getBookById,updateBookById,deleteBookById,getBooks } from '../db/books';

export const getAllBooks = async (req:express.Request, res:express.Response) =>{
    try{
        const books = await getBooks();

        return res.status(200).json(books);
    } catch (error) {
        console.log(error)
        return res.sendStatus(400);
    }
}

export const addBook =async(req:express.Request, res:express.Response) =>{
    try{
        const { name,author } =req.body;
        if(!name || !author){
            console.log('required');
            return res.sendStatus(400);
        }

        const existingBook=await getBookByName(name);
        
        if (existingBook){
            console.log('book existe ');
            return res.sendStatus(400);
        }
        const book = createBook({name,author});
        return res.status(200).json(book).end();

    }catch (error){
        console.log('ahahahah',error);
        return res.sendStatus(400);
    }
}