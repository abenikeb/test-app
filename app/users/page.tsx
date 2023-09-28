"use client";
import React from "react";
import { useState, useEffect } from "react";

interface user {
	id: string;
	name: string;
}

const ProductsPage = () => {
	const [usersData, setUsersData] = useState([] as Array<user>);
	useEffect(() => {
		(async () => {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const users: user[] = await res.json();
			setUsersData(users);
		})();
	}, []);
	return (
		<>
			<ul>
				{usersData.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</>
	);
};

export default ProductsPage;
