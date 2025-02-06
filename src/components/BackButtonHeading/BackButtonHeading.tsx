"use client";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/navigation";

import { ArrowLeft } from "@src/components/Icons";
import "./BackButtonHeading.scss";

export function BackButtonHeading({
  children,
  Tag = "h1",
  className,
}: {
  children: React.ReactNode;
  Tag?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}) {
  const router = useRouter();
  return (
    <div className={classNames("bb-heading__wrapper", className)}>
      <Link title="Go back" onClick={router.back} href="#">
        <ArrowLeft size={24} />
      </Link>
      <Tag>{children}</Tag>
    </div>
  );
}
