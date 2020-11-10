const db = require('../config/firebase-admin');
const tools = require('../tools/index');
const docRef = db.collection("urbanizations");

exports.add = async (req, res) => {
    const data = {
        name: req.body.name,
        address: req.body.address
    };
    try {
        const result = await docRef.doc().set(data);
        res.status(201).json(tools.response.code201(result));
    } catch (error) {
        res.status(500).json(tools.response.code500(error));
    }
};

exports.all = async (req, res) => {
    let data = [];
    try {
        const snapshot = await docRef.get();
        if (snapshot.empty) {
            return res.status(200).json(tools.response.code200(data, 'No matching documents'));
        }
        data = tools.firebase.normalizeData(snapshot);
        return res.status(200).json(tools.response.code200(data));
    } catch (error) {
        res.status(500).json(tools.response.code500(error));
    }
};