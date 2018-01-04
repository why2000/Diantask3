'use strict';

let ConfigSet = require('../configs/config_set.json');
let ErrorSet = require('../utils/error_util');
let Joi = require('joi');
let ContactsLogger = require('../logger').ContactsLogger;
let MongoDB = require('mongodb');
let MongoClient = MongoDB.MongoClient;
let IsEmpty = require('is-empty');

let db;
MongoClient.connect(ConfigSet.DATABASE_URL, (err, client) => {
    if (err) {
        ContactsLogger.error(`database error => ${err.stack}`);
        throw err;
    } else {
        db = client.db(ConfigSet.DATABASE_NAME);
        db.createCollection(ConfigSet.COLLECTION_NAME, function(err, res) {
            if (err) {
                ContactsLogger.error(`database error => ${err.stack}`);
                throw err;
            } else {
                //console.log("Successfully creat col");
                ;
            }
          });
    }
})

exports.addContact = async function(params) {
    var collection = db.collection('col1');
    var data = params;
    console.log(data);
    collection.insert(data, function(err, result){
        if(err){
            ContactsLogger.error(`database error => ${err.stack}`);
            throw err;
        } else {
            data = result;
        }
    });
    return data;
}

exports.getAllInf = async function() {
    var collection = db.collection('col1');
    var data = collection.find().toArray();
    return data;
}

exports.updateInf = async params => {
    var collection = db.collection('col1');
    var data = params;
    var where = {"_id": MongoDB.ObjectId(data.contact_id)};
    data._id = MongoDB.ObjectID(data.contact_id);
    delete data.contact_id;
    var newinf = {$set: data};
    collection.update(where,newinf,function(err, result){
        if(err)
        {
            ContactsLogger.error(`database error => ${err.stack}`);
            throw err;
        }
    });
    return data;
}

exports.deleteInf = async params => {
    var collection = db.collection('col1');
    var where = {"_id": MongoDB.ObjectId(params.contact_id)};
    collection.remove(where,function(err, result) {
        if(err)
        {
            ContactsLogger.error(`database error => ${err.stack}`);
            throw err;
        }
    });
    return {"message": "Delete Successfully"};
}