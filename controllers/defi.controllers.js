var DefiService = require('../services/defi.service')

exports.getDefi = async function (req, res, next) {
    try {
        var defis = await DefiService.getDefi()
        return res.status(200).json({ status: 200, data: defis, message: "Succesfully Defis Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createDefi = async function (req, res, next) {
    try {
        await DefiService.createDefi(req.body);

        var defis = await DefiService.getDefi()
        return res.status(200).json({ status: 200, data: defis, message: "Succesfully Defis Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
