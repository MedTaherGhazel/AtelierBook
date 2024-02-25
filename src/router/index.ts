import express from 'express';
import authentication from './authentication';
import programs from './programs'
import users from './users'
import products from './products';

const router= express.Router();

export default(): express.Router =>{
    authentication(router);
    programs(router);  
    users(router);
    products(router)
    return router ;
} ;