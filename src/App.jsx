import Header from "./components/Header.jsx";
import Recents from "./components/recents.jsx";
export default function App() {
	return (
		<div>
			<Header />
			<div className="w-full">
				<h1 className="font-figtree text-[2.1875rem] font-bold pt-[2rem] pb-[1.5rem] pl-[24px] text-[#2B2B2B] leading-[120%] ">
					Blog da Blue
				</h1>
				<Recents />
			</div>
		</div>
	);
}
