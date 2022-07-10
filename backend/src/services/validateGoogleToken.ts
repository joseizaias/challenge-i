import { OAuth2Client, TokenPayload } from "google-auth-library";

const CLIENT_ID =
  "986928911189-58h6e220b7ofbdqjk7iiq07hpsj34421.apps.googleusercontent.com";

export async function validateGoogleToken(
  token: string
): Promise<TokenPayload> {
  const client = new OAuth2Client(CLIENT_ID);
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: CLIENT_ID,
  });

  const payload = ticket.getPayload();

  return payload;
}
