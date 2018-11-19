// Check Api Key
var api = function(req, res, next) {
    var string = JSON.stringify(req.headers);
    var objectValue = JSON.parse(string);

    if (objectValue['apikey'] !== process.env.API_KEY) {
        return res.status(401).json({ status: 'Not authorized' });
    }
    next();
};

module.exports = api;