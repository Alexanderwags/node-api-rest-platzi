const express=require('express');
const { moviesMock } = require('../util/mocks/movies.js');


function moviesAPi(app){    

    const router = express.Router();
    app.use('/api/movies',router);
    router.get("/",async function(req,res,next){
        try{
            const movies=await Promise.resolve(moviesMock);
            res.status(200).json({
                data:movies,
                message:'movies listed'
            });
        }
        catch(err){
            next(err);
        }
    });
    router.get("/:movieId",async function(req,res,next){
        try{
            const movies=await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data:movies,
                message:'movies retriev'
            });
        }
        catch(err){
            next(err);
        }
    });
    router.post("/",async function(req,res,next){
        try{
            const createdMoviedId=await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
              data: createdMoviedId,
              message: 'movies created',
            });
        }
        catch(err){
            next(err);
        }
    });
    router.put("/:movieId",async function(req,res,next){
        try{
            const updateMovieId=await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
              data: updateMovieId,
              message: 'movies update',
            });
        }
        catch(err){
            next(err);
        }
    });
     router.delete("/:movieId",async function(req,res,next){
        try{
            const deleteMovieId=await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
              data: deleteMovieId,
              message: 'movies delete',
            });
        }
        catch(err){
            next(err);
        }
    });
}
module.exports = moviesAPi;

/**
 * hilsadjfhjdsfjb
 */