import { sendVerificationEmail } from '@/helpers/emailverification';
import { dbconnection } from '@/lib/debconnection';
import UserModel from '@/model/users.model';
import bcrypt from 'bcryptjs';
export async function POST(request: Request) {
  await dbconnection();
  try {
    const { username, email, password } = await request.json();
    const usernameexist = await UserModel.findOne({
      username,
      isVerified: true
    });
    if (usernameexist) {
      return Response.json({
        success: false,
        message: ` Username ${usernameexist.username} is already taken`,
      }, {
        status: 400
      })
    };
    // here need to that is the best practise
    const existingUserByEmail = await UserModel.findOne({ email })
    // here i have the confution that why i am using tostring() also learn about how many digits
    // this code will be send to email
    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    if (existingUserByEmail) {
      // here we the login now in this code we are say that if user is exist and verfied then  message: 'User already exists with this email',
      if(existingUserByEmail.isVerified){
        return Response.json(
          {
            success: false,
            message: 'User already exists with this email',
          },
          { status: 500 }
        );
        // if not verified the user then but email is exist then oversite thse things this will be confusing for me in future 
        //  here i am thinking in most of if user not verify email the resend it 
        // overwriting the password mujhe sahi nahi lg rha change krna ho ga 
      }else{
        const hashedPassword = await bcrypt.hash(password, 10);
        // now we are sayting that overwrite the existing hashed password  
        existingUserByEmail.password = hashedPassword;
        existingUserByEmail.verifyCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 36000);
       await existingUserByEmail.save();

      }
      return Response.json({
        success: false,
        message: ` email ${existingUserByEmail.email} is already taken`,
      })
    }

    else {
      // if is the newswest user then we create the new user
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryDate = new Date();
      expiryDate.setHours(expiryDate.getHours() + 1)
      const newUser = new UserModel({
        username,
        email,
        password: hashedPassword,
        verifyCode,
        verifyCodeExpiry: expiryDate,
        isVerified: false,
        isAcceptingMessages: true,
        messages: [],
      });
      await newUser.save();
    };



    //  now this time to send the VerificationEmail using resend mail
    // here first i was passing the email in object it was giving me the error then i send send it without object error solve
    const emailResponse = await sendVerificationEmail(
      email,
      username,
      verifyCode,
    )
    if (!emailResponse.success) {
      if (!emailResponse.success) {
        return Response.json(
          {
            success: false,
            message: emailResponse.message,
          },
          { status: 500 }
        );
      }
    };

    return Response.json(
      {
        success: true,
        message: 'User registered successfully. Please verify your account.',
      },
      { status: 201 }
    );


  } catch (error) {
    console.error('Error registering user:', error);
    return Response.json({
      success: false,
      message: 'Error registering user',
    },
      {
        status: 500
      })
  }
}

// const { username, email, password } = await request.json();
// const hasedPassword = await bcrypt.hash(password,10)