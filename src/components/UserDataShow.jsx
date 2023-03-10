import { Button, Tooltip } from "@material-ui/core";
import React from "react";

const UserDataShow = ({ user, openModal }) => {
	return (
		<>
			<div className="Header DataHeader">
				<div>
					<span>{user.id}</span>
				</div>
				<div>
					<Tooltip title={user.name}>
						<span>{user.name}</span>
					</Tooltip>
				</div>
				<div>
					<span>{user.username}</span>
				</div>
				<div>
					<Tooltip title={user.email}>
						<span style={{ color: "#2F58CD" }}>{user.email}</span>
					</Tooltip>
				</div>
				<div>
					<Tooltip title="Open">
						<Button
							variant="contained"
							className="openmodal"
							onClick={() => openModal(user)}
						>
							Open
						</Button>
					</Tooltip>
				</div>
			</div>
		</>
	);
};
export default UserDataShow;
