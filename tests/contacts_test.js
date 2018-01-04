'use strict';

let chai = require('chai');
let expect = require('chai').expect;
const debug = require('debug')('TEST');

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

let baseUrl = (process.env.NODE_ENV === 'production') ? 'http://120.79.70.187:3000' : 'http://localhost:3000';
let addContactsJsonSchema = {
    title: 'Add Contacts Response JSON Schema',
    type: 'object',
    required: ['result'],
    properties: {
        result: {
            type: 'object',
            required: ['contact_id', 'phone', 'name'],
            properties: {
                contact_id: {type: 'string'},
                phone: {type: 'string'},
                name: {type: 'string'},
            }
        }
    }
};
let GetContactsJsonSchema = {
    title: 'Add Contacts Response JSON Schema',
    type: 'object',
    required: ['result'],
    properties: {
        result: {
            type: 'array',
            properties:{
                type: 'object',
                required: ['contact_id', 'phone', 'name'],
                properties: {
                    contact_id: {type: 'string'},
                    phone: {type: 'string'},
                    name: {type: 'string'},
                }
            }
        }
    }
};
let DeleteContactsJsonSchema = {
    title: 'Delete Contacts Response JSON Schema',
    type: 'object',
    required: ['result'],
    properties: {
        result: {
            type: 'object',
            required: ['message'],
            properties: {
                message: "Delete Successfully"
            }
        }
    }
    
};
describe('Contacts API', () => {
    var contact_id;
    it('Add Contact', done => {
        let testBody = {
            phone: '18827054817',
            name: 'dian',
            email: 'email@email.com'
        };
        chai.request(baseUrl)
            .post('/contacts')
            .send(testBody)
            .end((err, res) => {
                if (err) {
                    debug(`error => ${err.stack}`);
                    done(err);
                } else {
                    contact_id = res.body.result.contact_id
                    expect(res.body).to.be.jsonSchema(addContactsJsonSchema);
                    debug(`response => ${JSON.stringify(res.body, null, 2)}`);
                    done();
                }
            });
    });
    it('Get Contact', done => {
        chai.request(baseUrl)
            .get('/contacts')
            .end((err, res) => {
                if (err) {
                    debug(`error => ${err.stack}`);
                    done(err);
                } else {
                    expect(res.body).to.be.jsonSchema(GetContactsJsonSchema);
                    debug(`response => ${JSON.stringify(res.body, null, 2)}`);
                    done();
                }
            });
    });
    it('Update Contact', done => {
        let testBody = {
            phone: '13827054817',
            name: 'Dian',
            email: 'new@gmail.com'
        };
        debug('/contacts/' + contact_id);
        chai.request(baseUrl)
            .put('/contacts/' + contact_id)
            .send(testBody)
            .end((err, res) => {
                if (err) {
                    debug(`error => ${err.stack}`);
                    done(err);
                } else {
                    expect(res.body).to.be.jsonSchema(addContactsJsonSchema);
                    debug(`response => ${JSON.stringify(res.body, null, 2)}`);
                    done();
                }
            });
    });
    it('Delete Contact', done => {
        chai.request(baseUrl)
            .delete('/contacts/' + contact_id)
            .end((err, res) => {
                if (err) {
                    debug(`error => ${err.stack}`);
                    done(err);
                } else {
                    expect(res.body).to.be.jsonSchema(DeleteContactsJsonSchema);
                    debug(`response => ${JSON.stringify(res.body, null, 2)}`);
                    done();
                }
            });
    });

});
