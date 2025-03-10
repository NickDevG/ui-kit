import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Value } from 'react-value';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs/react';
import Section from '../../../../../.storybook/decorators/section';
import Readme from '../README.md';
import TextInput from './text-input';

storiesOf('Components|Inputs', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add('TextInput', () => {
    return (
      <Section>
        <Value
          defaultValue=""
          render={(value, onChange) => (
            <TextInput
              id={text('id', '')}
              name={text('name', '')}
              value={value}
              onChange={(event) => {
                action('onChange')(event);
                onChange(event.target.value);
              }}
              isAutofocussed={boolean('isAutofocussed', false)}
              isDisabled={boolean('isDisabled', false)}
              isReadOnly={boolean('isReadOnly', false)}
              hasError={boolean('hasError', false)}
              hasWarning={boolean('hasWarning', false)}
              placeholder={text('placeholder', 'Placeholder')}
              horizontalConstraint={select(
                'horizontalConstraint',
                ['s', 'm', 'l', 'xl', 'scale'],
                'm'
              )}
            />
          )}
        />
      </Section>
    );
  });
