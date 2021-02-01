import React from "react";

import Layout from "../components/Layout";

const userAgent = ({ userAgent }) => <Layout>Hello World {userAgent}</Layout>;

userAgent.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;

  return { userAgent };
};

export default userAgent;
