import React from "react";
import videoSrc from "~/assets/首页.MP4";
import "./styles/index.css";

// 定义团队主页组件
const IndexPage: React.FC = () => {
  return (
    <video
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      className="w-full max-h-[calc(100vh-100px)]"
    />
  );
};

export default IndexPage;