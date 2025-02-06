import classNames from "classnames";
import "./ListWrapper.scss";

export function ListWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={classNames("list__wrapper", className)}>{children}</div>
  );
}
