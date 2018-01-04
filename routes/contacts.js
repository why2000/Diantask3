'use strict';

let express = require('express');
let router = express.Router();
let ContactsLogger = require('../logger').ContactsLogger;
let ContactsController = require('../controllers/contacts_controller');
//增添联系人
router.post('/', async (req, res, next) => {
    var params = {
        phone: req.body.phone,
        name: req.body.name,
        email: req.body.email
    };
    //console.log(req.body);
    try {
        let result = await ContactsController.addContact(params);
        ContactsLogger.info(`add contact result => ${JSON.stringify(result, null, 2)}`);
        res.json({"result": result});
    } catch(err) {
        ContactsLogger.error(`add contact error => ${err.stack}`);
        next(err);
    }
});
//发送全部联系人
router.get('/', async (req, res, next) => {
    try {
        let result = await ContactsController.getAllInf();
        ContactsLogger.info(`get contacts result => ${JSON.stringify(result,null,2)}`);
        res.json({"result": result});
    } catch(err) {
        ContactsLogger.error(`get contacts error => ${err.stack}`);
        next(err);
    }
});

//更新联系人
router.put('/:contact_id', async (req, res, next) => {
    let params = {
        "contact_id": req.params.contact_id,
        "name": req.body.name,
        "phone": req.body.phone,
        "email":req.body.email
    };
    try {
        let result = await ContactsController.updateInf(params);
        ContactsLogger.info(`update contact result => ${JSON.stringify(result, null, 2)}`);
        res.json({"result": result});
    } catch(err) {
        ContactsLogger.error(`update contact error => ${err.stack}`);
        next(err);
    }
});
//删除联系人
router.delete('/:contact_id', async (req, res, next) => {
    let params={"contact_id": req.params.contact_id};
    try {
        let result = await ContactsController.deleteInf(params);
        ContactsLogger.info(`delete contact result => ${JSON.stringify(result, null, 2)}`);
        res.json({"result": result});
    } catch(err) {
        ContactsLogger.error(`delete contact error => ${err.stack}`);
        next(err);
    }
});
module.exports = router;