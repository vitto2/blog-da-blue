import Header from "./components/Header.jsx";
import Recents from "./components/recents.jsx";
import AllPosts from "./components/AllPosts.jsx";
import EditPost from "./components/EditPost.jsx";
import ViewPost from "./components/ViewPost.jsx";

export default function App() {
	return (
		<>
			<ViewPost
				titulo="Teste"
				autor="Vitor"
				dataPublicacao="20/02/2025"
				conteudo="Uma trilha sonora pode ser tão aterrorizante quanto uma cena de violência. Neste post, analisamos o papel crucial da música em filmes de terror, desde as composições minimalistas de John Carpenter até trilhas tensas e orquestradas modernas. Um mergulho sonoro nas notas que provocam calafrios. Você sabe quem está por trás dos filmes que mais te assustaram? Conheça os diretores que definiram o gênero do terror, como Wes Craven, John Carpenter, Jordan Peele e Ari Aster. Falamos sobre suas trajetórias, estilo cinematográfico e a influência que exercem sobre a nova geração de cineastas.Você sabe quem está por trás dos filmes que mais te assustaram? Conheça os diretores que definiram o gênero do terror, como Wes Craven, John Carpenter, Jordan Peele e Ari Aster. Falamos sobre suas trajetórias, estilo cinematográfico e a influência que exercem sobre a nova geração de cineastas.
				Você sabe quem está por trás dos filmes que mais te assustaram? Conheça os diretores que definiram o gênero do terror, como Wes Craven, John Carpenter, Jordan Peele e Ari Aster. Falamos sobre suas trajetórias, estilo cinematográfico e a influência que exercem sobre a nova geração de cineastas."
			/>
			{/* <Header />
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
			</div> */}
		</>
	);
}
