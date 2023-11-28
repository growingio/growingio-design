### Tag

| Property       | Description                                   | Type                                     | DefaultValue | Version |
| -------------- | --------------------------------------------- | ---------------------------------------- | ------------ | ------- |
| checkable      | Whether the Tag is checkable                  | boolean                                  | `-`          | -       |
| checked        | Used for setting the currently selected value | boolean                                  | `-`          | -       |
| closable       | Whether the Tag is closable                   | boolean                                  | `-`          | -       |
| defaultChecked | Initial checked state                         | boolean                                  | `-`          | -       |
| visible        | Whether the Tag is visible                    | boolean                                  | `-`          | -       |
| color          | The background color of Tag                   | string                                   | `-`          | -       |
| size           | The size of Tag                               | 'mini' \| 'small' \| 'medium' \| 'large' | `small`      | -       |
| closeIcon      | Custom Close Icon                             | ReactNode                                | `-`          | -       |
| icon           | Set icon                                      | ReactNode                                | `-`          | -       |
| bordered       | Whether the tag is bordered                   | Boolean                                  | `-`          | -       |
| className      | Additional css class                          | string \| string[]                       | `-`          | -       |
| onClose        | Callback when the tag closed                  | (e) =&gt; Promise&lt;any&gt; \| void     | `-`          | -       |
| style          | Additional style                              | CSSProperties                            | `-`          | -       |
| onCheck        | Callback when checked the tag                 | (checked: boolean) => void               | `-`          | -       |

### BadgeTag

| Property     | Description                     | Type                                     | DefaultValue | Version |
| ------------ | ------------------------------- | ---------------------------------------- | ------------ | ------- |
| size         | The size of BadgeTag            | 'mini' \| 'small' \| 'medium' \| 'large' | `small`      | -       |
| className    | Additional css class            | string \| string[]                       | `-`          | -       |
| style        | Additional style                | CSSProperties                            | `-`          | -       |
| icon         | Set icon                        | ReactNode                                | `-`          | -       |
| title        | Set title                       | ReactNode                                | `-`          | -       |
| content      | Set content                     | ReactNode                                | `-`          | -       |
| contentColor | The background color of content | string                                   | `-`          | -       |

### AvatarTag

| Property  | Description                 | Type                                     | DefaultValue | Version |
| --------- | --------------------------- | ---------------------------------------- | ------------ | ------- |
| size      | The size of AvatarTag       | 'mini' \| 'small' \| 'medium' \| 'large' | `small`      | -       |
| className | Additional css class        | string \| string[]                       | `-`          | -       |
| style     | Additional style            | CSSProperties                            | `-`          | -       |
| imageSrc  | Avatar image url            | string                                   | `-`          | -       |
| mode      | The color mode of AvatarTag | 'light' \| 'dark'                        | `light`      | -       |
| label     | The label of AvatarTag      | ReactNode                                | `-`          | -       |
