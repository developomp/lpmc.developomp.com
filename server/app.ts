import dotenv from "dotenv"
import helmet from "helmet"
import express from "express"
import session from "express-session"
import cookieParser from "cookie-parser"
import methodOverride from "method-override"
import bodyParser from "body-parser"
import compress from "compression"
import passport from "passport"

//import discordStrategy from "./strategies/discordstrategy"

dotenv.config()
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session
app.use(session({
  name: "discord.oauth2",
  secret: process.env.SESSION_SECRET || "",
  cookie: {
      // secure: true,  // enabling this somehow breaks the whole system
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
  },
  saveUninitialized: false,
  resave: false,
}))

app.set("port", process.env.EXPRESS_PORT || 3000)

// Security
app.use(helmet())
app.disable("x-powered-by")
app.use(compress())
app.set("trust proxy", 1)
app.use(cookieParser())
app.use(methodOverride())

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Controllers / Routes
import home from "./controllers/home.controller"
app.get("/", home)

// Run the app
app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")} (mode: ${app.get("env")})`)
})

export default app
