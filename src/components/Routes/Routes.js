import React  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Work from '../Work';
import Lander from '../Lander';


const Routes = () => (
	<Router>
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/work/">Works</Link>
					</li>
					<li>
						<Link to="/users/">Users</Link>
					</li>
				</ul>
			</nav>

			<Route path="/" exact component={Lander} />
			<Route path="/work/" component={Work} />
			{/* <Route path="/users/" component={Users} /> */}
		</div>
		
	</Router>
	
);

export default Routes;