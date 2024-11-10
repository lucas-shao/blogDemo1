import React from "react";
import NavMenu from "./NavMenu";

type LayoutProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <div
      className="container md:max-w-screen-md lg:max-w-screen-lg mx-auto h-full"
      {...props}
    >
      <NavMenu />
      <div className="w-[calc(100%-100px)]">{children}</div>
    </div>
  );
};

export default Layout;
