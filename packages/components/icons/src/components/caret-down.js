import React from 'react';
import {
  getIconStyles,
  iconPropTypes,
} from '../../../../../src/components/internals/icons/create-styled-icon';
import CaretDown from '../raw-components/caret-down';

const Component = (props) => (
  <CaretDown {...props} css={(theme) => getIconStyles(props, theme)} />
);

Component.displayName = 'CaretDownIcon';

// we do this to enable treeshaking
// please see https://github.com/alex996/react-css-spinners/issues/1
if (process.env.NODE_ENV !== 'production') {
  Component.propTypes = iconPropTypes;
}

export default Component;
