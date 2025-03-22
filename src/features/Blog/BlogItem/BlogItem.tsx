import { PostInterface } from "@src/types/PostInterface";
import { getUrl, IDENTIFIERS, Link } from "@src/utils";
import "./BlogItem.scss";
import { TagList } from "@src/components/TagList";

export function BlogItem({
  item,
}: {
  item: Pick<PostInterface, "slug" | "author" | "title" | "image_url" | "tags">;
}) {
  return (
    <div className="blog-item__wrapper">
      <Link
        href={getUrl(IDENTIFIERS.BLOG_VIEW, {
          slug: item.slug,
        })}
      >
        {item.image_url && (
          <div className="blog-item__image-wrapper">
            <img src={item.image_url} alt={item.title} />
          </div>
        )}
        <div className="blog-item__content-wrapper">
          <h2>{item.title}</h2>{" "}
          <div className="blog-item__bottom-line">
            <TagList tags={item.tags} />
            <small>
              Author: {item.author.first_name} {item.author.last_name}
            </small>
          </div>
        </div>
      </Link>
    </div>
  );
}
