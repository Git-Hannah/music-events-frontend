// For this to be visible in our client, in Next.js we need to add NEXT_PUBLIC_ in front of the API
export const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
