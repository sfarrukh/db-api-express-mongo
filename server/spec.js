import { app } from './server'
import chai from 'chai';
import request from 'supertest';
const expect = chai.expect;

describe('Inventory', () => {
    it('GET /api/inventory', (done) => {
        request(app)
            .get('/inventory')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                done();
            })
    });

    it('POST /api/inventory', (done) => {
        request(app)
            .post('/inventory')
            .send({
                productName: 'Computer',
                brand: 'Dell',
                description: '15 inch screen with touchscreen',
                avgStar: 4.5,
                inStock: true
            })
            .set('Accept', 'application/json')
            .expect('Conent-Type', /json/)
            .expect(201)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                done();
            })
    })


});
