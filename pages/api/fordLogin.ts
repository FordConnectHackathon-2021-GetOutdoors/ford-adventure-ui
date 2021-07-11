import { withSession } from "next-session";

const endpoints = {
  getToken:
    "https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common",
};

const postFormData = async (url, data) => {
  return fetch(url, {
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    body: new URLSearchParams(data),
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
  })
    .then((response) => response && response.json())
    .catch((err: any) => console.error(err));
};

const makeFormData = (code: string) => ({
  grant_type: "authorization_code",
  client_id: process.env.NEXT_PUBLIC_FORD_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_FORD_CLIENT_SECRET,
  code,
  redirect_uri: "https%3A%2F%2Flocalhost%3A3000",
});

export default withSession(async (req, res) => {
  const { code } = await req.body;
  const formData = makeFormData(code);
  console.log(
    "🚀 ~ file: fordLogin.ts ~ line 31 ~ withSession ~ formData",
    formData
  );
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  try {
    const fordAuthResponse = await postFormData(endpoints.getToken, formData);
    const fordUser = { isLoggedIn: true, code, ...fordAuthResponse };
    // document.cookie = `fordToken=${JSON.stringify(fordUser)};`;
    // req.session.set("fordUser", fordUser);
    // console.log(
    //   "🚀 ~ file: fordLogin.ts ~ line 34 ~ withSession ~ fordUser",
    //   fordUser
    // );
    // await req.session.save();
    res.json(fordUser);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
