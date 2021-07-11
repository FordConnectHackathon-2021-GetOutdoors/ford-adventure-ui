import { getToken, getVehicleListURL } from "utils/endpoints";
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

const getVehicleList = async (url, token) =>
  fetch(url, {
    // @ts-ignore
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "api-version": "2020-06-01",
      "Application-Id": process.env.NEXT_PUBLIC_FORD_APPLICATION_ID,
      Authorization: `Bearer ${token}`,
    },
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
    const session: any = await postFormData(getToken, formData);
    const { access_token } = session;
    const vehicleList = await getVehicleList(getVehicleListURL, access_token);
    const { vehicles } = await vehicleList;
    const vehicle = vehicles[0];
    res.json({ session, vehicle });
  } catch (e) {
    res.send("there was an error");
  }
});

export default handler;
