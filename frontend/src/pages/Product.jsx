import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
export default function Product() {
	const { productID } = useParams();
	const { products } = useContext(ShopContext);

	const [productData, setProductData] = useState(false);
	const [image, setImage] = useState("");

	const fetchProductData = async () => {
		products.map((item) => {
			if (item._id === productID) {
				setProductData(item);
				setImage(item.image[0]);
				return null;
			}
		});
	};
	useEffect(() => {
		fetchProductData();
	}, [productID, products]);

	return <div>Products</div>;
}
