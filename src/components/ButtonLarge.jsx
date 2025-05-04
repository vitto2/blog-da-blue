export default function ButtonLarge({ title, background }) {
	return (
		<>
			<button
				className={`${background} w-[9.375rem] h-[2.8125rem] rounded-lg text-[#FFF] font-semibold text-[.875rem]`}>
				{title}
			</button>
		</>
	);
}
