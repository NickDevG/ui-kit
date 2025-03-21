import React from 'react';
import PropTypes from 'prop-types';
import Text from '@commercetools-uikit/text';
import { FormattedMessage } from 'react-intl';
import requiredIf from 'react-required-if';
import RequiredIndicator from './required-indicator';

const Label = (props) => (
  <label htmlFor={props.htmlFor}>
    <Text.Body tone={props.tone} isBold={props.isBold}>
      {props.intlMessage ? (
        <FormattedMessage {...props.intlMessage} />
      ) : (
        props.children
      )}
      {props.isRequiredIndicatorVisible && <RequiredIndicator />}
    </Text.Body>
  </label>
);

Label.displayName = 'Label';

Label.propTypes = {
  // FIXME: Add proper tone when tones are refactored
  tone: PropTypes.oneOf(['primary', 'inverted']),
  isBold: PropTypes.bool,
  isRequiredIndicatorVisible: PropTypes.bool,
  htmlFor: PropTypes.string,
  intlMessage: requiredIf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string,
      defaultMessage: PropTypes.string.isRequired,
    }),
    (props) => !React.Children.count(props.children)
  ),
  children: requiredIf(PropTypes.node, (props) => !props.intlMessage),
};

export default Label;
