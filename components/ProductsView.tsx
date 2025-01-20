import { ProductType } from "@/sanity.types";

interface ProductsViewProps {
  products: ProductType[];
}

const ProductsView = ({ products }: ProductsViewProps) => {
  return (
    <div className="flex flex-col">
      {/* {categories} */}
      <div className="w-full sm:w-[200px]">
        {/* <CategorySelectorComponent categories={categories} /> */}
      </div>

      <div className="flex-1">
        <div>
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
