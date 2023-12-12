import React from 'react';
import {
  default as ArcoSelect,
  SelectProps as ArcoSelectProps,
} from '@arco-design/web-react/es/Select';
import { SelectHandle } from '@arco-design/web-react/es/Select/interface';

export type SelectProps = ArcoSelectProps;

const SelectFunction = (props: SelectProps, ref: React.Ref<SelectHandle>) => {
  return <ArcoSelect ref={ref} {...props} />;
};

const ForwardRefSelect = React.forwardRef<SelectHandle, SelectProps>(
  SelectFunction,
);

const Select = ForwardRefSelect as typeof ForwardRefSelect & {
  Option: typeof ArcoSelect.Option;
};
Select.displayName = 'Select';
Select.Option = ArcoSelect.Option;

export default Select;
