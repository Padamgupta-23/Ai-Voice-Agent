import twilio from 'twilio';

if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
  throw new Error('TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set');
}

export const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
export const TWILIO_VERIFY_SID = process.env.TWILIO_VERIFY_SID;
