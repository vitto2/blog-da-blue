import React from "react";
import arrowL from "../assets/img/arrow-left.svg";
import arrowR from "../assets/img/arrow-right.svg";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

	return (
		<nav className="flex items-center justify-between mt-8 mb-[4.375rem] text-[#7A8A9D] ">
			<div className="flex items-center gap-[.5rem]">
				<img src={arrowL} alt="" />

				<button
					onClick={() => onPageChange(currentPage - 1)}
					disabled={currentPage === 1}
					className="xl:pr-[21.125rem] md:pr-[3.125rem] py-1 text-sm disabled:opacity-40 text-[.75rem] md:text-[.875rem] xl:md:text-[1rem]">
					Anterior
				</button>
			</div>

			{pages.map((page) => (
				<button
					key={page}
					onClick={() => onPageChange(page)}
					aria-current={page === currentPage ? "page" : undefined}
					className={`w-8 h-8 grid place-content-center text-sm transition ${
						page === currentPage
							? "bg-[#F9F5FF] text-[#2500FF] rounded"
							: " hover:bg-gray-100"
					}`}>
					{page}
				</button>
			))}

			<div className="flex items-center gap-[.5rem]">
				<button
					onClick={() => onPageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
					className="xl:pl-[21.125rem] md:pr-[3.125rem] py-1 text-sm disabled:opacity-40 text-[.75rem] md:text-[.875rem] xl:md:text-[1rem]">
					Próximo
				</button>
				<img src={arrowR} alt="" />
			</div>
		</nav>
	);
}
