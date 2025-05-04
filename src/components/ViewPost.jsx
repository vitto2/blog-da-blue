import React from "react";
import Header from "./Header";
import editIcon from "../assets/img/edit-button_mobile.svg";

export default function ViewPost({
	titulo,
	autor,
	dataPublicacao,
	conteudo,
	onEdit,
}) {
	function formatarData(d) {
		const [dia, mes, ano] = d.split("/");
		return new Date(`${ano}-${mes}-${dia}`).toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	return (
		<div className="flex min-h-screen flex-col">
			<Header returnBtn />

			<main className="flex-1 px-[1.5rem] pt-[2rem] pb-[2rem]">
				<div className="relative mb-[0.75rem]">
					<h1 className="text-xl font-semibold">{titulo}</h1>

					<button
						onClick={onEdit}
						className="absolute right-0 top-[0.125rem]">
						<img src={editIcon} alt="Editar" />
					</button>
				</div>

				<div className="pb-[12px] flex gap-[4px] items-center text-[.75rem] text-[#2500FF] font-semibold">
					<h4 className="font-semibold">{autor}</h4>
					<span>•</span>
					<h4>{formatarData(dataPublicacao)}</h4>
				</div>

				{conteudo
					.split("\n")
					.filter((p) => p.trim().length)
					.map((p, i) => (
						<p
							key={i}
							className="mb-[1rem] text-[0.75rem] leading-relaxed text-[#2B2B2B]">
							{p}
						</p>
					))}
			</main>
		</div>
	);
}
