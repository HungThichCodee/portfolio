export default function handler(req, res) {
  res.json({
    hasUsername: !!process.env.EMAIL_USERNAME,
    hasPassword: !!process.env.EMAIL_PASSWORD,
    usernameLength: (process.env.EMAIL_USERNAME || "").length,
    passwordLength: (process.env.EMAIL_PASSWORD || "").length,
  });
}
