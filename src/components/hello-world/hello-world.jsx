import React from 'react';
import PropTypes from 'prop-types';

import './hello-world.scss';

const HelloWorld = ({ title }) => <div className="hello-world">{title}</div>;

HelloWorld.propTypes = {
  title: PropTypes.string,
};

HelloWorld.defaultProps = {
  title: 'Default Title',
};

export default HelloWorld;
