import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";
import ArrowIcon from "../assets/img/arrow_outward.svg";


export default function PostSmall({
	autor,
	titulo,
	data,
	descricao,
	clamped,
	onClick,
	onClickEdit,
	onClickView
}) {
	

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
			className="
					w-full
					min-w-0
					min-h-[11.75rem]
					md:max-w-[34.25rem]
					md:min-h-[275px]
					border border-[#2500FF]
					rounded-xl
					px-[.75rem] py-[.5rem]
					md:px-[1.5rem] md:py-[16px]
					lg:px-[1.5rem] lg:py-[1rem]">
			<div className="pb-3 flex  justify-between items-start text-[#2500FF] font-semibold text-[0.625rem]">
				<div className="line-clamp-2 overflow-hidden flex flex-wrap items-center gap-1 leading-tight font-normal md:text-[.875rem]">
					<div className="w-[8.75rem]">
						<span className="whitespace-nowrap">{autor}</span>
						<span className="mx-[1px]">•</span>
						<span className="whitespace-nowrap">{formatarData(data)}</span>
					</div>
				</div>
				<img
					onClick={onClickView}
					src={ArrowIcon}
					alt="seta"
					className="w-3 h-3 mt-[2px] cursor-pointer active:text-[#2500FF] transition-colors"
				/>
			</div>

			<div>
				<p className="mb-3 text-[#2B2B2B] text-[.75rem] line-clamp-1 md:text-[1.56rem] md:font-semibold lg:text-[1.56rem] lg:font-semibold">
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
				<img onClick={onClickEdit} src={editIcon} alt="editar" />
				<img src={delet} alt="deletar" onClick={onClick} />
			</div>
		</section>
	);
}
