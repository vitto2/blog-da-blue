import React, { useEffect, useState } from "react";
import PostAll from "./PostAll";
import Pagination from "./Pagination";
import Button from "./Button";

export default function AllPosts() {
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 3;

	useEffect(() => {
		fetch("/posts.json")
			.then((res) => res.json())
			.then((data) => {
				const sorted = data.sort((a, b) => {
					const dateA = new Date(
						a.data_publicacao.split("/").reverse().join("-")
					);
					const dateB = new Date(
						b.data_publicacao.split("/").reverse().join("-")
					);
					return dateB - dateA;
				});
				setPosts(sorted);
			})
			.catch((err) => console.error("Erro ao carregar posts:", err));
	}, []);

	const totalPages = Math.ceil(posts.length / pageSize);
	const currentPosts = posts.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);

	return (
		<div>
			<ul className="flex flex-col gap-[.75rem] md:flex-row justify-between">
				{currentPosts.map((post, index) => (
					<li key={index}>
						<PostAll
							titulo={post.titulo}
							autor={post.nome}
							data={post.data_publicacao}
							descricao={post.descricao}
							clamped
						/>
					</li>
				))}
			</ul>
			{totalPages > 1 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={(page) => {
						if (page < 1 || page > totalPages) return;
						setCurrentPage(page);
					}}
				/>
			)}
		</div>
	);
}
