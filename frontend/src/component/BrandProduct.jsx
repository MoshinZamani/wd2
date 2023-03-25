import { useParams } from "react-router-dom";
const BrandProduct = () => {
  const { brand } = useParams();
  return <h1>{brand}</h1>;
};

export default BrandProduct;
