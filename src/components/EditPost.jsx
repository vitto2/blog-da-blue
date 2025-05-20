// src/components/EditPost.jsx
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePost";
import Header from "./Header";
import ButtonLarge from "./ButtonLarge";
import EmptyState from "./EmptyState";

export default function EditPost() {
	const { id } = useParams();
	const postId = Number(id);
	const navigate = useNavigate();
	const [posts, setPosts] = usePosts();

	const [titulo, setTitulo] = useState("");
	const [autor, setAutor] = useState("");
	const [dataPublicacao, setDataPublicacao] = useState("");
	const [descricao, setDescricao] = useState("");

	const original = posts.find((p) => p.id === postId);

	useEffect(() => {
		if (!original) return;
		setTitulo(original.titulo);
		setAutor(original.nome);

		const [d, m, y] = original.data_publicacao.split("/");
		setDataPublicacao(`${y}-${m}-${d}`);
		setDescricao(original.descricao);
	}, [original]);

	function handleCancel() {
		navigate(-1);
	}

	function handleSave() {
		if (!titulo || !autor || !dataPublicacao || !descricao) {
			alert("Preencha todos os campos antes de salvar.");
			return;
		}

		const formatted = dataPublicacao.split("-").reverse().join("/");
		const updated = {
			id: postId,
			nome: autor,
			titulo,
			data_publicacao: formatted,
			descricao,
		};

		setPosts((prev) => prev.map((p) => (p.id === postId ? updated : p)));
		alert("Post atualizado com sucesso!");
		navigate(-1);
	}

	if (!original) {
		<EmptyState />;
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
						<h4>
							{new Date(
								dataPublicacao.split("-").reverse().join("-")
							).toLocaleDateString("pt-BR", {
								day: "2-digit",
								month: "short",
								year: "numeric",
							})}
						</h4>
					</div>

					<textarea
						rows={20}
						value={descricao}
						onChange={(e) => setDescricao(e.target.value)}
						placeholder="Digite aqui…"
						className="flex-1 resize-none overflow-y-auto rounded-xl border border-[#D7F0F6] bg-[#F6F7FB] p-[1rem] text-[0.75rem] leading-relaxed text-[#2B2B2B] placeholder:text-[#7A8A9D] focus:outline-none focus:ring-2 focus:ring-blue-500 md:text-[1rem] md:text-[#2B2B2B]"
					/>

					<div className="mt-8 flex gap-[0.75rem] md:justify-end">
						<ButtonLarge
							background="bg-[#8C8A99]"
							title="Cancelar"
							onClick={handleCancel}
						/>
						<ButtonLarge
							background="bg-[#2500FF]"
							title="Salvar edições"
							onClick={handleSave}
						/>
					</div>
				</div>
			</main>
		</div>
	);
}