import googleOAuth from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(__dirname, "../.env"),
});
import { UserModel } from "../database/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:"734811775633-up283r5foj3fm80paa40vrr4gd1mugn1.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        
        const newUser = {
          fullname: profile.displayName,
          email: profile.emails[0].value,
          profilePic: profile.photos[0].value,
        };
        try {
          
          const user = await UserModel.findOne({ email: newUser.email });

          if (user) {
            
            const token = user.generateJwtToken();

            done(null, { user, token });
          } else {
            const user = await UserModel.create(newUser);

            const token = user.generateJwtToken();
            
            done(null, { user, token });
          }
        } catch (error) {
          done(error, null);
        }
      }
    )
  );

  passport.serializeUser((userData, done) => done(null, { ...userData }));
  passport.deserializeUser((id, done) => done(null, id));
};
