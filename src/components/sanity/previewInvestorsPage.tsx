import { IBlog, blogQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import BlogView from "../views/blog";

interface Props {
  data: IBlog[];
}

export const PreviewBlogPage = ({ data: blogData }: Props) => {
  const [updatedBlog] = useLiveQuery<IBlog[]>(blogData, blogQuery);

  return <BlogView data={updatedBlog} />;
};
