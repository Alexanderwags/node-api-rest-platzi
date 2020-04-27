const {moviesMock} = require('../util/mocks/movies');

class MoviesService{

    async getmovies(){
        const movies= await Promise.resolve(moviesMock);
        return movies || [];
    }
    async getmovie(){
        const movie= await Promise.resolve(moviesMock[0]);
        return movie || {};
    } 
    async createMovie(){
        const createMovieId= await Promise.resolve(moviesMock[0].id);
        return createMovieId;
    }
    async updateMovie(){
        const  updatedMovieId= await Promise.resolve(moviesMock[0].id);
        return updatedMovieId;
    } 
    async deleteMovie(){
        const  deleteMovieId= await Promise.resolve(moviesMock[0].id);
        return deleteMovieId;
    }
}
module.exports=MoviesService;