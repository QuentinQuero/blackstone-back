const Defi = require("../models/defiModel");

exports.getDefi = async function (query, page, limit) {

    try {
        return await Defi.find(query);
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Defi')
    }
}

exports.createDefi = async function () {
        let newDefi = new Defi();
        newDefi.title = 'titi';
        newDefi.description = 'Bla bla bla bla bla bla';
        return await newDefi.save();
}
