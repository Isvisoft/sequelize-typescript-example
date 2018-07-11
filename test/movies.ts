// import * as mocha from "mocha";
import * as chai from "chai";
import chaiHttp = require("chai-http");

import app from "../lib/app";


chai.use(chaiHttp);

const expect = chai.expect;

describe('Array', function () {
    describe('#indexOf()', function () {
        it('Debe devolver -1 cuando el valor no está en la matriz', function (done) {
            expect([1, 2, 3].indexOf(4)).to.be.a('Number');
            expect([1, 2, 3].indexOf(4)).to.be.equal(-1);
            done();
        });
    });
});

describe('movies', () => {
    it('should respond with HTTP 200 status', () => {
        return chai.request(app)
            .get('/movies')
            .then(async (res) => {
                let result = await JSON.stringify(res)
                console.log("---------------> " + result)
                expect(res.status).to.be.equal(200);
            });
    });
})
