const express=require('express');
const MoviesService= require('../services/movies');

function moviesAPi(app){    
    

    const router = express.Router();
    app.use('/api/movies',router);
    
    const movieServices = new MoviesService();

    router.get("/",async function(req,res,next){
        const {tags}= req.query;
        try{
            const movies = await movieServices.getmovies({tags});
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
        const {movieId}=req.params;
        try{
            const movies = await movieServices.getmovies({ movieId });
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
        const { body: movie } = req;

        try{
            const createdMoviedId=await movieServices.getmovie({movie});
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
          const { movieId } = req.params;
          const { body: movie } = req;
        try{
            const updateMovieId=await movieServices.updateMovie({movieId,movie});
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
        const { movieId } = req.params;
        try{
            const deleteMovieId=await movieServices.deleteMovie({movieId});
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