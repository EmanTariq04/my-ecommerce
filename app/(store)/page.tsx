import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductsView from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  //console.log(
  //crypto.randomUUID().slice(0, 5) +
  // `>>> Rerendered the home page cache with ${products.length} products and ${getEnabledCategories.length} categories`)

  return (
    <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100 p-4">
      <ProductsView products={products}/>
    </div>
  );
}
