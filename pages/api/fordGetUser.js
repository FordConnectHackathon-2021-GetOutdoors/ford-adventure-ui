import nc from "next-connect";
import { parseCookies } from "nookies";

const handler = nc().get((req, res) => {
  const { fordToken } = parseCookies({ req });
  if (fordToken) {
    res.json({
      isFordLoggedIn: true,
      fordToken,
    });
  } else {
    res.json({
      isFordLoggedIn: false,
    });
  }
});

export default handler;
