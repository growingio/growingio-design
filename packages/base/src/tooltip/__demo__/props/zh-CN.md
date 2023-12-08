### Tooltip

| 参数名              | 描述                                                            | 类型                                                                                           | 默认值  | 版本 |
| ------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------- | ---- |
| blurToHide          | 是否在失去焦点的时候关闭弹出框                                  | boolean                                                                                        | `true`  | -    |
| defaultPopupVisible | 默认的弹出框状态                                                | boolean                                                                                        | `-`     | -    |
| disabled            | 是否禁用弹出                                                    | boolean                                                                                        | `-`     | -    |
| mini                | 迷你尺寸                                                        | boolean                                                                                        | `-`     | -    |
| popupHoverStay      | 鼠标移入弹出框的话，弹出框会保留而不销毁                        | boolean                                                                                        | `true`  | -    |
| popupVisible        | 弹出框是打开还是关闭状态                                        | boolean                                                                                        | `-`     | -    |
| unmountOnExit       | 是否在隐藏的时候销毁 DOM 结构                                   | boolean                                                                                        | `true`  | -    |
| childrenPrefix      | 会在打开状态给元素加上一个类，格式为 `${childrenPrefix}-open`。 | string                                                                                         | `-`     | -    |
| color               | 弹出层背景色                                                    | string                                                                                         | `-`     | -    |
| position            | 弹出框的方位，有 12 个方位可供选择                              | \| 'top'\| 'tl'\| 'tr'\| 'bottom'\| 'bl'\| 'br'\| 'left'\| 'lt'\| 'lb'\| 'right'\| 'rt'\| 'rb' | `top`   | -    |
| trigger             | 触发方式                                                        | [TriggerProps](/?path=/docs/base-trigger--docs#trigger)\['trigger'\]                           | `hover` | -    |
| content             | 弹出的内容                                                      | ReactNode                                                                                      | `-`     | -    |
| className           | 节点类名                                                        | string \| string[]                                                                             | `-`     | -    |
| style               | 节点样式                                                        | CSSProperties                                                                                  | `-`     | -    |
| triggerProps        | 可以接受所有 `Trigger` 组件的参数                               | Partial&lt;[TriggerProps](/?path=/docs/base-trigger--docs#trigger)&gt;                         | `-`     | -    |
| getPopupContainer   | 弹出框挂载的节点                                                | (node: HTMLElement) => Element                                                                 | `-`     | -    |
| onVisibleChange     | 显示或隐藏时触发的回调                                          | (visible: boolean) => void                                                                     | `-`     | -    |
