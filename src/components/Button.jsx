export default function Button({ title, onClick }) {
	return (
		<button
			onClick={onClick}
			type="button"
			className="px-[.75rem] py-[.5rem] xl:w-[12.5625rem] xl:h-[54px] bg-[#2500FF] text-[#fff] rounded-lg  cursor-pointer text-[1.125rem] font-bold">
			{title}
		</button>
	);
}
