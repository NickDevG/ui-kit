import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import { oneLine } from 'common-tags';
import Stack from '@commercetools-uikit/spacings-stack';
import Constraints from '@commercetools-uikit/constraints';
import { useToggleState } from '@commercetools-uikit/hooks';
import {
  sortLanguages,
  createLocalizedDataAttributes,
  getHasErrorOnRemainingLanguages,
  getHasWarningOnRemainingLanguages,
  isTouched,
  getId,
  getName,
} from '@commercetools-uikit/localized-utils';
import RichTextInput from './rich-text-input';
import {
  isEmpty,
  createLocalizedString,
  omitEmptyTranslations,
} from '../../../../../src/components/internals/rich-text-utils/localized';
import RequiredValueErrorMessage from './required-value-error-message';

const expandedTranslationsReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        [action.payload]: !state[action.payload],
      };

    case 'toggleAll': {
      const newState = Object.keys(state).reduce((translations, locale) => {
        return {
          [locale]: true,
          ...translations,
        };
      }, {});
      return newState;
    }
    default:
      return state;
  }
};

// This component supports expanding/collapsing rich text inputs, but it also
// supports showing/hiding the remaining languages.
// These two features are both about opening/closing something, and so the code
// can get quite confusing. We try to stick to expand/collapse for the
// multiline inputs, while we use show/hide/open/close for the remaining
// languages.
const LocalizedRichTextInput = (props) => {
  const initialExpandedTranslationsState = Object.keys(props.value).reduce(
    (translations, locale) => {
      return {
        [locale]: Boolean(props.defaultExpandMultilineText),
        ...translations,
      };
    },
    {}
  );

  const [
    expandedTranslationsState,
    expandedTranslationsDispatch,
  ] = React.useReducer(
    expandedTranslationsReducer,
    initialExpandedTranslationsState
  );

  const defaultExpansionState =
    props.hideLanguageExpansionControls ||
    props.defaultExpandLanguages ||
    // useToggleState's default is `true`, but we want `false`
    false;

  const [areLanguagesOpened, toggleLanguages] = useToggleState(
    defaultExpansionState
  );

  const toggleLanguage = React.useCallback(
    (language) => {
      expandedTranslationsDispatch({ type: 'toggle', payload: language });
    },
    [expandedTranslationsDispatch]
  );

  const languages = sortLanguages(
    props.selectedLanguage,
    Object.keys(props.value)
  );

  const hasErrorInRemainingLanguages =
    props.hasError ||
    getHasErrorOnRemainingLanguages(props.errors, props.selectedLanguage);

  const hasWarningInRemainingLanguages =
    props.hasWarning ||
    getHasWarningOnRemainingLanguages(props.warnings, props.selectedLanguage);

  if (hasErrorInRemainingLanguages || hasWarningInRemainingLanguages) {
    if (!areLanguagesOpened) {
      // this update within render replaces the old `getDerivedStateFromProps` functionality
      // https://reactjs.org/docs/hooks-faq.html#how-do-i-implement-getderivedstatefromprops
      toggleLanguages();
    }
  }

  return (
    <Constraints.Horizontal constraint={props.horizontalConstraint}>
      <Stack>
        {languages.map((language, index) => {
          const isFirstLanguage = index === 0;
          if (!isFirstLanguage && !areLanguagesOpened) return null;
          const isLastLanguage = index === languages.length - 1;
          const hasRemainingLanguages = languages.length > 1;
          const hasErrorOnRemainingLanguages =
            props.hasError ||
            getHasErrorOnRemainingLanguages(
              props.errors,
              props.selectedLanguage
            );
          const hasWarningOnRemainingLanguages =
            props.hasWarning ||
            getHasWarningOnRemainingLanguages(
              props.warnings,
              props.selectedLanguage
            );

          return (
            <RichTextInput
              key={language}
              autoComplete={props.autoComplete}
              id={LocalizedRichTextInput.getId(props.id, language)}
              name={LocalizedRichTextInput.getName(props.name, language)}
              value={props.value[language]}
              onChange={props.onChange}
              language={language}
              isOpen={expandedTranslationsState[language]}
              toggleLanguage={toggleLanguage}
              placeholder={
                props.placeholder ? props.placeholder[language] : undefined
              }
              onBlur={props.onBlur}
              onFocus={props.onFocus}
              isAutofocussed={index === 0 && props.isAutofocussed}
              isDisabled={props.isDisabled}
              isReadOnly={props.isReadOnly}
              hasRemainingLanguages={hasRemainingLanguages}
              hideLanguageExpansionControls={
                props.hideLanguageExpansionControls
              }
              isFirstLanguage={isFirstLanguage}
              areLanguagesOpened={areLanguagesOpened}
              remainingLanguages={languages.length - 1}
              toggleLanguages={toggleLanguages}
              isLastLanguage={isLastLanguage}
              hasErrorOnRemainingLanguages={hasErrorOnRemainingLanguages}
              hasWarningOnRemainingLanguages={hasWarningOnRemainingLanguages}
              hasError={Boolean(
                props.hasError || (props.errors && props.errors[language])
              )}
              hasWarning={Boolean(
                props.hasWarning || (props.warnings && props.warnings[language])
              )}
              warning={props.warnings && props.warnings[language]}
              error={props.errors && props.errors[language]}
              showExpandIcon={props.showExpandIcon}
              onClickExpand={props.onClickExpand}
              {...createLocalizedDataAttributes(props, language)}
            />
          );
        })}
      </Stack>
    </Constraints.Horizontal>
  );
};

LocalizedRichTextInput.displayName = 'LocalizedRichTextInput';

LocalizedRichTextInput.RequiredValueErrorMessage = RequiredValueErrorMessage;

LocalizedRichTextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  autoComplete: PropTypes.string,
  // then input doesn't accept a "languages" prop, instead all possible
  // languages have to exist (with empty or filled slate values) on the value:
  //   { en: slateValue, de: slateValue, es: slateValue }
  value: PropTypes.objectOf(PropTypes.any).isRequired,
  onChange: requiredIf(PropTypes.func, (props) => !props.isReadOnly),
  selectedLanguage: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  defaultExpandMultilineText: PropTypes.bool,
  hideLanguageExpansionControls: PropTypes.bool,
  defaultExpandLanguages: (props, propName, componentName, ...rest) => {
    if (
      props.hideLanguageExpansionControls &&
      typeof props[propName] === 'boolean'
    ) {
      throw new Error(
        oneLine`
          ${componentName}: "${propName}" does not have any effect when
          "hideLanguageExpansionControls" is set.
        `
      );
    }
    return PropTypes.bool(props, propName, componentName, ...rest);
  },
  isAutofocussed: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  placeholder: PropTypes.objectOf(PropTypes.string),
  horizontalConstraint: PropTypes.oneOf(['m', 'l', 'xl', 'scale']),
  hasError: PropTypes.bool,
  hasWarning: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.node),
  warnings: PropTypes.objectOf(PropTypes.node),
  showExpandIcon: PropTypes.bool.isRequired,
  onClickExpand: requiredIf(PropTypes.func, (props) => props.showExpandIcon),
};

LocalizedRichTextInput.getId = getId;

LocalizedRichTextInput.getName = getName;

LocalizedRichTextInput.defaultProps = {
  horizontalConstraint: 'scale',
  showExpandIcon: false,
};

LocalizedRichTextInput.createLocalizedString = createLocalizedString;

LocalizedRichTextInput.isEmpty = isEmpty;

LocalizedRichTextInput.omitEmptyTranslations = omitEmptyTranslations;

LocalizedRichTextInput.isTouched = isTouched;

export default LocalizedRichTextInput;
