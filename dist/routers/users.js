"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../controllers/user");
const validate_1 = __importDefault(require("../middlewares/validate"));
const user_schema_1 = require("../schemas/user.schema");
const routes = (app) => {
    app.get("/welcome", (req, res) => {
        res.send("Welcome Onboard.");
    });
    app.post("/api/signup", (0, validate_1.default)(user_schema_1.userSchema), user_1.signUp);
};
exports.default = routes;
