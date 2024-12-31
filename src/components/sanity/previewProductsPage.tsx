import ProductsView from "../views/products";
import { Product, productsQuery } from "~/sanity/lib";
import { useLiveQuery } from "next-sanity/preview";

export const PreviewProductsPage = ({ products }: { products: Product[] }) => {
  const [updatedProducts] = useLiveQuery<Product[]>(products, productsQuery);

  return <ProductsView products={updatedProducts} />;
};
