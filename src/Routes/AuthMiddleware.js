import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { TheLayout } from "src/containers";

const AuthMiddleware = ({
	component: Component,
	path: Path
}) => (

	<Route
		path={Path}
		render = {props => {
			if (!localStorage.getItem("authUser")) {
				return (
					<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
				);
			};
			
			return (
                    <TheLayout>
						<Component {...props} />
                    </TheLayout>
			);
		}}
	/>
);

export default withRouter(AuthMiddleware);