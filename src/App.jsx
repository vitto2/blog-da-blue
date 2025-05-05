import Header from "./components/Header.jsx";
import Recents from "./components/recents.jsx";
import AllPosts from "./components/AllPosts.jsx";


export default function App() {
	return (
		<>
			<Header />
			<div className="px-[24px]">
				<div className="w-full">
					<h1 className="font-figtree text-[2.1875rem] font-bold pt-[2rem] pb-[1.5rem]  text-[#2B2B2B] leading-[120%] ">
						Blog da Blue
					</h1>
					<Recents />
					<h2 className="font-semibold text-[.875rem] text-[#2B2B2B] leading-[150%] pb-[.75rem] pt-[12px]">
						Todos os posts
					</h2>
					<AllPosts />
				</div>
			</div>
		</>
	);
}
