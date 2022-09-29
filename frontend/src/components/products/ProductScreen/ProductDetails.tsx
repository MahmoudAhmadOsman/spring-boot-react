import { resolve } from "node:path/win32";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PRODUCT_API from "../../../utils/ApiConfigs";

const ProductDetails = () => {
	const productDetails = "Product Details ";
	const { id } = useParams();

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				// const res = await PRODUCT_API.get(`/products/list/${id}`);
				const res = await PRODUCT_API.get("/products/list/find/" + id);
				setProducts(res.data);

				// setState({ product: res.data });
				// const findAll = setProducts(res?.data?.products);
				// const name = res.data.name;
				// const price = res.data.pricename;
				// const description = res.data.description;

				const { name, price, description } = res.data;
				// console.log(name, price, description);
				console.log(res.data);
			} catch (error) {
				toast.error("Error: unable to load  details!!");
			}
		};
		fetchProduct();
	}, []);

	return (
		<section className="product-details mt-3 mb-3">
			<div className="container">
				<div className="row">
					<div className="col-lg-1">
						<Link to="/products">
							<i
								className="fa fa-chevron-left h2"
								aria-hidden="true"
								title="Back"
							></i>
						</Link>
					</div>
					<div className="col-lg-10 col-xs-12">
						<h2 className="text-success">
							{productDetails} | {id}
						</h2>
						<p>Now showing post {id}</p>
					</div>
					<hr />
				</div>
			</div>
			<div className="container mt-3">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-xs-12">
						<img
							src="https://source.unsplash.com/1600x900/?iphone"
							className="img-fluid"
							alt="Prouct image"
						/>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-12">
						<h1>
							<b>Price: $577.99 </b>
							<span className="text-daner"></span>
						</h1>

						<div className="product-desc">
							<h3 className="text-muted">Description</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
								dolore odio nihil ex quaerat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
