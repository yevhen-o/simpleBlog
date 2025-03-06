"use client";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import "./Navigation.scss";

import { getUrl, IDENTIFIERS } from "@src/utils";
import { UserMenu } from "@src/features/authentication/UserMenu";

export const Navigation = () => {
  const pathname = usePathname();

  const items = [
    { link: getUrl(IDENTIFIERS.HOME), title: "Home" },
    { link: getUrl(IDENTIFIERS.BLOG), title: "Blog" },
    { link: getUrl(IDENTIFIERS.USERS), title: "Users" },
    {
      link: getUrl(IDENTIFIERS.BLOG_ADD),
      title: "Add new post",
      className: "primary",
    },
  ];
  return (
    <div className="top-navigation__wrapper">
      <nav>
        {items.map(({ link, title, className }) => (
          <Link
            key={link}
            href={link}
            className={classNames(className, { active: pathname === link })}
          >
            {title}
          </Link>
        ))}
        <UserMenu />
      </nav>
    </div>
  );
};
