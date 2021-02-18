import React from "react";
import Header from "components/header/Header";
import Typography from "@material-ui/core/Typography";

function Center({ render }) {
  return (
    <div className="page-view page-view--centered-layout">
      <Header>
        <Typography>App</Typography>
      </Header>
      <main className="main-container d-flex justify-content-center align-items-start ">
        {render()}
      </main>
    </div>
  );
}

export default Center;
