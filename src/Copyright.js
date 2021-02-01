import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <MuiLink to="/" color="inherit">
      {process.env.NEXT_APP_NAME}
    </MuiLink>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

export default Copyright;
