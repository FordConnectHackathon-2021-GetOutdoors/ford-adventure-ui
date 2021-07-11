import { getToken } from "utils/endpoints";
import nextConnect from "next-connect";

const postFormData = async (url, data) =>
  fetch(url, {
    method: "POST",
    body: new URLSearchParams(data),
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
  })
    .then((response) => response && response.json())
    .catch((err) => console.error(err));

const makeFormData = (code) => ({
  grant_type: "authorization_code",
  client_id: process.env.NEXT_PUBLIC_FORD_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_FORD_CLIENT_SECRET,
  code,
  redirect_uri: "https%3A%2F%2Flocalhost%3A3000",
});

const handler: any = nextConnect();
handler.post(async (req, res) => {
  const { code } = await req.body;
  const formData = makeFormData(code);
  try {
    const fordAuthResponse = await postFormData(getToken, formData);
    res.json(fordAuthResponse);
  } catch (e) {
    res.send("there was an error");
  }
});

export default handler;
