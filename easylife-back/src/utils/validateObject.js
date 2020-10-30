module.exports = (object, attributes) => {
    for (let i = 0; i < attributes.length; i++) {
        if (object[attributes[i]] == null)
            return { missingAttribute: true, attribute: attributes[i] };
    }

    return { missingAttribute: false };
}