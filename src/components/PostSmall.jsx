import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";
import ArrowIcon from "../assets/img/arrow_outward.svg";
import { useNavigate } from "react-router-dom";

export default function PostSmall({ autor, titulo, data, descricao, clamped }) {
	const navigate = useNavigate();

	function formatarData(dataStr) {
		const [dia, mes, ano] = dataStr.split("/"); // "21/08/2024"
		const data = new Date(`${ano}-${mes}-${dia}`);

		return data.toLocaleDateString("pt-BR", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	}
	function onSeePostClick() {
		navigate(`/visualizar-post`);
	}

	function onEditPostClick() {
		navigate("/editar-post");
	}

	return (
		<section className="min-h-[11.75rem] min-w-[148px] md:max-w-[34.25rem] xl:max-w-[34.25rem] xl:max-h-[36.37rem] border border-[#2500FF] rounded-xl px-[.75rem] py-[.5rem] xl:px-[1.5rem] xl:py-[1rem] md:px-[24px] md:py-[16px] ">
			<div className="pb-3 flex  justify-between items-start text-[#2500FF] font-semibold text-[0.625rem]">
				<div className="line-clamp-2 overflow-hidden flex flex-wrap items-center gap-1 leading-tight font-normal md:text-[.875rem]">
					<div className="w-[140px]">
						<span className="whitespace-nowrap">{autor}</span>
						<span className="mx-[1px]">•</span>
						<span className="whitespace-nowrap">{formatarData(data)}</span>
					</div>
				</div>
				<img
					onClick={onSeePostClick}
					src={ArrowIcon}
					alt="seta"
					className="w-3 h-3 mt-[2px] cursor-pointer active:text-[#2500FF] transition-colors"
				/>
			</div>

			<div>
				<p className="mb-3 text-[#2B2B2B] text-[.75rem] line-clamp-1 md:text-[1.56rem] md:font-semibold xl:text-[1.56rem] xl:font-semibold">
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
				<img onClick={onEditPostClick} src={editIcon} alt="editar" />
				<img src={delet} alt="deletar" />
			</div>
		</section>
	);
}
