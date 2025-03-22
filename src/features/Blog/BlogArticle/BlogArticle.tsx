import { PostInterface } from "@src/types/PostInterface";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import {
  countCommas as countCommasFn,
  countDots as countDotsFn,
} from "@src/utils";
import "./BlogArticle.scss";
import { TagList } from "@src/components/TagList";

export function BlogArticle({ article }: { article: PostInterface }) {
  const { title, content, author, tags, countCommas, countDots, image_url } =
    article;
  return (
    <div className="blog-article__wrapper">
      <BackButtonHeading>{title}</BackButtonHeading>

      <article>{content}</article>
      <div className="blog-article__details-wrapper">
        {!!image_url && <img src={image_url} alt={title} />}
        <div>
          <div className="blog-article__author">
            <small>Author: </small>
            {author.first_name} {author.last_name}
          </div>
          <TagList tags={tags} />
          <div className="blog-article__details">
            <h5>Details</h5>
            <div>
              Count of commas:{" "}
              {typeof countCommas !== "undefined" && countCommas !== null
                ? countCommas
                : countCommasFn(content)}
            </div>
            <div>
              Count of dots:{" "}
              {typeof countDots !== "undefined" && countDots !== null
                ? countDots
                : countDotsFn(content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
