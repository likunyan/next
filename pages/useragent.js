import React from 'react';
import Layout from '../components/Layout';

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    return (
      <Layout>
        Hello World {this.props.userAgent}
      </Layout>
    )
  }
}
