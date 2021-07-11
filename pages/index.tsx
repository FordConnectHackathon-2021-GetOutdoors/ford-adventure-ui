// @ts-nocheck
import React, { useEffect } from "react";
import { PhotoUpload } from "components/PhotoUpload/PhotoUpload";
import { useMobileTabsContent } from "components/DynamicHeightTabs/useMobileTabsContent";
import { DynamicHeightTabs } from "components/DynamicHeightTabs/DynamicHeightTabs";
import { setCookie } from "nookies";
import fetcher from "utils/fetcher";
import useFordUser from "utils/useFordUser";
import { mutate } from "swr";

export const dashboardTabs = [
  { id: "photos", displayName: "Photos" },
  { id: "leaderboard", displayName: "Leaderboard" },
  { id: "badges", displayName: "Badges" },
];

const isTokenRequest = (context: any) =>
  context.query.code &&
  context.req.headers.referer === "https://fordconnect.cv.ford.com/";

export async function getServerSideProps(context) {
  if (!isTokenRequest(context)) return { props: { server: true } };

  return {
    props: {
      server: true,
      code: context.query.code,
    },
  };
}
interface DashboardProps {
  code: string | null;
  [key: string]: any;
}

export default function Dashboard({ code = null }: DashboardProps) {
  const { isFordLoggedIn } = useFordUser();

  useEffect(() => {
    const saveCodeToSession = async () => {
      const authedUser = await fetcher("/api/code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (authedUser?.access_token) {
        setCookie(null, "fordToken", authedUser.access_token, {
          maxAge: authedUser.expires_in,
        });
      }
      mutate("/api/fordUser");
    };

    if (code && !isFordLoggedIn) {
      saveCodeToSession();
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
