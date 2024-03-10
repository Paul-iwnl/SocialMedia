import { z } from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {message: "Too short"}),
    username: z.string().min(2, {message:"Too short"}),
    email:z.string().email(),
    password:z.string().min(8, {message:"Must be atleast 8 characters"}),
});

export const SigninValidation = z.object({
    email:z.string().email(),
    password:z.string().min(8, {message:"Must be atleast 8 characters"}),
});

export const PostValidation = z.object({
    caption: z.string().min(5).max(10000),
    file: z.custom<File[]>(),
    tags: z.string()
});