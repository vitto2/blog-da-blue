import { useEffect, useState } from "react";
import Post from "./Post";
import PostSmall from "./PostSmall";
import Button from "./Button";

function Recents() {
	const [latestPosts, setPosts] = useState([]);

	useEffect(() => {
		fetch("/posts.json")
			.then((res) => res.json())
			.then((data) => {
				const latestThree = data
					.sort((a, b) => {
						const dateA = new Date(
							a.data_publicacao.split("/").reverse().join("-")
						);
						const dateB = new Date(
							b.data_publicacao.split("/").reverse().join("-")
						);
						return dateB - dateA;
					})
					.slice(0, 3);

				setPosts(latestThree);
			})
			.catch((err) => console.error("Erro ao carregar posts:", err));
	}, []);

	if (latestPosts.length < 3) {
		return <p>Carregando posts recentes…</p>;
	}
	return (
		<div>
			<h2 className="font-semibold text-[1.5rem] text-[#2B2B2B] leading-[150%] pb-[2rem]">
				Posts recentes
			</h2>

			<ul className="flex flex-col md:flex-row gap-[2rem]">
				<li>
					{
						<Post
							titulo={latestPosts[0].titulo}
							autor={latestPosts[0].nome}
							data={latestPosts[0].data_publicacao}
							descricao={latestPosts[0].descricao}
						/>
					}
				</li>
				<div className="flex gap-[1rem] md:flex-col">
					<li>
						{
							<PostSmall
								titulo={latestPosts[1].titulo}
								autor={latestPosts[1].nome}
								data={latestPosts[1].data_publicacao}
								descricao={latestPosts[1].descricao}
								clamped
							/>
						}
					</li>
					<li>
						{
							<PostSmall
								titulo={latestPosts[2].titulo}
								autor={latestPosts[2].nome}
								data={latestPosts[2].data_publicacao}
								descricao={latestPosts[2].descricao}
								clamped
							/>
						}
					</li>
				</div>
			</ul>
		</div>
	);
}

export default Recents;
