import { getAccessTokenCookie } from "./cookies";
import { verifyAccessToken } from "./jwt";

export async function getServerSession() {
  const token = await getAccessTokenCookie();
  if (!token) return null;
  try {
    return await verifyAccessToken(token);
  } catch {
    return null;
  }
}
