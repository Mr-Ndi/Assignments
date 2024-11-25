import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productID } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing details for product ID: {productID}</p>
    </div>
  );
}

export default ProductDetails;
