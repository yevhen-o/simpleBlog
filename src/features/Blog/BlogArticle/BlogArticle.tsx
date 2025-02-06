import { PostInterface } from "@src/types/PostInterface";
import { BackButtonHeading } from "@src/components/BackButtonHeading";
import {
  countCommas as countCommasFn,
  countDots as countDotsFn,
} from "@src/utils";
import "./BlogArticle.scss";
import { TagList } from "@src/components/TagList";

export function BlogArticle({ article }: { article: PostInterface }) {
  const { title, content, author, tags, countCommas, countDots } = article;
  return (
    <div className="blog-article__wrapper">
      <BackButtonHeading>{title}</BackButtonHeading>
      <article>{content}</article>
      <div className="blog-article__author">
        <small>Author: </small>
        {author}
      </div>
      <TagList tags={tags} />
      <div className="blog-article__details">
        <h5>Details</h5>
        <div>
          Count of commas:{" "}
          {typeof countCommas !== "undefined"
            ? countCommas
            : countCommasFn(content)}
        </div>
        <div>
          Count of dots:{" "}
          {typeof countDots !== "undefined" ? countDots : countDotsFn(content)}
        </div>
      </div>
    </div>
  );
}
