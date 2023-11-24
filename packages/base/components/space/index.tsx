import * as React from 'react';
import {
  default as ArcoSpace,
  SpaceProps as ArcoSpaceProps,
} from '@arco-design/web-react/es/Space';

export type SpaceProps = ArcoSpaceProps;

const SpaceFunction = (props: SpaceProps, ref: React.Ref<unknown>) => {
  return <ArcoSpace ref={ref} {...props} />;
};

const ForwardRefSpace = React.forwardRef<HTMLElement, SpaceProps>(
  SpaceFunction
);

const Space = ForwardRefSpace as typeof ForwardRefSpace;
Space.displayName = 'Space';

export default Space;
