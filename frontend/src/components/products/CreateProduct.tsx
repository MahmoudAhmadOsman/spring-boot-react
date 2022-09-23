import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PRODUCT_API from "../../utils/ApiConfigs";
import { toast } from "react-toastify";

const CreateProduct = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const navigate = useNavigate();

	const updateName = (e: any) => {
		setName(e.target.value);
	};

	const updatePrice = (e: any) => {
		setPrice(e.target.value);
	};

	const updateDescription = (e: any) => {
		setDescription(e.target.value);
	};

	const submit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		PRODUCT_API.post("/products/create", {
			name: name,
			price: price,
			description: description,
		})
			.then(() => {
				toast.success("Procuct created successfully!!!");
				navigate("/create");
			})
			.catch((error) => {
				toast.error("Error: unable to create new product!!");
				// console.log(error.response.data.message);
			});

		setName("");
		setPrice("");
		setDescription("");
	};

	return (
		<section className="cp-container ">
			<div className="container mt-3 shadow-lg p-3 mb-5 bg-body rounded">
				<h1 className="text-success">Add New Product</h1> <hr />
				<form className="m-3" onSubmit={submit}>
					<div className="row">
						<div className="col-md-10">
							<div className="input-group mb-3">
								<span className="input-group-text">Product Name</span>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Enter product name"
									required
									id="name"
									value={name}
									onChange={updateName}
								/>
							</div>
						</div>
						<div className="col-md-2">
							<div className="input-group mb-3">
								<span className="input-group-text">$</span>
								<input
									type="text"
									className="form-control form-control-lg"
									placeholder="Price"
									required
									id="price"
									value={price}
									onChange={updatePrice}
								/>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="com-md-12">
							<div className="input-group mb-3">
								<span className="input-group-text">description</span>
								<textarea
									className="form-control form-control-lg"
									cols={30}
									rows={10}
									placeholder="Product description"
									required
									id="description"
									value={description}
									onChange={updateDescription}
								/>
							</div>
						</div>
					</div>

					<button type="submit" className="btn btn-primary btn-lg mb-4">
						Submit
					</button>
				</form>
			</div>{" "}
		</section>
	);
};

export default CreateProduct;
