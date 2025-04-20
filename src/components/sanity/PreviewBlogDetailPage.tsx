import { IBlog, blogDetailsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import { BlogDetailsView } from "../views/blog/detail";

export const PreviewBlogDetailPage = ({ data }: { data: IBlog }) => {
  const [updatedData] = useLiveQuery<IBlog>(data, blogDetailsQuery, {
    slug: data?.slug,
  });

  return <BlogDetailsView article={updatedData} />;
};

export default PreviewBlogDetailPage;
