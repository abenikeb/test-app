import React from "react";
interface user {
	id: string;
	name: string;
}

const ProductsPage = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users", {
		cache: "no-store",
	});
	const users: user[] = await res.json();
	return (
		<>
			<ul>
				{users.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default ProductsPage;
