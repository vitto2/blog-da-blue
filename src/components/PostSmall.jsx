import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";

export default function PostSmall({ autor, titulo, data, descricao, clamped }) {
	function formatarData(dataStr) {
		const [dia, mes, ano] = dataStr.split("/"); // "21/08/2024"
		const data = new Date(`${ano}-${mes}-${dia}`);

		return data.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}
	return (
		<section className="max-w-[9.25rem] border border-[#2500FF] rounded-xl px-2 py-3">
			<div className="pb-3 flex justify-between items-start text-[#2500FF] font-semibold text-[0.625rem]">
				<div className="flex flex-wrap items-center gap-1 leading-tight">
					<span className="whitespace-nowrap">{autor}</span>
					<span className="mx-[1px]">•</span>
					<span className="whitespace-nowrap">{formatarData(data)}</span>
				</div>
				<img src={arrow} alt="seta" className="w-3 h-3 mt-[2px]" />
			</div>

			<div>
				<p className="mb-3 text-[#2B2B2B] text-[.75rem] line-clamp-2">
					{titulo}
				</p>
				<p
					className={`text-[#7A8A9D] leading-[150%] text-[.75rem] ${
						clamped ? "line-clamp-3" : ""
					}`}>
					{descricao}
				</p>
			</div>

			<div className="flex pt-6 justify-end gap-2">
				<img src={editIcon} alt="editar" />
				<img src={delet} alt="deletar" />
			</div>
		</section>
	);
}
