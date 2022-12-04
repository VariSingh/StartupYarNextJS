import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <h1>{productId}</h1>
      <div>Product Details</div>
      <div>Product links</div>
    </>
  );
};
export default ProductDetails;
