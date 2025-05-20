{
	/* <li>
						{
							<PostSmall
								titulo={latestPosts[1].titulo}
								autor={latestPosts[1].nome}
								data={latestPosts[1].data_publicacao}
								descricao={latestPosts[1].descricao}
								clamped
								onClick={() => handleDelete(latestPosts[1].id)}
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
								onClick={() => handleDelete(latestPosts[2].id)}
							/>
						}
					</li> */
}

//Recentes

// // src/components/Recents.jsx
// import Post from "./Post";
// import PostSmall from "./PostSmall";
// import EmptyState from "./EmptyState";
// import { useNavigate } from "react-router-dom";
// export default function Recents({ posts, setPosts }) {
// 	
// const navigate = useNavigate();

// 	if (posts.length === 0) {
// 		return <EmptyState />;
// 	}

// 	const latestPosts = [...posts]
// 		.sort((a, b) => {
// 			const dateB = new Date(b.data_publicacao.split("/").reverse().join("-"));
// 			const dateA = new Date(a.data_publicacao.split("/").reverse().join("-"));
// 			return dateB - dateA;
// 		})
// 		.slice(0, 3);

// 	function handleDelete(id) {
// 		setPosts((prev) => prev.filter((post) => post.id !== id));
// 	}

// 	const smallPosts = latestPosts.slice(1, 3);

// 	return (
// 		<div>
// 			<h2 className="font-semibold text-[1.5rem] text-[#2B2B2B] leading-[150%] pb-[2rem]">
// 				Posts recentes
// 			</h2>

// 			<ul className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
// 				{latestPosts[0] && (
// 					<Post
// 						titulo={latestPosts[0].titulo}
// 						autor={latestPosts[0].nome}
// 						data={latestPosts[0].data_publicacao}
// 						descricao={latestPosts[0].descricao}
// 						onClick={() => handleDelete(latestPosts[0].id)}
// 					/>
// 				)}

// 				<div className="flex gap-4 flex-row md:flex-col md:justify-between">
// 					{smallPosts.map((post) => (
// 						<PostSmall
// 							key={post.id}
// 							titulo={post.titulo}
// 							autor={post.nome}
// 							data={post.data_publicacao}
// 							descricao={post.descricao}
// 							clamped
// 							onClick={() => handleDelete(post.id)}
// 							onClickEdit={() => navigate(`/editar-post/${post.id}`)}
// 						/>
// 					))}
// 				</div>
// 			</ul>
// 		</div>
// 	);
// }



//edit 

import { useState } from "react";
import Header from "./Header";
import ButtonLarge from "./ButtonLarge";

export default function EditPost({
	titulo = "Top 10 Screams do Cinema",
	autor = "Bruno Almeida",
	dataPublicacao = "30/03/2025",
	descricao:
		descricaoInicial = "Gritos são uma marca registrada do terror. Neste ranking, listamos as 10 performances de grito mais memoráveis da história do cinema de horror. Desde o clássico 'Psycho' até filmes modernos, analisamos a entrega dos atores e como esse elemento sonoro impacta diretamente a experiência do espectador.",
}) {
	
	const [descricao, setDescricao] = useState(descricaoInicial);

	function formatarData(d) {
		const [dia, mes, ano] = d.split("/");
		return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	return (
		<div className="flex min-h-screen w-full flex-col ">
			<Header returnBtn />

			<main className="w-full flex flex-1 flex-col px-[1.5rem] pt-[2rem] pb-8 md:px-[3.1rem] lg:px-[204px] lg:pb-[17.625rem]">
				<div className="flex flex-col w-full max-w-[70.5rem] mx-auto">
					<h1 className="mb-[0.75rem] text-xl font-semibold md:text-[2.18rem]">
						{titulo}
					</h1>

					<div className="mb-[1.5rem] flex items-center gap-[0.25rem] text-xs font-normal text-blue-700 md:text-[14px] md:font-semibold">
						<h4 className="font-semibold">{autor}</h4>
						<span>•</span>
						<h4>{formatarData(dataPublicacao)}</h4>
					</div>

					<textarea
						rows={20}
						value={descricao}
						onChange={(e) => setDescricao(e.target.value)}
						placeholder="Digite aqui…"
						className="flex-1 resize-none overflow-y-auto rounded-xl border border-[#D7F0F6] bg-[#F6F7FB] p-[1rem] text-[0.75rem] leading-relaxed text-[#2B2B2B] placeholder:text-[#7A8A9D] focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-[1rem] md:text-[#2B2B2B]"
					/>

					<div className="mt-8 flex gap-[0.75rem] md:justify-end">
						<ButtonLarge background="bg-[#8C8A99]" title="Cancelar" />
						<ButtonLarge background="bg-[#2500FF]" title="Salvar edições" />
					</div>
				</div>
			</main>
		</div>
	);
}




import React from "react";
import Header from "./Header";
import editIcon from "../assets/img/edit-button_mobile.svg"; // ajuste o path conforme seu projeto
import { useNavigate } from "react-router-dom";

export default function PostView({
	titulo = "Top 10 Screams do Cinema",
	autor = "Bruno Almeida",
	dataPublicacao = "30/03/2025",
	descricao = "Gritos são uma marca registrada do terror. Neste ranking, listamos as 10 performances de grito mais memoráveis da história do cinema de horror. Desde o clássico 'Psycho' até filmes modernos, analisamos a entrega dos atores e como esse elemento sonoro impacta diretamente a experiência do espectador.",
}) {
	const navigate = useNavigate();

	function formatarData(d) {
		if (typeof d !== "string" || !d.includes("/")) return "";
		const [dia, mes, ano] = d.split("/");
		return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	function onEditPostClick() {
		navigate("/editar-post");
	}
	return (
		<div className="flex flex-col w-full min-h-screen">
			<Header returnBtn />

			<main className="w-full px-[1.5rem] pt-[2rem] pb-[2rem] md:px-[3.12rem] lg:px-[12.75rem]">
				<div className="w-full max-w-[70.5rem] mx-auto">
					<div className="relative mb-[0.75rem]">
						<h1 className="text-xl font-semibold md:text-[2.18rem]">
							{titulo}
						</h1>
						<button
							onClick={onEditPostClick}
							className="absolute right-0 top-[0.125rem]">
							<img src={editIcon} alt="Editar" />
						</button>
					</div>

					<div className="pb-[0.75rem] flex gap-[4px] items-center text-[0.75rem] text-[#2500FF] font-semibold md:pb-[2rem] md:text-[0.875rem]">
						<h4 className="font-semibold">{autor}</h4>
						<span>•</span>
						<h4>{formatarData(dataPublicacao)}</h4>
					</div>

					{descricao
						.split("\n")
						.filter((p) => p.trim().length)
						.map((p, i) => (
							<p
								key={i}
								className="mb-[1rem] text-[0.75rem] leading-relaxed text-[#2B2B2B] md:text-[1rem]">
								{p}
							</p>
						))}
				</div>
			</main>
		</div>
	);
}
