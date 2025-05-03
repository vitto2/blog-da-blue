import { useEffect, useState } from "react";
import Post from "./Post";
import Button from "./Button";

function Recents() {
	const [latestPosts, setLatestPosts] = useState([]);

	useEffect(() => {
		fetch("/posts.json")
			.then((res) => res.json())
			.then((data) => {
				// Ordena os posts pela data (mais recente primeiro)
				const sorted = data.sort((a, b) => {
					const dateA = new Date(
						a.data_publicacao.split("/").reverse().join("-")
					);
					const dateB = new Date(
						b.data_publicacao.split("/").reverse().join("-")
					);
					return dateB - dateA;
				});

				// Seleciona os 3 primeiros (mais recentes)
				setLatestPosts(sorted.slice(0, 3));
			})
			.catch((err) => console.error("Erro ao carregar posts:", err));
	}, []);

	return (
		<div className="px-[24px]">
			<h2 className="font-semibold text-[.875rem] text-[#2B2B2B] leading-[150%] pb-[.75rem]">
				Posts recentes
			</h2>

			<ul className="grid grid-cols-2 auto-rows-auto gap-4">
				{latestPosts.map((post, index) => (
					<li key={index} className={index === 0 ? "col-span-2" : "col-span-1"}>
						<Post
							titulo={post.titulo}
							autor={post.nome}
							data={post.data_publicacao}
							descricao={post.descricao}
							clamped={index !== 0}
						/>
					</li>
				))}
			</ul>
			<div className="w-full flex justify-end">
				<Button title="Adicionar post" />
			</div>
		</div>
	);
}

export default Recents;
