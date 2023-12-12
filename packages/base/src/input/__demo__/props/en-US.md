### Input

| Property         | Description                                                                                                                                          | Type                                      | DefaultValue | Version |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------ | ------- |
| allowClear       | Whether allow clear value                                                                                                                            | boolean                                   | `-`          | -       |
| disabled         | Whether the input is disabled                                                                                                                        | boolean                                   | `-`          | -       |
| error            | Whether the input is error.                                                                                                                          | boolean                                   | `-`          | -       |
| readOnly         | Whether the input is readOnly                                                                                                                        | boolean                                   | `-`          | -       |
| showWordLimit    | With `maxLength`, Show word count.                                                                                                                   | boolean                                   | `-`          | -       |
| defaultValue     | The initial input content                                                                                                                            | string                                    | `-`          | -       |
| placeholder      | Input box prompt text                                                                                                                                | string                                    | `-`          | -       |
| value            | The input content value                                                                                                                              | string                                    | `-`          | -       |
| autoWidth        | The auto width properties.                                                                                                                           | boolean\| object                          | `-`          | -       |
| normalizeTrigger | Specify the timing of normalize execution                                                                                                            | ('onBlur' \| 'onPressEnter')[]            | `['onBlur']` | -       |
| size             | The size of the input box                                                                                                                            | 'mini' \| 'small' \| 'default' \| 'large' | `default`    | -       |
| addAfter         | The label text displayed after (on the right side of) the input field                                                                                | ReactNode                                 | `-`          | -       |
| addBefore        | The label text displayed before (on the left side of) the input field                                                                                | ReactNode                                 | `-`          | -       |
| clearIcon        | Configure the icon of the clear button when `allowClear`.                                                                                            | ReactNode                                 | `-`          | -       |
| prefix           | The prefix icon or text for the Input                                                                                                                | ReactNode                                 | `-`          | -       |
| suffix           | The suffix icon or text for the Input                                                                                                                | ReactNode                                 | `-`          | -       |
| afterStyle       | The additional css style of the `addAfter` element                                                                                                   | object                                    | `-`          | -       |
| beforeStyle      | The additional css style of the `addBefore` element                                                                                                  | object                                    | `-`          | -       |
| className        | Additional css class                                                                                                                                 | string \| string[]                        | `-`          | -       |
| height           | Custom input height                                                                                                                                  | number \| string                          | `-`          | -       |
| maxLength        | The max content length                                                                                                                               | number \| object                          | `-`          | -       |
| style            | Additional style                                                                                                                                     | CSSProperties                             | `-`          | -       |
| normalize        | Format the value entered by the user at the specified time, and when the previous and subsequent values are inconsistent, onChange will be triggered | (value: string) => string                 | `-`          | -       |
| onChange         | Callback when user input                                                                                                                             | (value: string, e) => void                | `-`          | -       |
| onClear          | Callback when click clear button                                                                                                                     | () => void                                | `-`          | -       |
| onPressEnter     | Callback when press enter key                                                                                                                        | (e) => void                               | `-`          | -       |

> Input Accept all native attribute values

#### autoWidth

| Property | Description       | Type                      | DefaultValue |
| -------- | ----------------- | ------------------------- | ------------ |
| minWidth | The minimum width | CSSProperties['minWidth'] | 0            |
| maxWidth | The maximum width | CSSProperties['minWidth'] | 100%         |

#### maxLength

| Property  | Description                                                                                                                                   | Type    | DefaultValue |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------ |
| length    | The max content length                                                                                                                        | number  | -            |
| errorOnly | After setting `errorOnly` to `true`, if `maxLength` is exceeded, the `error` status will be displayed, and user input will not be restricted. | boolean | -            |

### Input.Textarea

| Property     | Description                                                                                                                | Type                       | DefaultValue | Version |
| ------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ | ------- |
| allowClear   | Whether allow clear the content                                                                                            | boolean                    | `-`          | -       |
| disabled     | Whether the textarea is disabled                                                                                           | boolean                    | `-`          | -       |
| error        | Whether the textarea is error                                                                                              | boolean                    | `-`          | -       |
| defaultValue | To set default value                                                                                                       | string                     | `-`          | -       |
| placeholder  | textarea placeholder                                                                                                       | string                     | `-`          | -       |
| value        | To set value                                                                                                               | string                     | `-`          | -       |
| clearIcon    | Configure the icon of the clear button when `allowClear`                                                                   | ReactNode                  | `-`          | -       |
| autoSize     | Height autoSize feature                                                                                                    | boolean \| object          | `-`          | -       |
| className    | Additional css class                                                                                                       | string \| string[]         | `-`          | -       |
| maxLength    | The max content length                                                                                                     | number \| object           | `-`          | -       |
| style        | Additional style                                                                                                           | CSSProperties              | `-`          | -       |
| wrapperStyle | With `showWordLimit`, a `div` will be outside the `textarea` tag, and `wrapperStyle` is used to configure the style of it. | CSSProperties              | `-`          | -       |
| onChange     | Callback when user input                                                                                                   | (value: string, e) => void | `-`          | -       |
| onClear      | Callback when click clear button                                                                                           | () => void                 | `-`          | -       |
| onPressEnter | Callback when press enter key                                                                                              | (e) => void                | `-`          | -       |

#### autoSize

| Property | Description      | Type   | DefaultValue |
| -------- | ---------------- | ------ | ------------ |
| minRows  | The minimum rows | number | -            |
| maxRows  | The maximum rows | number | -            |

### Input.Group

| Property  | Description                 | Type               | DefaultValue |
| --------- | --------------------------- | ------------------ | ------------ |
| compact   | Whether to use compact mode | boolean            | `-`          |
| className | Additional css class        | string \| string[] | `-`          |
| style     | Additional style            | CSSProperties      | `-`          |

### Input.Search

Contains all the parameters of the Input component

| Property     | Description                        | Type                    | DefaultValue | Version |
| ------------ | ---------------------------------- | ----------------------- | ------------ | ------- |
| loading      | Show loading status when searching | boolean                 | `-`          | -       |
| searchButton | Search button                      | boolean \| ReactNode    | `-`          | -       |
| onSearch     | Callback when click search button  | (value: string) => void | `-`          | -       |

### Input.Password

Contains all the parameters of the Input component

| Property           | Description                                                               | Type                          | DefaultValue |
| ------------------ | ------------------------------------------------------------------------- | ----------------------------- | ------------ |
| defaultVisibility  | To set default visibility                                                 | boolean                       | `-`          |
| visibility         | -                                                                         | boolean                       | `-`          |
| visibilityToggle   | Whether to display the button to switch the visible state of the password | boolean                       | `-`          |
| onVisibilityChange | Callback when visibility changes                                          | (visibility: boolean) => void | `-`          |

### Method

| Property | Description  |    Type    | Default |
| -------- | :----------: | :--------: | ------: |
| focus    |  Get focus   | `Function` |     `-` |
| blur     | Remove focus | `Function` |     `-` |

#### Demo

```js
<Input ref={(ref) => (this.input = ref)} />;

this.input.focus();
this.input.blur();
```
