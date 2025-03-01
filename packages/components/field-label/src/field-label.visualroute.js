import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import {
  FieldLabel,
  WarningIcon,
  FlatButton,
  customProperties,
} from '@commercetools-frontend/ui-kit';
import { Suite, Spec } from '../../../../test/percy';

export const routePath = '/field-label';

export const component = ({ themes }) => (
  <Suite>
    <Spec label="minimal">
      <FieldLabel title="Hello" horizontalConstraint="m" />
    </Spec>
    <Spec label="with hint and hint icon">
      <FieldLabel
        title="Hello"
        hint="a hint"
        hintIcon={<WarningIcon />}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="with required indicator">
      <FieldLabel
        title="Hello"
        hasRequiredIndicator={true}
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="with all options">
      <FieldLabel
        title="Hello"
        hasRequiredIndicator={true}
        onInfoButtonClick={() => {}}
        hint="a hint"
        hintIcon={<WarningIcon />}
        description="description"
        badge={<FlatButton tone="primary" label="show" />}
        htmlFor="sampleInput"
        horizontalConstraint="m"
      />
    </Spec>
    <Spec label="with all options and large horizontal constraint">
      <FieldLabel
        title="Hello"
        hasRequiredIndicator={true}
        onInfoButtonClick={() => {}}
        hint="a hint"
        hintIcon={<WarningIcon />}
        description="description"
        badge={<FlatButton tone="primary" label="show" />}
        htmlFor="sampleInput"
        horizontalConstraint="l"
      />
    </Spec>
    <Spec label="with a very long hint">
      <FieldLabel
        title="Hello"
        hint="Sed vel condimentum lacus. Nam sit amet dui et magna tincidunt faucibus. Praesent gravida tempor semper. Donec et faucibus ante. Maecenas consectetur urna mi."
        hintIcon={<WarningIcon />}
        horizontalConstraint="m"
      />
    </Spec>
    <ThemeProvider theme={themes.darkTheme}>
      <Spec label="with inverted tone" omitPropsList>
        <ThemeProvider theme={customProperties}>
          <FieldLabel
            title="Hello"
            description="description"
            hasRequiredIndicator={true}
            tone="inverted"
          />
        </ThemeProvider>
      </Spec>
    </ThemeProvider>
  </Suite>
);
