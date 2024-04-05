import React from "react";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1 style={{ color: "green" }}>
				A Computer Science portal for geeks.
			</h1>
			<button onClick={() => navigate(-1)}>
				Go Back Home
			</button>
		</>
	);
};

export default Page1;