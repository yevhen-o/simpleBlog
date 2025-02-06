import Link from "next/link";
import { PostInterface } from "@src/app/types/PostInterface";
import { getUrl, IDENTIFIERS, titleToSlug } from "@src/app/utils";
import "./BlogItem.scss";

export function BlogItem({
  item,
}: {
  item: Pick<PostInterface, "id" | "author" | "title">;
}) {
  return (
    <div className="blog-item__wrapper">
      <Link
        href={getUrl(IDENTIFIERS.BLOG_VIEW, {
          slug: titleToSlug(item.title),
        })}
      >
        <h3>{item.title}</h3> <small>Author: {item.author}</small>
      </Link>
    </div>
  );
}
