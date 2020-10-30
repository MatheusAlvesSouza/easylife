module.exports = (object, attributes) => {
    const response = {};

    for(let i = 0; i < attributes.length; i++)
    {
        response[attributes[i]] = object[attributes[i]];
    }
    
    return response;
}