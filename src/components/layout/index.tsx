import React, { Fragment, ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { useRouter } from "next/router";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  return (
    <Fragment>
      <Navbar />
      <main className="min-h-[calc(100vh_-_(88px_+_88px))]">{children}</main>
      {router.pathname !== "/404" && router.pathname !== "/500" ? (
        <Footer />
      ) : null}
    </Fragment>
  );
};

export default Layout;
