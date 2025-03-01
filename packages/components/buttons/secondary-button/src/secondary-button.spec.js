import React from 'react';
import { Link } from 'react-router-dom';
import { PlusBoldIcon } from '@commercetools-uikit/icons';
import {
  screen,
  render,
  fireEvent,
  waitFor,
} from '../../../../../test/test-utils';
import SecondaryButton from './secondary-button';

const createTestProps = (custom) => ({
  label: 'Add',
  iconLeft: <PlusBoldIcon data-testid="icon" />,
  onClick: jest.fn(),
  ...custom,
});

describe('rendering', () => {
  let props;
  beforeEach(() => {
    props = createTestProps();
  });
  it('should render', () => {
    render(<SecondaryButton {...props} />);
    expect(screen.getByLabelText('Add')).toBeInTheDocument();
    expect(screen.getByLabelText('Add')).toBeEnabled();
  });
  it('should render icon', () => {
    render(<SecondaryButton {...props} />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it('should not render icon', () => {
    render(<SecondaryButton {...props} iconLeft={undefined} />);
    expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
  });
  it('should pass aria attributes', () => {
    render(<SecondaryButton {...props} aria-describedby="tooltip-1" />);
    expect(screen.getByLabelText('Add')).toHaveAttribute(
      'aria-describedby',
      'tooltip-1'
    );
  });
  it('should be marked as "disabled"', () => {
    render(<SecondaryButton {...props} isDisabled={true} />);
    expect(screen.getByLabelText('Add')).toBeDisabled();
    expect(screen.getByLabelText('Add')).toHaveAttribute(
      'aria-disabled',
      'true'
    );
  });
  it('should be marked as "active"', () => {
    render(
      <SecondaryButton {...props} isToggleButton={true} isToggled={true} />
    );
    expect(screen.getByLabelText('Add')).toHaveAttribute(
      'aria-pressed',
      'true'
    );
  });
  describe('type variations', () => {
    it('should render a button of type "button"', () => {
      render(<SecondaryButton {...props} />);
      expect(screen.getByLabelText('Add')).toHaveAttribute('type', 'button');
    });
    it('sscreen.hould render a button of type "submit"', () => {
      render(<SecondaryButton {...props} type="submit" />);
      expect(screen.getByLabelText('Add')).toHaveAttribute('type', 'submit');
    });
    it('should render a button of type "reset"', () => {
      render(<SecondaryButton {...props} type="reset" />);
      expect(screen.getByLabelText('Add')).toHaveAttribute('type', 'reset');
    });
  });
  describe('when using "linkTo"', () => {
    /* eslint-disable no-console */
    let log;
    beforeEach(() => {
      log = console.error;
      console.error = jest.fn();
    });
    afterEach(() => {
      console.error = log;
    });

    it('should warn', () => {
      render(<SecondaryButton {...props} onClick={null} linkTo="/foo/bar" />);

      expect(console.error).toHaveBeenCalledWith(
        expect.stringMatching(
          /Warning: "linkTo" property of "SecondaryButton" has been deprecated and will be removed in the next major version\./
        )
      );
    });

    it('should navigate to link when clicked', async () => {
      const { history } = render(
        <SecondaryButton {...props} onClick={null} linkTo="/foo/bar" />
      );
      fireEvent.click(screen.getByLabelText('Add'));
      await waitFor(() => {
        expect(history.location.pathname).toBe('/foo/bar');
      });
    });
  });
  describe('when using `to` without using `as`', () => {
    /* eslint-disable no-console */
    let log;
    beforeEach(() => {
      log = console.error;
      console.error = jest.fn();
    });
    afterEach(() => {
      console.error = log;
    });

    it('should warn', () => {
      render(<SecondaryButton {...props} onClick={null} to="/foo/bar" />);

      expect(console.error).toHaveBeenCalledWith(
        expect.stringMatching(
          /Warning: Failed prop type: Invalid prop "to" supplied to "SecondaryButton"\./
        )
      );
    });
  });
  describe('when using as', () => {
    it('should navigate to link when clicked', async () => {
      const { history } = render(
        <SecondaryButton {...props} onClick={null} as={Link} to="/foo/bar" />
      );
      fireEvent.click(screen.getByLabelText('Add'));
      await waitFor(() => {
        expect(history.location.pathname).toBe('/foo/bar');
      });
    });
  });
});
