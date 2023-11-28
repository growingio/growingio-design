### Tag

| 参数名         | 描述             | 类型                                     | 默认值  | 版本 |
| -------------- | ---------------- | ---------------------------------------- | ------- | ---- |
| checkable      | 是否支持选中     | boolean                                  | `-`     | -    |
| checked        | 是否选中         | boolean                                  | `-`     | -    |
| closable       | 是否可关闭标签   | boolean                                  | `-`     | -    |
| defaultChecked | 是否默认选中     | boolean                                  | `-`     | -    |
| visible        | 设置标签显示隐藏 | boolean                                  | `-`     | -    |
| color          | 设置标签背景颜色 | string                                   | `-`     | -    |
| size           | 标签尺寸         | 'mini' \| 'small' \| 'medium' \| 'large' | `small` | -    |
| closeIcon      | 自定义关闭图标   | ReactNode                                | `-`     | -    |
| icon           | 设置图标         | ReactNode                                | `-`     | -    |
| bordered       | 是否显示边框     | Boolean                                  | `-`     | -    |
| className      | 节点类名         | string \| string[]                       | `-`     | -    |
| onClose        | 关闭标签回调函数 | (e) =&gt; Promise&lt;any&gt; \| void     | `-`     | -    |
| style          | 节点样式         | CSSProperties                            | `-`     | -    |
| onCheck        | 选中的回调       | (checked: boolean) => void               | `-`     | -    |

### BadgeTag

| Property     | Description            | Type                                     | DefaultValue | Version |
| ------------ | ---------------------- | ---------------------------------------- | ------------ | ------- |
| size         | 子母标签尺寸           | 'mini' \| 'small' \| 'medium' \| 'large' | `small`      | -       |
| className    | 节点类名               | string \| string[]                       | `-`          | -       |
| style        | 节点样式               | CSSProperties                            | `-`          | -       |
| icon         | 设置图标               | ReactNode                                | `-`          | -       |
| title        | 设置标题区域           | ReactNode                                | `-`          | -       |
| content      | 设置内容区域           | ReactNode                                | `-`          | -       |
| contentColor | 设置内容区域的背景颜色 | string                                   | `-`          | -       |

### AvatarTag

| Property  | Description    | Type                                     | DefaultValue | Version |
| --------- | -------------- | ---------------------------------------- | ------------ | ------- |
| size      | 头像标签尺寸   | 'mini' \| 'small' \| 'medium' \| 'large' | `small`      | -       |
| className | 节点类名       | string \| string[]                       | `-`          | -       |
| style     | 节点样式       | CSSProperties                            | `-`          | -       |
| imageSrc  | 头像图片的 url | string                                   | `-`          | -       |
| mode      | 颜色模式       | 'light' \| 'dark'                        | `light`      | -       |
| label     | 标签文本内容   | ReactNode                                | `-`          | -       |
