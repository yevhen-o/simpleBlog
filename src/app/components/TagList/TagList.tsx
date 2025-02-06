import { Tag } from "../Tag";
import "./TagList.scss";

export function TagList({ tags }: { tags: string[] | undefined }) {
  if (!tags) return null;
  return (
    <div className="tags-list__wrapper">
      <h5>List of tags:</h5>
      {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </div>
  );
}
