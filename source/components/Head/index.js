import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

/**
 * Component for generating <head> section
 * @param {string} title - title of the page
 */
// @flow
const Head = ({ title }: { title: string }) => <Helmet>
  <title>{title} — BeerGuru — An example app</title>
  <meta property="og:title" content={`${title} — BeerGuru — An example app`} />
</Helmet>;

Head.propTypes = {
  title: PropTypes.string.isRequired
};

export default Head;
