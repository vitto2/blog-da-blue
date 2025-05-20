import arrow from "../assets/img/arrow_outward.svg";
import editIcon from "../assets/img/edit-button_mobile.svg";
import delet from "../assets/img/delete-button.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function PostAll({ autor, titulo, data, descricao, clamped, onClick }) {
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
		<div className="">
			<section className="flex flex-col min-w-[19.5rem] border border-[#2500FF] rounded-xl px-[1.5rem] py-[1rem] md:h-[17.5rem] xl:w-[22.12rem] xl:h-[22.37rem]">
				<div className="pb-[.75rem] flex justify-between items-center text-[.75rem] text-[#2500FF] font-semibold">
					<div className="flex gap-[.25rem] font-normal md:text-[.875rem]">
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
					<p className="mb-[.75rem] text-[#2B2B2B] text-[.875rem] md:text-[1.56rem] md:font-semibold xl:text-[1.56rem] xl:font-semibold">
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
						onClick={onEditPostClick}
						src={editIcon}
						alt="Editar"
						className="cursor-pointer"
					/>
					<img src={delet} alt="Excluir" className="cursor-pointer" onClick={onClick} />
				</div>
			</section>
		</div>
	);
}
