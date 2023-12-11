### Result

| 参数名    | 描述       | 类型                                                                                             | 默认值 |
| --------- | ---------- | ------------------------------------------------------------------------------------------------ | ------ |
| status    | 不同状态   | 'success' \| 'error' \| 'info' \| 'warning' \| '200' \| '401' \| '403' \| '404' \| '500' \| null | `info` |
| extra     | 额外内容   | ReactNode                                                                                        | `-`    |
| icon      | 自定义图标 | ReactNode                                                                                        | `-`    |
| subTitle  | 子标题文字 | ReactNode                                                                                        | `-`    |
| title     | 标题文字   | ReactNode                                                                                        | `-`    |
| className | 节点类名   | string \| string[]                                                                               | `-`    |
| style     | 节点样式   | CSSProperties                                                                                    | `-`    |

当 `status` 传入 `null` 时，需要通过 `icon` 属性设置图标，并且默认没有背景色以及图标颜色，[示例](?path=/docs/base-result--docs#icon)。
