import clsx from "clsx";

export default function InputText({
	label,
	placeholder,
	value,
	onChange,
	type,
	hasError,
}) {
	return (
		<div className="flex flex-col pb-[1rem]">
			<label className="font-semibold text-[.875rem] pb-[.5rem]">
				{label}
				<span className="text-[#D32F2F] ml-1">*</span>
			</label>
			<input
				className={clsx(
					"xl:w-[31.25rem] text-[1rem] text-[#2B2B2B] px-[1rem] py-[.75rem] rounded-xl bg-[#F6F7FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2500FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F7FB]",
					hasError ? "border-2 border-[#D32F2F]" : "border border-[#D7F0F6]"
				)}
				required
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
