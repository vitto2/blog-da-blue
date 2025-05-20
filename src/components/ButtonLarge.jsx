export default function ButtonLarge({ title, background, onClick }) {
	return (
		<>
			<button
				type="button"
				onClick={onClick}
				className={`${background} w-[9.37rem] h-[2.81rem] rounded-lg text-[#FFF] font-semibold text-[.875rem] cursor-pointer lg:w-[15.56rem] lg:h-[3.6rem] lg:text-[1.125rem] lg:cursor-pointer`}>
				{title}
			</button>
		</>
	);
}
