import React, { useEffect, useState } from "react";
import { PhotoUpload } from "components/PhotoUpload/PhotoUpload";
import { useMobileTabsContent } from "components/DynamicHeightTabs/useMobileTabsContent";
import { DynamicHeightTabs } from "components/DynamicHeightTabs/DynamicHeightTabs";
import { setCookie } from "nookies";
import fetcher from "utils/fetcher";
import useFordUser from "utils/useFordUser";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { Loading } from "components/Loading";

export const dashboardTabs = [
  { id: "photos", displayName: "Photos" },
  { id: "leaderboard", displayName: "Leaderboard" },
  { id: "badges", displayName: "Badges" },
];

const isTokenRequest = (context: any) =>
  context.query.code &&
  context.req.headers.referer === "https://fordconnect.cv.ford.com/";

export const getServerSideProps = async (context: any) => ({
  props: isTokenRequest(context)
    ? { server: true, code: context.query.code }
    : { server: true },
});

interface DashboardProps {
  code: string | null;
  [key: string]: any;
}

export default function Dashboard({ code = null }: DashboardProps) {
  const { isFordLoggedIn } = useFordUser();
  const router = useRouter();
  const [isReady, setReady] = useState(code ? false : true);
  useEffect(() => {
    const saveCodeToSession = async () => {
      const fordAuth = await fetcher("/api/fordAuth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      if (fordAuth?.session) {
        setCookie(null, "fordToken", fordAuth.session.access_token, {
          maxAge: fordAuth.session.expires_in,
        });
        setCookie(null, "vehicleId", fordAuth.vehicle.vehicleId, {
          maxAge: fordAuth.session.expires_in,
        });
      }
    };

    const Login = async () => {
      await saveCodeToSession();
      router.push("/vehicle");
    };

    if (code && !isFordLoggedIn) {
      Login();
    }
    // eslint-disable-next-line
  }, [code]);

  const {
    currentTabContent,
    handleChangeIndex,
    headerHeight,
    headerRef,
    TabsContent,
  } = useMobileTabsContent();

  if (!isReady) {
    return <Loading />;
  }

  return (
    <>
      <PhotoUpload />
      <DynamicHeightTabs
        headerRef={headerRef}
        currentTabContent={currentTabContent}
        handleChangeIndex={handleChangeIndex}
        TabsContent={TabsContent}
        headerHeight={headerHeight}
      />
    </>
  );
}
