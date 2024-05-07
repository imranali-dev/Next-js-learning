import { Resend } from 'resend';

export const resendapi = new Resend(process.env.RESEND_API_KEY);