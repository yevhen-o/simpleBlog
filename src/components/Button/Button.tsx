import classNames from "classnames";
import { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from "react";
import "./Button.scss";

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  isPrimary?: boolean;
  isFlat?: boolean;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
};

export const Button: ForwardRefRenderFunction<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
> = (
  {
    id,
    type,
    onClick,
    children,
    disabled,
    className,
    isPrimary,
    isFlat,
    ariaLabel,
    ...restProps
  },
  ref
) => {
  return (
    <button
      ref={ref}
      {...restProps}
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classNames(
        "button",
        { "button--primary": isPrimary },
        { "button--flat": isFlat },
        className
      )}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
