import { Dialog, Tooltip } from "@material-ui/core";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const ModalPage = ({ open, setOpen, singleUser }) => {
	return (
		<>
			<Dialog open={open} onClose={() => setOpen(false)}>
				<div className="ModalData">
					<div className="ModalHeader">
						<span>User Details</span>
						<Tooltip title="Close">
							<CloseIcon
								style={{ cursor: "pointer" }}
								onClick={() => setOpen(false)}
							/>
						</Tooltip>
					</div>
					<div className="child">
						<div>
							<span>Name</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.name}
							</span>
						</div>
					</div>
					<div className="child">
						<div>
							<span>Username</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.username}
							</span>
						</div>
					</div>
					<div className="child">
						<div>
							<span>Email</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.email}
							</span>
						</div>
					</div>
					<div className="child">
						<div>
							<span>Phone</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.phone}
							</span>
						</div>
					</div>
					<div className="child">
						<div>
							<span>Address</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							{singleUser !== undefined && singleUser !== null && (
								<span>
									{singleUser.address.street},{singleUser.address.city},
									{singleUser.address.zipcode}
								</span>
							)}
						</div>
					</div>
					<div className="child">
						<div>
							<span>Website</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.website}
							</span>
						</div>
					</div>
					<div className="child">
						<div>
							<span>Company Name</span>
						</div>
						<div>
							<span>:</span>
						</div>
						<div>
							<span>
								{singleUser !== undefined &&
									singleUser !== null &&
									singleUser.company.name}
							</span>
						</div>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default ModalPage;
