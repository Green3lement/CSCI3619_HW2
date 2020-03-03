//Require the dev-dependencies
let envPath = __dirname + "/../.env"
require('dotenv').config({path:envPath})
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);


let login_details = {
    'username': 'testuser',
    'password': 'cu'
};
let movies_details = {
    'moviename': 'Movie',
    'id': '10'
};
let movie_update = {
    'moviename': 'film',
    'id': '10'
};
//Our parent block
describe('Register, Login and check token', () => {
    beforeEach((done) => { //Before each test we empty the database
        db.userList = [];
        done();
    });
    /*
      * Test the /GET route
      */
    describe('/signup ', () => {
        it('it should Register, Login, and check token', (done) => {
            chai.request(server)
                .post('/signup')
                .send(login_details)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.success.should.be.eql(true);

                    // follow up with login
                    chai.request(server)
                        .post('/signin')
                        .send(login_details)
                        .end((err, res) => {
                            console.log('this was to run the login part');
                            res.should.have.status(200);
                            res.body.should.have.property('token');

                            let token = res.body.token;
                            console.log(token);
                            // follow up with requesting user protected page
                            chai.request(server)
                                .post('/postjwt')
                                // we set the auth header with our token
                                .set('Authorization', token)
                                .send({ echo: '' })
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.have.property('echo')
                                    ;
                                    done(); // Don't forget the done callback to indicate we're done!
                                })
                        });
                });
        });



    });
});



describe('Create, Find, Update, and Delete Movies', () => {
    beforeEach((done) => { //Before each test we empty the database
        db.movieList = [];
        done();
    });
    /*
      * Test the /GET route
      */
    describe('/movies ', () => {
        it('it should Create, Find, Update, and Delete Movies', (done) => {
            chai.request(server)
                .post('/movies')
                .send(movies_details)
                .end((err, res) => {
                    console.log('this was to run the create part');
                    res.should.have.status(200);
                    res.body.success.should.be.eql(true);

                    // follow up with finding created movie
                    chai.request(server)
                        .get('/movies')
                        .send('10')
                        .end((err, res) => {
                            console.log('this was to run the find part');
                            res.should.have.status(200);

                            chai.request(server)
                                .put('/movies')
                                .send(movie_update)
                                .end((err, res) => {
                                    console.log('this was to run the update part');
                                    res.should.have.status(200);
                                    res.body.success.should.be.eql(true);

                                    chai.request(server)
                                        .delete('/movies')
                                        .send('10')
                                        .end((err, res) => {
                                            console.log('this was to run the delete part');
                                            res.should.have.status(200);
                                            done(); // Don't forget the done callback to indicate we're done!
                                        });
                                });
                        });

                    });
                });
        });

//Require the dev-dependencies
let envPath = __dirname + "/../src/.env"
require('dotenv').config({path:envPath})
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp);


let login_details = {
    'username': 'testuser',
    'password': 'cu'
};
let movies_details = {
    'moviename': 'Movie',
    'id': '10'
};
let movie_update = {
    'moviename': 'film',
    'id': '10'
};
//Our parent block
describe('Register, Login and check token', () => {
    beforeEach((done) => { //Before each test we empty the database
        db.userList = [];
        done();
    });
    /*
      * Test the /GET route
      */
    describe('/signup ', () => {
        it('it should Register, Login, and check token', (done) => {
            chai.request(server)
                .post('/signup')
                .send(login_details)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.success.should.be.eql(true);

                    // follow up with login
                    chai.request(server)
                        .post('/signin')
                        .send(login_details)
                        .end((err, res) => {
                            console.log('this was to run the login part');
                            res.should.have.status(200);
                            res.body.should.have.property('token');

                            let token = res.body.token;
                            console.log(token);
                            // follow up with requesting user protected page
                            chai.request(server)
                                .post('/postjwt')
                                // we set the auth header with our token
                                .set('Authorization', token)
                                .send({ echo: '' })
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.have.property('echo')
                                    ;
                                    done(); // Don't forget the done callback to indicate we're done!
                                })
                        });
                });
        });



    });
});



describe('Create, Find, Update, and Delete Movies', () => {
    beforeEach((done) => { //Before each test we empty the database
        db.movieList = [];
        done();
    });
    /*
      * Test the /GET route
      */
    describe('/movies ', () => {
        it('it should Create, Find, Update, and Delete Movies', (done) => {
            chai.request(server)
                .post('/movies')
                .send(movies_details)
                .end((err, res) => {
                    console.log('this was to run the create part');
                    res.should.have.status(200);
                    res.body.success.should.be.eql(true);
                    console.log(res.body.headers);

                    // follow up with finding created movie
                    chai.request(server)
                        .get('/movies')
                        .send('10')
                        .end((err, res) => {
                            console.log('this was to run the find part');
                            res.should.have.status(200);
                            console.log(res.body.headers);

                            chai.request(server)
                                .put('/movies')
                                .send(movie_update)
                                .end((err, res) => {
                                    console.log('this was to run the update part');
                                    res.should.have.status(200);
                                    res.body.success.should.be.eql(true);
                                    console.log(res.body.headers);

                                    chai.request(server)
                                        .delete('/movies')
                                        .send('10')
                                        .end((err, res) => {
                                            console.log('this was to run the delete part');
                                            res.should.have.status(200);
                                            console.log(res.body.headers);
                                            done(); // Don't forget the done callback to indicate we're done!
                                        });
                                });
                        });

                });
        });
    });
});
});
