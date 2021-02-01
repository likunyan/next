import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "../src/Link";
import ProTip from "../src/ProTip";

function Copyright() {
  const { foo } = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: "FOO", payload: "666" });
  }

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      onClick={handleClick}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="https://material-ui.com/">
        {foo}
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function About(props) {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          naked
          href="/"
        >
          Go to the main page
        </Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default About;
