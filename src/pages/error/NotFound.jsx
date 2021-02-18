import React from "react";
import { withCenterLayout } from "hoc";
import { useDocumentTitle } from "hooks";
import { Typography } from "@material-ui/core";

const NotFoundPage = () => {
  useDocumentTitle("Страница не найдена");
  return <Typography>Error. Such route can&apos;t be found</Typography>;
};
export default withCenterLayout(NotFoundPage);
