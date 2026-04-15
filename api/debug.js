export default function handler(req, res) {
  // Show all env keys that contain "EMAIL" or start with "VERCEL"
  const allKeys = Object.keys(process.env);
  const emailKeys = allKeys.filter((k) => k.includes("EMAIL"));
  const vercelKeys = allKeys.filter((k) => k.startsWith("VERCEL_"));

  res.json({
    totalEnvVars: allKeys.length,
    emailKeys,
    vercelRegion: process.env.VERCEL_REGION || "none",
    vercelEnv: process.env.VERCEL_ENV || "none",
    hasEmailUsername: !!process.env.EMAIL_USERNAME,
    hasEmailPassword: !!process.env.EMAIL_PASSWORD,
    nodeVersion: process.version,
  });
}
