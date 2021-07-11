// @ts-nocheck
import React, { useState, useEffect } from "react";
import { PhotoUpload } from "components/PhotoUpload/PhotoUpload";
import { useMobileTabsContent } from "components/DynamicHeightTabs/useMobileTabsContent";
import { DynamicHeightTabs } from "components/DynamicHeightTabs/DynamicHeightTabs";
import { setCookie } from "nookies";
import { FordLoginButton } from "../components/FordLogin/FordLoginButton";
import fetcher from "utils/fetcher";
import useFordUser from "utils/useFordUser";
import { mutate } from "swr";

const mutateUser = (newUser: any) => mutate("/api/fordUser", newUser);

export const dashboardTabs = [
  { id: "photos", displayName: "Photos" },
  { id: "leaderboard", displayName: "Leaderboard" },
  { id: "badges", displayName: "Badges" },
];

const complex =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) Ap…ML, like Gecko) Chrome/87.0.4280.88 Safari/537.36";

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

export default function Dashboard({ code = null, ...props }: DashboardProps) {
  const { user } = useFordUser();

  const [errorMsg, setErrorMsg] = useState("");

  const {
    currentTabContent,
    handleChangeIndex,
    headerHeight,
    headerRef,
    TabsContent,
  } = useMobileTabsContent();

  const shouldFetchToken = !user || !user.isFordLoggedIn;

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
    };

    if (code && shouldFetchToken) {
      saveCodeToSession();
    }
    // eslint-disable-next-line
  }, [code, setErrorMsg]);

  return (
    <>
      <PhotoUpload />
      {errorMsg && errorMsg}
      {/* <Button>Add to Cookie from API Route</Button> */}
      <FordLoginButton />
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
