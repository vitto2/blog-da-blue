// src/components/PostView.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePost";
import Header from "./Header";
import editIcon from "../assets/img/edit-button_mobile.svg"; // ajuste o path conforme seu projeto

export default function PostView() {
	const { id } = useParams();
	const postId = Number(id);
	const navigate = useNavigate();
	const [posts] = usePosts();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const found = posts.find((p) => p.id === postId);
		setPost(found);
	}, [posts, postId]);

	function formatarData(d) {
		if (!d || typeof d !== "string" || !d.includes("/")) return "";
		const [dia, mes, ano] = d.split("/");
		return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	function onEditPostClick() {
		navigate(`/editar-post/${postId}`);
	}

	if (!post) {
		return <p>Carregando post…</p>;
	}

	const { titulo, nome: autor, data_publicacao, descricao } = post;

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
						<h4>{formatarData(data_publicacao)}</h4>
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
