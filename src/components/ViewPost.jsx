import React from "react";
import Header from "./Header";
import editIcon from "../assets/img/edit-button_mobile.svg"; // ajuste o path conforme seu projeto

export default function PostView({
	titulo = "Top 10 Screams do Cinema",
	autor = "Bruno Almeida",
	dataPublicacao = "30/03/2025",
	descricao = "Gritos são uma marca registrada do terror. Neste ranking, listamos as 10 performances de grito mais memoráveis da história do cinema de horror. Desde o clássico 'Psycho' até filmes modernos, analisamos a entrega dos atores e como esse elemento sonoro impacta diretamente a experiência do espectador.",
	onEdit,
}) {
	function formatarData(d) {
		if (typeof d !== "string" || !d.includes("/")) return "";
		const [dia, mes, ano] = d.split("/");
		return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	return (
		<div className="flex flex-col w-full min-h-screen">
			<Header returnBtn />

			<main className="w-full px-[1.5rem] pt-[2rem] pb-[2rem] md:px-[3.12rem] xl:px-[12.75rem]">
				<div className="w-full max-w-[70.5rem] mx-auto">
					<div className="relative mb-[0.75rem]">
						<h1 className="text-xl font-semibold md:text-[2.18rem]">
							{titulo}
						</h1>
						<button
							onClick={onEdit}
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
