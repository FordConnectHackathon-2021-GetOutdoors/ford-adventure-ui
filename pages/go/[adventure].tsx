import Fullscreen from "components/Fullscreen";
import { Title } from "components/Title";
import { Header } from "components/Header/Header";

export default function Adventure() {
  return (
    <Fullscreen bg="white">
      <Header />
      <Title faded>Adventure #1</Title>
    </Fullscreen>
  );
}
