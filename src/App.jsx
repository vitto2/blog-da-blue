import Header from "./components/Header.jsx";
import Recents from "./components/Recents.jsx";
import AllPosts from "./components/AllPosts.jsx";
import Button from "./components/Button.jsx";
import ViewPost from "./components/ViewPost.jsx";

export default function App() {
	return (
		<>
			<Header />
			<div className="px-[1.5rem] xl:px-[12.75rem] md:px-[50px] ">
				<div className="w-full">
					<h1 className="font-figtree text-[2.18rem] font-bold pt-[2rem] pb-[1.5rem]  text-[#2B2B2B] leading-[120%] xl:text-[96px] ">
						Blog da Blue
					</h1>
					<Recents />
					<div className="flex flex-col gap-[2rem]">
						<div className="flex justify-between items-center mt-[4.68rem]">
							<h2 className="font-semibold text-[.875rem] md:text-[1.5rem] text-[#2B2B2B] leading-[150%]">
								Todos os posts
							</h2>

							<Button title="Adicionar post" />
						</div>

						<AllPosts />
					</div>
				</div>
			</div>
		</>
	);
}
