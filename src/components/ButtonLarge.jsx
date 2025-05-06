import { useNavigate } from "react-router-dom";

export default function ButtonLarge({ title, background }) {
	const navigate = useNavigate();
	function onReturnPostClick() {
		navigate(`/`);
	}
	return (
		<>
			<button
				type="button"
				onClick={onReturnPostClick}
				className={`${background} w-[9.37rem] h-[2.81rem] rounded-lg text-[#FFF] font-semibold text-[.875rem] cursor-pointer xl:w-[15.56rem] xl:h-[3.6rem] xl:text-[1.125rem] xl:cursor-pointer`}>
				{title}
			</button>
		</>
	);
}
