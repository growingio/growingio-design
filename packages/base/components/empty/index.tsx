import * as React from 'react';
import clsx from 'clsx';
import {
  default as ArcoEmpty,
  EmptyProps as ArcoEmptyProps,
} from '@arco-design/web-react/es/Empty';
import Board from './Board';
import Forbidden from './Forbidden';
import NoContent from './NoContent';
import NoFile from './NoFile';
import NoResource from './NoResource';
import NotFound from './NotFound';
import NotSearched from './NotSearched';

export type EmptyProps = ArcoEmptyProps & {
  size?: 'small' | 'large';
};

const EmptyFunction = (props: EmptyProps, ref: React.Ref<unknown>) => {
  const { size, className, ...restProps } = props;
  const cls = clsx({ [`arco-empty-${size}`]: !!size }, className);
  return <ArcoEmpty ref={ref} {...restProps} className={cls} />;
};

const ForwardRefEmpty = React.forwardRef<HTMLDivElement, EmptyProps>(
  EmptyFunction
);

const Empty = ForwardRefEmpty as typeof ForwardRefEmpty & {
  Board: typeof Board;
  Forbidden: typeof Forbidden;
  NoContent: typeof NoContent;
  NoFile: typeof NoFile;
  NoResource: typeof NoResource;
  NotFound: typeof NotFound;
  NotSearched: typeof NotSearched;
};
Empty.displayName = 'Empty';
Empty.Board = Board;
Empty.Forbidden = Forbidden;
Empty.NoContent = NoContent;
Empty.NoFile = NoFile;
Empty.NoResource = NoResource;
Empty.NotFound = NotFound;
Empty.NotSearched = NotSearched;

export default Empty;
