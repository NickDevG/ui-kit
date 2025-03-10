import React from 'react';
import { MemoryRouter, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs/react';
import * as icons from '@commercetools-uikit/icons';
import Section from '../../../../../.storybook/decorators/section';
import Readme from '../README.md';
import SecondaryButton from './secondary-button';

const iconNames = Object.keys(icons);

storiesOf('Components|Buttons', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add('SecondaryButton', () => {
    const linkTo = text('linkTo');

    const isToggled = boolean('isToggled', false);
    const isToggleButton = boolean('isToggleButton', false);
    const toggleProps = isToggleButton ? { isToggled } : {};
    const linkProps = linkTo && linkTo !== '' ? { to: linkTo, as: Link } : {};

    return (
      <Section>
        <MemoryRouter>
          <SecondaryButton
            type={select('type', ['button', 'reset', 'submit'], 'button')}
            theme={select('theme', ['info', 'default'], 'default')}
            iconLeft={React.createElement(
              icons[select('iconLeft', iconNames, iconNames[0])]
            )}
            onClick={action('onClick')}
            label={text('label', 'Accessibility text')}
            isToggleButton={boolean('isToggleButton', false)}
            isDisabled={boolean('isDisabled', false)}
            {...linkProps}
            {...toggleProps}
          />
        </MemoryRouter>
      </Section>
    );
  });
