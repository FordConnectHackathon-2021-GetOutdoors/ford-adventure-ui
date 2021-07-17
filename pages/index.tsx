import React, { useEffect, useState } from "react";
import { PhotoUpload } from "components/PhotoUpload/PhotoUpload";
import { useMobileTabsContent } from "components/DynamicHeightTabs/useMobileTabsContent";
import { DynamicHeightTabs } from "components/DynamicHeightTabs/DynamicHeightTabs";
import { setCookie } from "nookies";
import fetcher from "utils/fetcher";
import useFordUser from "utils/useFordUser";
import { useRouter } from "next/router";
import { Loading } from "components/Loading";
import { supabase } from "utils/supabase";

export const dashboardTabs = [
  { id: "photos", displayName: "Photos" },
  { id: "leaderboard", displayName: "Leaderboard" },
  { id: "badges", displayName: "Badges" },
];

const isTokenRequest = (context: any) =>
  context.query.code &&
  context.req.headers.referer === "https://fordconnect.cv.ford.com/";

export const getServerSideProps = async (context: any) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);
  // if (!user) {
  //   // If no user, redirect to index.
  //   return { props: {}, redirect: { destination: "/go", permanent: false } };
  // }
  return {
    props:
      user && isTokenRequest(context)
        ? { server: true, code: context.query.code, user }
        : { server: true },
  };
};

interface DashboardProps {
  code: string | null;
  user?: any;
  [key: string]: any;
}

export default function Dashboard({ code = null, user }: DashboardProps) {
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

  if (!TabsContent) {
    return <Loading />;
  }

  return (
    <>
      <PhotoUpload />
      <DynamicHeightTabs
        currentTabContent={currentTabContent}
        handleChangeIndex={handleChangeIndex}
        headerHeight={headerHeight}
        headerRef={headerRef}
        tabs={dashboardTabs}
        TabsContent={TabsContent}
      />
    </>
  );
}
