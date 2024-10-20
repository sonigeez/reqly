import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Counter = lazy(() => import("./feat/counter/counter"));
const About = lazy(() => import("./feat/about/about"));
const Contact = lazy(() => import("./feat/contact/contact"));

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Counter</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path="/" element={<Counter />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
