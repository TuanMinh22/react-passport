const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const passport = require('passport');
const GOOGLE_CLIENT_ID = "310117316132-sg32vrlgf5c7rke92fbgcmmti4iippdb.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "5db5f380bf5887b80934";
const GITHUB_CLIENT_SECRET = "93ec3f25441783b3739e8a5ce4d1e448a1733e7e";

const FACEBOOK_APP_ID = "645720246442044";
const FACEBOOK_APP_SECRET = "6bec5508db0e2eb49ac863ab89d19595";

const INSTAGRAM_CLIENT_ID = "645720246442044";
const INSTAGRAM_CLIENT_SECRET = "6bec5508db0e2eb49ac863ab89d19595";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        done(null, profile)
    }
));

passport.use(new InstagramStrategy({
    clientID: INSTAGRAM_CLIENT_ID,
    clientSecret: INSTAGRAM_CLIENT_SECRET,
    callbackURL: "/auth/instagram/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
    }
));

passport.serializeUser((user, done) => {
    done(null, user)
});

passport.deserializeUser((user, done) => {
    done(null, user)
});