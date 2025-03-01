import React from 'react';
import { Formik } from 'formik';
import { injectIntl } from 'react-intl';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs/react';
import Spacings from '@commercetools-uikit/spacings';
import { PrimaryButton, SecondaryButton } from '@commercetools-uikit/buttons';
import Section from '../../../../../.storybook/decorators/section';
import FormikBox from '../../../../../.storybook/decorators/formik-box';
import Readme from '../README.md';
import TimeInput from './time-input';

const Story = injectIntl((props) => {
  const initialValues = {
    startTime: TimeInput.toLocaleTime('10:00', props.intl.locale),
    endTime: '',
  };
  return (
    <Section>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formik, ...rest) => {
          action('onSubmit')(values, formik, ...rest);
          // eslint-disable-next-line no-console
          console.log({
            startTime: TimeInput.to24h(values.startTime),
            endTime: TimeInput.to24h(values.endTime),
          });
          formik.resetForm({ values: initialValues });
        }}
        render={(formik) => (
          <Spacings.Stack scale="l">
            <TimeInput
              name="startTime"
              value={formik.values.startTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              horizontalConstraint="m"
            />
            <TimeInput
              name="endTime"
              value={formik.values.endTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              horizontalConstraint="m"
            />
            <Spacings.Inline>
              <SecondaryButton
                onClick={formik.handleReset}
                isDisabled={formik.isSubmitting}
                label="Reset"
              />
              <PrimaryButton
                onClick={formik.handleSubmit}
                isDisabled={formik.isSubmitting || !formik.dirty}
                label="Submit"
              />
            </Spacings.Inline>
            <hr />
            <FormikBox formik={formik} />
          </Spacings.Stack>
        )}
      />
    </Section>
  );
});

storiesOf('Examples|Forms/Inputs', module)
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: Readme,
    },
  })
  .add('TimeInput', () => <Story />);
