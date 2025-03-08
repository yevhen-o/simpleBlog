import { Tag } from "../Tag";
import "./TagList.scss";

export function TagList({ tags }: { tags: string[] | undefined }) {
  if (!tags) return null;
  return (
    <div className="tags-list__wrapper">
      <strong>List of tags:</strong>
      {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
    </div>
  );
}
