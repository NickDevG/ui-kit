# Typography: Text

## Usage

```js
// NOTE: the main import is not a React component, instead you need to use one
// of the types defined in the component.
import Text from '@commercetools-uikit/text';
```

### `<Text.Headline>`

Wraps the given text in the given HTML header `size`.

#### Usage

```js
<Text.Headline as="h1">{'The title'}</Text.Headline>
```

#### Properties

| Props         | Type             | Required | Values               | Default | Description                                                          |
| ------------- | ---------------- | :------: | -------------------- | ------- | -------------------------------------------------------------------- |
| `as`          | `String`         |    ✅    | `['h1', 'h2', 'h3']` | -       | -                                                                    |
| `children`    | `PropTypes.node` | ✅ (\*)  | -                    | -       | -                                                                    |
| `intlMessage` | `intl message`   | ✅ (\*)  | -                    | -       | An intl message object that will be rendered with `FormattedMessage` |
| `title`       | `String`         |    -     | -                    | -       | Text to show in a tooltip on hover over the element                  |
| `truncate`    | `Bool`           |    -     | -                    | `false` | Option for truncate content in case the screen has small width       |
| `elementType` | `String`         |    -     | `['h1', 'h2', 'h3']` | -       | ⚠️ Deprecated                                                        |

> `*`: `children` is required only if `intlMessage` is not provided

The component further forwards all `data-` attributes to the underlying component.

#### Where to use

Title of pages.

### `<Text.Subheadline>`

Wraps the given text in the given HTML header `size`.

#### Usage

```js
<Text.Subheadline elementType="h4">{'The subtitle'}</Text.Subheadline>
```

#### Properties

| Props         | Type             | Required | Values                                                            | Default |
| ------------- | ---------------- | :------: | ----------------------------------------------------------------- | ------- |
| `as`          | `String`         |    ✅    | `['h4', 'h5']`                                                    | -       |
| `isBold`      | `Boolean`        |    -     | -                                                                 | `false` |
| `tone`        | `String`         |    -     | `['primary', 'secondary', 'information', 'positive', 'negative']` | -       |
| `children`    | `PropTypes.node` | ✅ (\*)  | -                                                                 | -       |
| `intlMessage` | `intl message`   | ✅ (\*)  | -                                                                 | -       | An intl message object that will be rendered with `FormattedMessage` |
| `title`       | `String`         |    -     | -                                                                 | -       |
| `truncate`    | `Bool`           |    -     | -                                                                 | `false` |
| `elementType` | `String`         |    -     | `['h4', 'h5']`                                                    | -       | ⚠️ Deprecated |

> `*`: `children` is required only if `intlMessage` is not provided

The component further forwards all `data-` attributes to the underlying component.

#### Where to use

Subtitle of pages.

### `<Text.Wrap>`

Wraps the given text in its container. And for long text, text will be wrapped to new line.

#### Usage

```js
<Text.Wrap>{'Sooo long text'}</Text.Wrap>
```

#### Where to use

When we render value that may be vey long, and we prefer to wrap text to new line after it exceeds its wrapper's width.

### `<Text.Body>`

Wraps the given text in a `<p>` element, for normal content.

#### Usage

```js
<Text.Body>{'This is a content'}</Text.Body>
```

#### Properties

| Props         | Type             | Required | Values                                                                        | Default |
| ------------- | ---------------- | :------: | ----------------------------------------------------------------------------- | ------- |
| `as`          | `String`         |    -     | `['p', 'span']`                                                               | -       |
| `isBold`      | `Boolean`        |    -     | -                                                                             | `false` |
| `isItalic`    | `Boolean`        |    -     | -                                                                             | `false` |
| `tone`        | `String`         |    -     | `['primary', 'secondary', 'information', 'positive', 'negative', 'inverted']` | -       |
| `children`    | `PropTypes.node` | ✅ (\*)  | -                                                                             | -       |
| `intlMessage` | `intl message`   | ✅ (\*)  | -                                                                             | -       | An intl message object that will be rendered with `FormattedMessage` |
| `title`       | `String`         |    -     | -                                                                             | -       |
| `truncate`    | `Bool`           |    -     | -                                                                             | `false` |
| `isInline`    | `Bool`           |    -     | -                                                                             | `false` | ⚠️ Deprecated |

> `*`: `children` is required only if `intlMessage` is not provided

The component further forwards all `data-` attributes to the underlying component.

#### Where to use

Content text in general.

### `<Text.Detail>`

Wraps the given text in a `<small>` semantic tag. It accepts a `tone` prop to
properly style the text.

#### Usage

```js
<Text.Detail>{'This would be something small'}</Text.Detail>
<Text.Detail tone="secondary">{'This would be something small with the secondary tone applied'}</Text.Detail>
```

#### Properties

| Props         | Type             | Required | Values                                                                        | Default |
| ------------- | ---------------- | :------: | ----------------------------------------------------------------------------- | ------- |
| `isBold`      | `Boolean`        |    -     | -                                                                             | `false` |
| `isItalic`    | `Boolean`        |    -     | -                                                                             | `false` |
| `tone`        | `String`         |    -     | `['primary', 'secondary', 'information', 'positive', 'negative', 'warning'']` | -       |
| `children`    | `PropTypes.node` | ✅ (\*)  | -                                                                             | -       |
| `intlMessage` | `intl message`   | ✅ (\*)  | -                                                                             | -       | An intl message object that will be rendered with `FormattedMessage` |
| `title`       | `String`         |    -     | -                                                                             | -       |
| `truncate`    | `Bool`           |    -     | -                                                                             | `false` |
| `isInline`    | `Bool`           |    -     | -                                                                             | `false` |

> `*`: `children` is required only if `intlMessage` is not provided

The component further forwards all `data-` attributes to the underlying component.

#### Where to use

Details text of form boxes.
