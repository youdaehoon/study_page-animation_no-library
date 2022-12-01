import React from "react";
import { Route, Routes, useLocation } from "react-router";

import "./styles/pagetransition.css";

import Admin from "./pages/admin";
import Main from "./pages/main";
import Users from "./pages/users";

const Content = () => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = React.useState(location);
  const [transitionStage, setTransitionStage] = React.useState("fadeIn"); //기본
  console.log(location);

  React.useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut"); //이전위치와 현재위치가 다르다면, fadeout 상태
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn"); //animation이 끝났을 때
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>
        <Route path="/" element={<Main />} />
        <Route path="/users" element={<Users />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Content;
