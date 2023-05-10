import { TypeOf, object , string} from "zod";

export const userSchema = object({
  body: object({
    name : string({
      required_error : 'Name is required.'
    }), 
    email: string({
      required_error : 'Email is required.'
    }).email("Invalid Email format."),
    password: string({
      required_error : 'Password is required.'
    }).min(6, "Password is too short and most be of type 6 characters."),
    confirmPassword: string({
      required_error : 'confirm password is required.'
    })
  }).refine((data)=>data.password === data.confirmPassword, {
    message: "Password do not match.",
    path: ['confirmPassword']
  })
});

export type UserInput = Omit<TypeOf<typeof userSchema>,"body.confirmPassword">;