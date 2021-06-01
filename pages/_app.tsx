/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@auth0/nextjs-auth0";
// layout component
import BasicLayout from "components/layout/BasicLayout";
// global app styles + tailwindcss default styles
import "styles/base.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <BasicLayout>
          <Component {...pageProps} />
        </BasicLayout>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
