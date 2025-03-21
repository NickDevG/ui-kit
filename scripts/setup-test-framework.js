// This file is more-or-less also published as the
// @commercetools-frontend/jest-preset-mc-app preset.
// However the updated version of it was not yet pushed to NPM,
// so we copy it to here for now. This file can be removed once the new version
// of the preset is on NPM.

// react-testing-library setup
import '@testing-library/jest-dom/extend-expect';
import 'intl-pluralrules';
import '@formatjs/intl-relativetimeformat/polyfill-locales';

// enzyme setup
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ShallowWrapper from 'enzyme/ShallowWrapper';
import configureEnzymeExtensions from '@commercetools/enzyme-extensions';
import * as commerceToolsEnzymeMatchers from '@commercetools/jest-enzyme-matchers';

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

expect.extend(commerceToolsEnzymeMatchers);

configureEnzymeExtensions(ShallowWrapper);
