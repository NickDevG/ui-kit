import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import FlatButton from '@commercetools-uikit/flat-button';
import { WorldIcon } from '@commercetools-uikit/icons';
import messages from '../../../../../src/components/internals/messages/localized-input';

const LanguagesButton = (props) => {
  const intl = useIntl();
  return props.isOpen ? (
    <FlatButton
      icon={<WorldIcon />}
      label={intl.formatMessage(messages.hide, {
        remainingLanguages: props.remainingLanguages,
      })}
      onClick={props.onClick}
      isDisabled={props.isDisabled}
    />
  ) : (
    <FlatButton
      icon={<WorldIcon />}
      label={intl.formatMessage(messages.show, {
        remainingLanguages: props.remainingLanguages,
      })}
      onClick={props.onClick}
    />
  );
};

LanguagesButton.displayName = 'LanguagesButton';
LanguagesButton.propTypes = {
  isOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  remainingLanguages: PropTypes.number.isRequired,
};

export default LanguagesButton;
