import { z } from "zod";

export const verifySechma = z.object({
    code:z.string().length(6, {message:'Verification code must be 6 digits'}),
})


// if want to check use .lengeth