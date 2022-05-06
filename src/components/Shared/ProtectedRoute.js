import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute(props) {
	const login = useSelector((state) => state.login.login);
	const location = useLocation();
    let children = props.children
	useEffect(() => {
	}, [login]);
	if (!login) {
		return <Navigate to="/signup" state={{ from: location }} replace />;
	}

	return children;
}

export default ProtectedRoute;