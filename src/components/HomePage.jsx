import React, { useEffect, useState } from "react";
import ModalPage from "./ModalPage";
import UserDataShow from "./UserDataShow";
import { CircularProgress } from "@material-ui/core";
const HomePage = () => {
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	const [singleUser, setSingleUser] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	useEffect(() => {
		const CalAPI = async () => {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users",
					{
						method: "GET",
						headers: { "Content-Type": "application/json" },
					}
				);

				if (response.status === 200) {
					const value = await response.json();

					setData(value);
				} else {
					console.log(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
		CalAPI();
	}, []);

	const openModal = (value) => {
		setSingleUser(value);
		setOpen(true);
	};
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
		console.log(event.target.value);
	};

	const filteredData =
		data !== undefined &&
		data !== null &&
		data.length > 0 &&
		data.filter((item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase())
		);

	return (
		<>
			<div className="HomePage">
				<span>All User Data</span>
				<input
					type="text"
					placeholder="Search User Name"
					onChange={handleInputChange}
				/>

				<div className="Header">
					<div>
						<span>ID</span>
					</div>
					<div>
						<span>Name</span>
					</div>
					<div>
						<span>Username</span>
					</div>
					<div>
						<span>Email</span>
					</div>
					<div>
						<span>Details</span>
					</div>
				</div>
				<div className="ALLData">
					{filteredData.length > 0 ? (
						filteredData.map((user) => {
							return (
								<>
									<UserDataShow user={user} openModal={openModal} />
								</>
							);
						})
					) : data.length > 0 ? (
						data.map((user) => {
							return (
								<>
									<UserDataShow user={user} openModal={openModal} />
								</>
							);
						})
					) : (
						<span className="Loading">
							<CircularProgress /> Data loading...
						</span>
					)}
				</div>
			</div>
			{/* <ModalPage open={open} setOpen={setOpen} singleUser={singleUser} /> */}
		</>
	);
};

export default HomePage;
