import { Career, Category, careersQuery, categoryQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";
import CareersView from "../views/careers";

export const PreviewCareersPage = ({
  data,
  category,
}: {
  data: Career[];
  category: Category[];
}) => {
  const [updatedData] = useLiveQuery<Career[]>(data, careersQuery);
  const [updatedCategory] = useLiveQuery<Category[]>(category, categoryQuery);

  return <CareersView data={updatedData} category={updatedCategory} />;
};
