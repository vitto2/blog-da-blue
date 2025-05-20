import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";
import { useNavigate } from "react-router-dom";

export default function Post({
	autor,
	titulo,
	data,
	descricao,
	clamped,
	onClick,
}) {
	const navigate = useNavigate();

	function formatarData(dataStr) {
		const [dia, mes, ano] = dataStr.split("/");
		const parsed = new Date(`${ano}-${mes}-${dia}`);

		return parsed.toLocaleDateString("pt-BR", {
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
		<section className="flex flex-col px-[1.5rem] py-[1rem] max-w-[34.25rem] min-w-[9.25rem] border border-[#2500FF] rounded-xl xl:h-[28.12rem] md:max-w-[34.25rem] md:h-[28.125rem] xl:max-w-[34.25rem] xl:max-h-[36.37rem] justify-center">
			<div className="pb-[.75rem] flex justify-between items-center text-[12px] text-[#2500FF] font-bold">
				<div className="flex gap-[.25rem] font-normal ">
					<h4>{autor}</h4>
					<span>•</span>
					<h4>{formatarData(data)}</h4>
				</div>

				<img
					onClick={onSeePostClick}
					src={arrow}
					alt=""
					className="cursor-pointer"
				/>
			</div>

			<div>
				<p className="mb-[.75rem] text-[#2B2B2B] text-[14px] xl:text-[24.96px] xl:font-semibold md:text-[1.56rem] md:font-semibold ">
					{titulo}
				</p>

				<p
					className={`text-[#7A8A9D] leading-[150%] text-[.75rem] ${
						clamped ? "line-clamp-6 md:line-clamp-none" : ""
					}`}>
					{descricao}
				</p>
			</div>

			<div className="mt-auto flex pt-[1.5rem] justify-end gap-2 ">
				<img
					onClick={onEditPostClick}
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
	);
}
