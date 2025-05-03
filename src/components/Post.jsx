import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";

export default function Post({ autor, titulo, data, descricao, clamped }) {
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
		<section
			className={
				"max-w-[19.5rem] min-w-[148px] border border-[#2500FF] rounded-xl px-[1.5rem] py-[1rem]"
			}>
			<div className="pb-[12px] flex justify-between items-center text-[.75rem] text-[#2500FF] font-semibold">
				<div className="flex gap-[4px]">
					<h4>{autor}</h4>
					<p>•</p>
					<h4>{formatarData(data)}</h4>
				</div>

				<div>
					<img src={arrow} alt="" />
				</div>
			</div>
			<div>
				<p className="mb-[12px] text-[#2B2B2B] text-[.875rem] line-clamp-2">
					{titulo}
				</p>
				<p
					className={`text-[#7A8A9D] leading-[150%] text-[.75rem] ${
						clamped ? "line-clamp-3" : ""
					}`}>
					{descricao}
				</p>
			</div>
			<div className="flex pt-[1.5rem] justify-end">
				<img src={editIcon} alt="" />
				<img src={delet} alt="" />
			</div>
		</section>
	);
}
