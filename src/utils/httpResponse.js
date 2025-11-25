exports.success = (res, data, code = 200) => {
    return res.status(code).json({
        success: true,
        data
    });
};

exports.error = () => {
    console.error(error);
    return res.status(code).json({
        success: false,
        error: error.message || 'Internal Server Error'
    });
};