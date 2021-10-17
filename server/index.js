require("dotenv").config();
import express from "express";
import cors from "cors";
import helmet from "helmet";

import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/orders";
import Reviews from "./API/reviews";
import User from "./API/User";
import Menu from "./API/menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";


import ConnectDB from "./database/connection";


const zomato = express();

zomato.use(express.json());
zomato.use(express.urlencoded({extended : false}));
zomato.use(helmet());
zomato.use(cors());

console.log(process.env);

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

googleAuthConfig(passport);
routeConfig(passport);

zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);

zomato.get ("/", (req,res) => res.json ({message: "Setup success"}));


console.log(process.env.GOOGLE_CLIENT_ID)
zomato.listen(4000, () => ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);     