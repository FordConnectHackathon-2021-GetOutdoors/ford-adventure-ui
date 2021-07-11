import withSession from "../../utils/session";

export default withSession(async (req, res) => {
  const { code } = await req.body;

  try {
    const fordUser = { isLoggedIn: true, code };
    req.session.set("fordUser", fordUser);
    await req.session.save();
    res.json(fordUser);
  } catch (error) {
    const { response: fetchResponse } = error;
    res.status(fetchResponse?.status || 500).json(error.data);
  }
});
