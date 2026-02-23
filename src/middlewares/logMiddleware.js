module.exports = (req, res, next) => {
    console.log(`Log: ${req.method} en la ruta ${req.url}`);
    next();
};