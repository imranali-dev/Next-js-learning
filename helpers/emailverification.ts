import VerificationEmail from "@/emails/verification";
import { resendapi } from "@/lib/resendemail";
import { ApiResponse } from "@/types/apiresponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string
):
// here we retturn something why we are using in this way dont know
// here basically this is demanding for the return
// must must return the message 
// this maybe interview question
Promise<ApiResponse> {
  try {
    await resendapi.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Testing App Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: 'Verification email sent successfully.' };
  } catch (emailError) {
    console.error('Error sending verification email:', emailError);
    return { success: false, message: 'Failed to send verification email.' };
  }
}