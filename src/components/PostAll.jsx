import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";


export default function PostAll({
	autor,
	titulo,
	data,
	descricao,
	clamped,
	onClick,
	onClickEdit,
	onClickView,
}) {
	function formatarData(dataStr) {
		const [dia, mes, ano] = dataStr.split("/");
		const parsed = new Date(`${ano}-${mes}-${dia}`);

		return parsed.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}

	return (
		<div className="">
			<section className="flex flex-col min-w-[19.5rem] border border-[#2500FF] rounded-lg px-[1.5rem] py-[1rem] md:h-[17.5rem] lg:w-[22.12rem] lg:h-[22.37rem]">
				<div className="pb-[.75rem] flex justify-between items-center text-[.75rem] text-[#2500FF] font-semibold">
					<div className="flex gap-[.25rem] font-normal md:text-[.875rem]">
						<h4>{autor}</h4>
						<span>•</span>
						<h4>{formatarData(data)}</h4>
					</div>

					<img
						onClick={onClickView}
						src={arrow}
						alt=""
						className="cursor-pointer"
					/>
				</div>

				<div>
					<p className="mb-[.75rem] text-[#2B2B2B] text-[.875rem] md:text-[1.56rem] md:font-semibold lg:text-[1.56rem] lg:font-semibold">
						{titulo}
					</p>

					<p
						className={`text-[#7A8A9D] leading-[150%] text-[.75rem] ${
							clamped ? "line-clamp-5" : ""
						}`}>
						{descricao}
					</p>
				</div>

				<div className="mt-auto flex pt-[1.5rem] justify-end gap-2">
					<img
						onClick={onClickEdit}
						src={editIcon}
						alt="Editar"
						className="cursor-pointer"
					/>
					<img
						src={delet}
						alt="Excluir"
						className="cursor-pointer"
						onClick={onClick}
					/>
				</div>
			</section>
		</div>
	);
}
