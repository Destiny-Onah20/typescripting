"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const zod_1 = require("zod");
exports.userSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: 'Name is required.'
        }),
        email: (0, zod_1.string)({
            required_error: 'Email is required.'
        }).email("Invalid Email format."),
        password: (0, zod_1.string)({
            required_error: 'Password is required.'
        }).min(6, "Password is too short and most be of type 6 characters."),
        confirmPassword: (0, zod_1.string)({
            required_error: 'confirm password is required.'
        })
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match.",
        path: ['confirmPassword']
    })
});
