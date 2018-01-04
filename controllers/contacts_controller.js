'use strict';

let ContactsDB = require('../models/contacts_db');
let Joi = require('joi');
let IsEmpty = require('is-empty');
let ErrorUtil = require('../utils/error_util');

exports.addContact = async params => {
    if (!await _validateAddContactParams(params)) {
        throw ErrorUtil.createError(ErrorUtil.ErrorSet.REQUEST_PARAMETER_ERROR);
    }
    let data = await ContactsDB.addContact(params);
    data.contact_id = data._id;
    delete data._id;
    return data;
}

async function _validateAddContactParams(params) {
    var emailPattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/,
        namePattern = /^.{1,20}$/,
        phonePattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        //console.log(`email => ${params.email}`);
        //console.log(`phone => ${params.phone}`);
        //console.log(`name => ${params.name}`);
    if(namePattern.test(params.name)&&phonePattern.test(params.phone)) {
        //console.log("name phone gotcha");
        if(!params.email){
            //console.log("email void");
            return true;
        } else {
            if(emailPattern.test(params.email)){
                return true;
            }
        }
    }
    return false;
}

async function _validateUpdateContactParams(params) {
    var emailPattern = /^([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[-_.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/,
        namePattern = /^.{1,20}$/,
        phonePattern = /(^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$)|(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/;
        //console.log(`email => ${params.email}`);
        //console.log(`phone => ${params.phone}`);
        //console.log(`name => ${params.name}`);
    if(namePattern.test(params.name)&&phonePattern.test(params.phone)) {
        //console.log("name phone gotcha");
        if(!params.email){
            //console.log("email void");
            return true;
        } else {
            if(emailPattern.test(params.email)){
                return true;
            }
        }
    }
    return false;
}

exports.getAllInf = async params => {
    let data = await ContactsDB.getAllInf();
    for (var i=0;i < data.length;i++){
        data[i].contact_id = data[i]._id;
        delete data[i]._id;
    }
    return data;
}

exports.getOneInf = async params => {
    let data = await ContactsDB.getOneInf(params);
    data.contact_id = data._id;
    delete data._id;
    return data;
}

exports.updateInf = async params => {
    if (!await _validateUpdateContactParams(params)) {
        throw ErrorUtil.createError(ErrorUtil.ErrorSet.REQUEST_PARAMETER_ERROR);
    }
    let data = await ContactsDB.updateInf(params);
    return data;
}

exports.deleteInf = async params => {
    let data = await ContactsDB.deleteInf(params);
    return data;
}
