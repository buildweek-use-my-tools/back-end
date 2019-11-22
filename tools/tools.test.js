const request = require('supertest');

describe('Tool Route', () => {
    describe('Get /tools', () => {
        it('status code should be 200', () => {
            return request('localhost:4000/tools')
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
    });

    describe('GET /tools/:id', () => {
        it('Should return the proper tools for that user with id of :id', () => {
            return request('localhost:4000/tools')
            .get('/3')
            .then(res => {
                expect(res.body.tools[1]).toHaveProperty('ownerId', 3);
            })
        })
    });

    describe('PUT /tools/update/:id', () => {
        it('Updates the correct tool with a response of 200', () => {
            return request('localhost:4000/tools')
            .put('/update/2')
            .send({ name: "Saw", price: 40 })
            .then(res => {
                expect(res.status).toBe(200)
            })
        })
    });

    describe('POST /tools', () => {
        it('Throws an error if the ownerId is not provided', () => {
            return request('localhost:4000/tools')
            .post('/')
            .send({ name: "Saw", price: 40 })
            .then(res => {
                expect(res.body.error).toMatch(/ownerId/);
            })
        })
        it('Throws an error if the name is not provided', () => {
            return request('localhost:4000/tools')
            .post('/')
            .send({ price: 40, ownerId: 6 })
            .then(res => {
                expect(res.body.error).toMatch(/name/);
            })
        })
        it('Throws an error if the price is not provided', () => {
            return request('localhost:4000/tools')
            .post('/')
            .send({ name: "Saw", ownerId: 6 })
            .then(res => {
                expect(res.body.error).toMatch(/price/);
            })
        })
    });
});