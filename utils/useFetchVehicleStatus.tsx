import { useQuery } from "react-query";

const endpoints = {
  getToken:
    "https://dah2vb2cprod.b2clogin.com/914d88b1-3523-4bf6-9be4-1b96b4f6f919/oauth2/v2.0/token?p=B2C_1A_signup_signin_common",
};

async function postFormData(url, data) {
  return fetch(url, {
    method: "POST", // 'GET', 'PUT', 'DELETE', etc.
    body: new URLSearchParams(data),
    headers: new Headers({
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    }),
  }).then((response) => response.json());
}

const formData = {
  grant_type: "authorization_code",
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  code: process.env.NEXT_PUBLIC_CLIENT_CODE,
  redirect_uri: "https%3A%2F%2Flocalhost%3A3000",
};

const getToken = async () => postFormData(endpoints.getToken, formData);

export const useFetchVehicleStatus = () => {
  const {
    data,
    error,
    refetch: fetchToken,
  } = useQuery("token", getToken, {
    enabled: false,
  });

  const handleFetchVehicleStatus = () => {
    fetchToken();
  };

  return { handleFetchVehicleStatus };
};
