import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
export default function Product() {
	const { productID } = useParams();
	const { products } = useContext(ShopContext);

	const [productData, setProductData] = useState(false);

	const fetchProductData = async () => {};
	useEffect(() => {
		fetchProductData();
	}, [productID, products]);

	return <div>Products</div>;
}
