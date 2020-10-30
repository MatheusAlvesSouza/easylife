const okReponse = (res, json) => {
    return res.status(200).json(json);
}

const createdReponse = (res, json) => {
    return res.status(201).json(json);
}

const badRequestReponse = (res, code, message) => {
    return res.status(400).json({ code, message });
}

const notfoundReponse = (res, message) => {
    return badRequestReponse(res, "NOT_FOUND", message);
}

const badArgumentsReponse = (res, message) => {
    return badRequestReponse(res, "MISSING_ARGUMENTS", message);
}

const internalErrorReponse = (res) => {
    return res.status(500);
}

module.exports = { okReponse, createdReponse, notfoundReponse, badArgumentsReponse, internalErrorReponse };