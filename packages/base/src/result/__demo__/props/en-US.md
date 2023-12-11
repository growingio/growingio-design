### Result

| Property  | Description          | Type                                                                                             | DefaultValue |
| --------- | -------------------- | ------------------------------------------------------------------------------------------------ | ------------ |
| status    | The result status    | 'success' \| 'error' \| 'info' \| 'warning' \| '200' \| '401' \| '403' \| '404' \| '500' \| null | `info`       |
| extra     | The operating area   | ReactNode                                                                                        | `-`          |
| icon      | Customize the icon   | ReactNode                                                                                        | `-`          |
| subTitle  | The subTitle         | ReactNode                                                                                        | `-`          |
| title     | The title            | ReactNode                                                                                        | `-`          |
| className | Additional css class | string \| string[]                                                                               | `-`          |
| style     | Additional style     | CSSProperties                                                                                    | `-`          |

If `status` is `null`, the icon and the background color will not be displayed, [for example](?path=/docs/base-result--docs#icon).
