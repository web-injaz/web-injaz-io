module.exports = (roles) => {
    const isAllowed = role => roles.indexOf(role) > -1;

    // Return middleware
    return (req, res, next) => {
        if(req.user && isAllowed(req.user.role)) {
            next(); // role is allowed, continue to the next middleware
        } else {
            res.status(403).json({message: 'Forbidden'});
        }
    }
}