export type SizeType = 'mini' | 'small' | 'default' | 'large';
export type ColorType =
  | 'red'
  | 'orangered'
  | 'orange'
  | 'gold'
  | 'lime'
  | 'green'
  | 'cyan'
  | 'arcoblue'
  | 'purple'
  | 'pinkpurple'
  | 'magenta'
  | 'gray'
  | string;
export interface InputCommonProps {
  /**
   * @zh_CN 是否是错误状态。(废弃，下个大版本移除，使用 status='error' 替代)
   * @en_US Whether the textarea is error.(Deprecated, removed in the next major version, use status='error' instead)
   */
  error?: boolean;
}
