import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";

export default function PostAll({ autor, titulo, data, descricao, clamped }) {
	function formatarData(dataStr) {
		const [dia, mes, ano] = dataStr.split("/"); // ex.: "21/08/2024"
		const parsed = new Date(`${ano}-${mes}-${dia}`);

		return parsed.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	return (
		<section className="max-w-[19.5rem] min-w-[9.25rem] border border-[#2500FF] rounded-xl px-[1.5rem] py-[1rem] xl:max-w-[354px] xl:max-h-[350px]">
			<div className="pb-[12px] flex justify-between items-center text-[.75rem] text-[#2500FF] font-semibold">
				<div className="flex gap-[4px] font-normal">
					<h4>{autor}</h4>
					<span>•</span>
					<h4>{formatarData(data)}</h4>
				</div>

				<img src={arrow} alt="" />
			</div>

			{/* Corpo */}
			<div>
				<p className="mb-[12px] text-[#2B2B2B] text-[.875rem]">{titulo}</p>

				<p
					className={`text-[#7A8A9D] leading-[150%] text-[.75rem] ${
						clamped ? "line-clamp-5" : ""
					}`}>
					{descricao}
				</p>
			</div>

			{/* Ações */}
			<div className="flex pt-[1.5rem] justify-end gap-2">
				<img src={editIcon} alt="Editar" />
				<img src={delet} alt="Excluir" />
			</div>
		</section>
	);
}
