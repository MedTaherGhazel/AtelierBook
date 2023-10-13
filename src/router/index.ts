import express from 'express';
import authentication from './authentication';
import books from './books'
const router= express.Router();

export default(): express.Router =>{
    authentication(router);
    books(router);  
    return router ;
} ;