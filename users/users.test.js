const request = require('supertest');


describe('User Route', () => {
    describe('Get /user', () => {
        it('status code should be 200', () => {
            return request('localhost:4000/users')
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
        
        it('returns all the users in the ', () => {
            return request('localhost:4000/users')
            .get('/')
            .then(res => {
                expect(res.body.length).toBe(7);
            });
        });

        it('returns the user with the specified ID ', () => {
            return request('localhost:4000/users')
            .get('/6')
            .then(res => {
                expect(res.body.user.id).toBe(6);
            });
        });

        it('returns the user with the specified ID ', () => {
            const location = 'Shakopee';
            return request('localhost:4000/users')
            .put('/6')
            .send({ location: location })
            .then(res => {
                expect(res.body.location).toBe(location);
            });
        });
    });
})