const paymentService = require('../services/payment');
const responses = require('../utils/expressResponse');

const getByUserId = async (req, res) => {
    const payments = await paymentService.findAllByUserId(req.query.id);

    return responses.okReponse(res, payments);
}

module.exports = { getByUserId };