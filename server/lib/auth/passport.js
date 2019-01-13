const   JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../models/user');

const options = {
    secretOrKey: require('../config').secret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = (passport) => {
    passport.use(new JwtStrategy(options, function(jwt_payload, done) {        
        User.find({ role: jwt_payload.role })
        .then(users => {
            const user = users.filter(item => item.id === jwt_payload.id);            
            if(user.length > 0) return done(null, jwt_payload);
            return done(null, false);
        })
    }));
}