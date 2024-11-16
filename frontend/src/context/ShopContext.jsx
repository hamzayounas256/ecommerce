import { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [cartItems, setCartItems] = useState({});
	const currency = "$";
	const deliveryFee = "10";

	const addToCart = async (itemId, size) => {
		let cartData = structuredClone(cartItems);

		if (!size) {
			toast.error("Select product size");
			return;
		}
		if (cartData[itemId]) {
			if (cartData[itemId][size]) {
				cartData[itemId][size] += 1;
			} else {
				cartData[itemId][size] = 1;
			}
		} else {
			cartData[itemId] = {};
			cartData[itemId][size] = 1;
		}
		setCartItems(cartData);
	};

	const getCartCount = () => {
		let totalCount = 0;
		for (const items in cartItems) {
			for (const item in cartItems[items]) {
				const count = cartItems[items][item];
				if (count > 0) {
					totalCount += count;
				}
			}
		}
		return totalCount;
	};

	const updateQuantity = async (itemId, size, quantity) => {
		let cartData = structuredClone(cartItems);
		cartData[itemId][size] = quantity;
		setCartItems(cartData);
	};

	const getCartAmount = () => {
		let totalAmount = 0;
		for (const items in cartItems) {
			const itemInfo = products.find((p) => p._id === items);
			for (const item in cartItems[items]) {
				const quantity = cartItems[items][item];
				if (quantity > 0) {
					const price = itemInfo.price;
					totalAmount += price * quantity;
				}
			}
		}
		return totalAmount;
	};

	const value = {
		products,
		currency,
		deliveryFee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		addToCart,
		getCartCount,
		updateQuantity,
		getCartAmount,
	};

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	);
};

export default ShopContextProvider;
