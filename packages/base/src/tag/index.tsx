import * as React from 'react';
import {
  default as ArcoTag,
  TagProps as ArcoTagProps,
} from '@arco-design/web-react/es/Tag';
import { SizeType } from '../_core/types';
import clsx from 'clsx';

export type TagProps = Omit<ArcoTagProps, 'size'> & {
  size?: SizeType;
  type?: 'normal' | 'highlighted' | 'outline' | 'light-outline';
  status?: 'not-started' | 'success' | 'warning' | 'danger' | 'doing' | 'done';
  disabled?: boolean;
};

const TagFunction = (props: TagProps, ref: React.Ref<unknown>) => {
  const prefixCls = 'arco-tag';
  const { size, type, status, disabled, className, ...restProps } = props;
  let arcoSize;
  switch (size) {
    case 'mini':
      arcoSize = 'small';
      break;
    case 'medium':
      arcoSize = 'medium';
      break;
    case 'large':
      arcoSize = 'large';
      break;
    case 'small':
    default:
      arcoSize = 'default';
  }
  const cls = clsx(
    {
      [`${prefixCls}-${type}`]: !!type,
      [`${prefixCls}-${status}`]: !!status,
      [`${prefixCls}-disabled`]: !!disabled,
    },
    className,
  );
  return <ArcoTag ref={ref} {...restProps} size={arcoSize} className={cls} />;
};

const ForwardRefTag = React.forwardRef<HTMLElement, TagProps>(TagFunction);

const Tag = ForwardRefTag as typeof ForwardRefTag;
Tag.displayName = 'Tag';

export default Tag;
