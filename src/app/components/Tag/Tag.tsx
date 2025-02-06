import classNames from "classnames";
import "./Tag.scss";

export function Tag({
  children,
  className,
  isPrimary,
}: {
  children: React.ReactNode;
  className?: string;
  isPrimary?: boolean;
}) {
  return (
    <div
      className={classNames("tag", className, { "tag--primary": isPrimary })}
    >
      {children}
    </div>
  );
}
