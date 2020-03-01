/**
 * Created by shawnmccarthy on 1/22/17.
 */
'use strict;';
//Include crypto to generate the movie id
var crypto = require('crypto');
module.exports = function () {
    return {
        userList: [],
        movieList: [],
        /*
         * Save the user inside the "db".
         */
        save: function (user) {
            user.id = crypto.randomBytes(20).toString('hex'); // fast enough for our purpose
            this.userList.push(user);
            return 1;
        },
        /*
         * Retrieve a movie with a given id or return all the movies if the id is undefined.
         */
        find: function (movie) {
            if (movie) {
                return this.movieList.find(function (element) {
                    return element.moviename === movie;
                });
            }
            else {
                return this.movieList;
            }
        },
        /*
         *  Create a new movie
        */
        saveM: function(movie) {
            var lastElement = this.movieList.length - 1;

            if(lastElement !== -1){
                this.movieList[lastElement].moviename = movie.moviename;
                this.movieList[lastElement].id = movie.id;
            }
        },


        findOne: function (name) {
            if (name) {
                return this.userList.find(function (element) {
                    return element.username === name;
                });
            }
            else {
                return this.userList;
            }
        },
        /*
         * Delete a movie with the given id.
         */
        remove: function (movie) {
            var found = 0;
            this.movieList = this.movieList.filter(function (element) {
                if (element.moviename === movie) {
                    found = 1;
                }
                else {
                    return element.moviename !== movie;
                }
            });
            return found;
        },
        /*
         * Update a movie with the given id
         */
        update: function (year, movie) {
            var movieIndex = this.movieList.findIndex(function (element) {
                return element.year === year;
            });
            if (userIndex !== -1) {
                this.movieList[movieIndex].moviename = movie.moviename;
                this.movieList[movieIndex].year = movie.year;
                return 1;
            }
            else {
                return 0;
            }
        }
    };
};