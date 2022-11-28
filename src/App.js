import {Navigate, Route, Routes} from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ProductDetail from './components/ProductDetail';
import Products from './pages/Product';
import Welcome from './pages/Welcome';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Routes>
					<Route path="/" element={<Navigate replace to="/welcome" />} />
					<Route path="/welcome" element={<Welcome />}>
						<Route path="new-user" element={<p>Welcome, new user!</p>}></Route>
					</Route>
					<Route path="/products" element={<Products />} />
					<Route
						path="/products/:productId"
						element={<ProductDetail />}></Route>
				</Routes>
			</main>
		</div>
	);
}

export default App;
