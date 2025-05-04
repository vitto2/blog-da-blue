export default function InputText({
	label,
	placeholder,
	value,
	onChange,
	type,
}) {
	return (
		<div className="flex flex-col pb-[1rem]">
			<label className="font-semibold text-[.875rem] pb-[.5rem]">{label}</label>
			<input
				className="text-[.875rem] text-[#7A8A9D] border px-[1rem] py-[.75rem] rounded-xl border-[#D7F0F6] bg-[#F6F7FB]"
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
