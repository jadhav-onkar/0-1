import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type userParams = z.infer<typeof userSchema>;
