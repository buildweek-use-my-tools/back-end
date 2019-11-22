const request = require('supertest');

describe('Auth Route', () => {
    describe('Get /api/auth/register', () => {
        // it('status code should be 201', () => {
        //     return request('localhost:4000/api/auth')
        //     .post('/register')
        //     .send({
        //         username: "tlaudahl1",
        //         password: "travis1",
        //         location: "Minnesota"
        //     })
        //     .then(res => {
        //         expect(res.status).toBe(201);
        //     });
        // });

        it('status code should be 500 when all 3 required fields are not sent', () => {
            return request('localhost:4000/api/auth')
            .post('/register')
            .send({
                username: "tlaudahl",
                password: "travis1"
            })
            .then(res => {
                expect(res.status).toBe(500);
            });
        });
        
        it('On proper login the response body should have a token property ', () => {
            return request('localhost:4000/api/auth')
            .post('/login')
            .send({ username: "travis111", password: "travis1"})
            .then(res => {
                expect(res.body).toHaveProperty('token')
            });
        });

        it('status code 401 if username or password are incorrect ', () => {
            return request('localhost:4000/api/auth')
            .post('/login')
            .send({ username: 'none', password: 'wrong'})
            .then(res => {
                expect(res.status).toBe(401);
            });
        });

        it('returns a error message if username or password is correct but only 1 is sent ', () => {
            return request('localhost:4000/api/auth')
            .post('/login')
            .send({ username: 'travis111' })
            .then(res => {
                expect(res.body).toHaveProperty('message');
            });
        });
    });
})