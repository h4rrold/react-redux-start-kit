import React from "react";

function Main({ render }) {
  return (
    <div className="page-view page-view--landing-layout main">{render()}</div>
  );
}

export default Main;
