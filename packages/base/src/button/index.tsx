import React from "react";
import clsx from "clsx";
import {
  default as ArcoButton,
  ButtonProps as ArcoButtonProps,
} from "@arco-design/web-react/es/Button";

export type ButtonProps = Omit<ArcoButtonProps, "status" | "size" | "type"> & {
  status?: "primary" | "default" | "success" | "warning" | "danger";
  size?: "mini" | "small" | "medium" | "large";
  type?: "primary" | "default" | "dashed" | "outline" | "text";
};

const ButtonFunction = (props: ButtonProps, ref: React.Ref<unknown>) => {
  const { className, status, size, ...restProps } = props;
  const cls = clsx({ [`arco-btn-status-${status}`]: !!status }, className);
  return (
    <ArcoButton
      ref={ref}
      {...restProps}
      size={size === "medium" ? "default" : size}
      className={cls}
    />
  );
};

const ForwardRefButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonFunction
);

const Button = ForwardRefButton as typeof ForwardRefButton & {
  Group: typeof ArcoButton.Group;
};

Button.Group = ArcoButton.Group;
Button.displayName = "Button";

export default Button;
