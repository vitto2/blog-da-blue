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
	// estado para o textarea
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

			<main className="w-full flex flex-1 flex-col px-[1.5rem] pt-[2rem] pb-8 md:px-[3.1rem] xl:px-[204px] xl:pb-[17.625rem]">
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
