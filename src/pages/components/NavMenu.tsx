import logo from "~/assets/湘北篮球队logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./NavMenu.css";
const NavMenu = () => {
  const location = useLocation();
  const [active, setActive] = useState("/");
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  return (
    <div className="fixed right-16 top-20">
      <div className="flex flex-col gap-4 items-center">
        <img src={logo} alt="logo" className="w-[56px]" />

        <div className="flex flex-col gap-2 mt-2 text-center bg-neutral-50 rounded-md px-2 py-3">
          <Link
            to="/"
            className="menu-item font-medium relative px-3 py-2 rounded-md cursor-pointer"
          >
            {active === "/" && (
              <motion.div
                layoutId="active"
                className="menu-item-active w-full  absolute left-0 bottom-0 h-full rounded-md "
              />
            )}
            <div className="relative">首页</div>
          </Link>
          <Link
            to="/blog"
            className="menu-item font-medium  relative px-3 py-2 rounded-md cursor-pointer"
          >
            {active === "/blog" && (
              <motion.div
                layoutId="active"
                className="menu-item-active w-full  absolute left-0 bottom-0 h-full rounded-md "
              />
            )}
            <div className="relative">博客</div>
          </Link>
          <Link
            to="/about"
            className="menu-item font-medium relative px-3 py-2 rounded-md cursor-pointer"
          >
            {active === "/about" && (
              <motion.div
                layoutId="active"
                className="menu-item-active w-full absolute left-0 bottom-0 h-full rounded-md"
              />
            )}
            <div className="relative">关于我们</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
