import React from 'react';
import { ColorRing } from 'react-loader-spinner';
// import PropTypes from 'prop-types';
import css from './Loader.module.css';
const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
    />
  );
};
export default Loader;
