exports.code200 = (data, message) => {
    return result = {
        error: false,
        result: data || false,
        message: message || 'Successful request'
    }
};

exports.code201 = (data, message) => {
    return result = {
        error: false,
        result: data || false,
        message: message || 'Successful creation'
    }
};

exports.code401 = (data, message) => {
    return result = {
        error: true,
        result: false,
        message: message || 'Not authorized'
    }
};
exports.code500 = (detail, message) => {
    return result = {
        error: true,
        result: false,
        message: message || 'Internal error in our servers',
        detail: detail || ''
    }
};