### Input

| 参数名           | 描述                                                                    | 类型                                      | 默认值       | 版本 |
| ---------------- | ----------------------------------------------------------------------- | ----------------------------------------- | ------------ | ---- |
| allowClear       | 允许清空输入框                                                          | boolean                                   | `-`          | -    |
| disabled         | 是否禁用                                                                | boolean                                   | `-`          | -    |
| error            | 是否是错误状态                                                          | boolean                                   | `-`          | -    |
| readOnly         | 是否只读                                                                | boolean                                   | `-`          | -    |
| showWordLimit    | 配合 `maxLength`，显示字数统计                                          | boolean                                   | `-`          | -    |
| defaultValue     | 默认值                                                                  | string                                    | `-`          | -    |
| placeholder      | 输入框提示文字                                                          | string                                    | `-`          | -    |
| value            | 输入框的值，受控模式                                                    | string                                    | `-`          | -    |
| autoWidth        | 设置宽度自适应                                                          | boolean\| object                          | `-`          | -    |
| normalizeTrigger | 指定 normalize 执行的时机                                               | ('onBlur' \| 'onPressEnter')[]            | `['onBlur']` | -    |
| size             | 输入框的尺寸                                                            | 'mini' \| 'small' \| 'default' \| 'large' | `default`    | -    |
| addAfter         | 输入框后添加元素                                                        | ReactNode                                 | `-`          | -    |
| addBefore        | 输入框前添加元素                                                        | ReactNode                                 | `-`          | -    |
| clearIcon        | `allowClear` 时配置清除按钮的图标。                                     | ReactNode                                 | `-`          | -    |
| prefix           | 添加前缀文字或者图标                                                    | ReactNode                                 | `-`          | -    |
| suffix           | 添加后缀文字或者图标                                                    | ReactNode                                 | `-`          | -    |
| afterStyle       | 输入框后添加元素的样式                                                  | object                                    | `-`          | -    |
| beforeStyle      | 输入框前添加元素的样式                                                  | object                                    | `-`          | -    |
| className        | 节点类名                                                                | string \| string[]                        | `-`          | -    |
| height           | 自定义输入框高度                                                        | number \| string                          | `-`          | -    |
| maxLength        | 输入框最大输入的长度                                                    | number \| object                          | `-`          | -    |
| style            | 节点样式                                                                | CSSProperties                             | `-`          | -    |
| normalize        | 在指定时机对用户输入的值进行格式化处理。前后值不一致时，会触发 onChange | (value: string) => string                 | `-`          | -    |
| onChange         | 输入时的回调                                                            | (value: string, e) => void                | `-`          | -    |
| onClear          | 点击清除按钮的回调                                                      | () => void                                | `-`          | -    |
| onPressEnter     | 按下回车键的回调                                                        | (e) => void                               | `-`          | -    |

> Input 接受所有原生的属性值

#### autoWidth

| 参数名   | 描述     | 类型                      | 默认值 |
| -------- | -------- | ------------------------- | ------ |
| minWidth | 最小宽度 | CSSProperties['minWidth'] | 0      |
| maxWidth | 最大宽度 | CSSProperties['minWidth'] | 100%   |

#### maxLength

| 参数名    | 描述                                                                                   | 类型    | 默认值 |
| --------- | -------------------------------------------------------------------------------------- | ------- | ------ |
| length    | 输入框最大输入的长度                                                                   | number  | -      |
| errorOnly | 设置 `errorOnly`为 `true` 后，超过 `maxLength` 会展示 `error` 状态，并不限制用户输入。 | boolean | -      |

### Input.Textarea

| 参数名       | 描述                                                                                             | 类型                       | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------------------------------------------ | -------------------------- | ------ | ---- |
| allowClear   | 允许清空输入框                                                                                   | boolean                    | `-`    | -    |
| disabled     | 是否禁用                                                                                         | boolean                    | `-`    | -    |
| error        | 是否是错误状态。                                                                                 | boolean                    | `-`    | -    |
| defaultValue | 默认值                                                                                           | string                     | `-`    | -    |
| placeholder  | 输入框提示文字                                                                                   | string                     | `-`    | -    |
| value        | 值                                                                                               | string                     | `-`    | -    |
| clearIcon    | `allowClear` 时配置清除按钮的图标。                                                              | ReactNode                  | `-`    | -    |
| autoSize     | 是否自动调整输入框的高度                                                                         | boolean \| object          | `-`    | -    |
| className    | 节点类名                                                                                         | string \| string[]         | `-`    | -    |
| maxLength    | 输入框最大输入的长度                                                                             | number \| object           | `-`    | -    |
| style        | 节点样式                                                                                         | CSSProperties              | `-`    | -    |
| wrapperStyle | 开启字数统计之后，会在 `textarea` 标签外包一层 `div`，`wrapperStyle` 用来配置这个 `div` 的样式。 | CSSProperties              | `-`    | -    |
| onChange     | 输入时的回调                                                                                     | (value: string, e) => void | `-`    | -    |
| onClear      | 点击清除按钮的回调                                                                               | () => void                 | `-`    | -    |
| onPressEnter | 按下回车键的回调                                                                                 | (e) => void                | `-`    | -    |

#### autoSize

| 参数名  | 描述     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| minRows | 最小行数 | number | -      |
| maxRows | 最大行数 | number | -      |

### Input.Group

| 参数名    | 描述             | 类型               | 默认值 |
| --------- | ---------------- | ------------------ | ------ |
| compact   | 是否使用紧凑模式 | boolean            | `-`    |
| className | 节点类名         | string \| string[] | `-`    |
| style     | 节点样式         | CSSProperties      | `-`    |

### Input.Search

包含 Input 组件所有参数

| 参数名       | 描述               | 类型                    | 默认值 | 版本 |
| ------------ | ------------------ | ----------------------- | ------ | ---- |
| loading      | 搜索时展示加载状态 | boolean                 | `-`    | -    |
| searchButton | 搜索按钮           | boolean \| ReactNode    | `-`    | -    |
| onSearch     | 点击搜索按钮的回调 | (value: string) => void | `-`    | -    |

### Input.Password

包含 Input 组件所有参数

| 参数名             | 描述                           | 类型                          | 默认值 |
| ------------------ | ------------------------------ | ----------------------------- | ------ |
| defaultVisibility  | 初始是否显示                   | boolean                       | `-`    |
| visibility         | 是否显示                       | boolean                       | `-`    |
| visibilityToggle   | 是否显示切换密码可见状态的按钮 | boolean                       | `-`    |
| onVisibilityChange | visibility 改变时触发          | (visibility: boolean) => void | `-`    |

### 方法

| 参数名 |     描述     |    类型    | 默认值 |
| ------ | :----------: | :--------: | -----: |
| focus  |   焦点事件   | `Function` |    `-` |
| blur   | 失去焦点事件 | `Function` |    `-` |

#### 示例

```js
<Input ref={(ref) => (this.input = ref)} />;

this.input.focus();
this.input.blur();
```