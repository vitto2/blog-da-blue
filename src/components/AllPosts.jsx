// src/components/AllPosts.jsx
import { useState } from "react";
import PostAll from "./PostAll";
import Pagination from "./Pagination";
import EmptyState from "./EmptyState";

export default function AllPosts({ posts, setPosts }) {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 3;

	if (posts.length === 0) {
		return <EmptyState />;
	}

	const sorted = [...posts].sort((a, b) => {
		const dateB = new Date(b.data_publicacao.split("/").reverse().join("-"));
		const dateA = new Date(a.data_publicacao.split("/").reverse().join("-"));
		return dateB - dateA;
	});

	const totalPages = Math.ceil(sorted.length / pageSize);
	const currentPosts = sorted.slice(
		(currentPage - 1) * pageSize,
		currentPage * pageSize
	);

	function handleDelete(id) {
		setPosts((prev) => prev.filter((post) => post.id !== id));
	}

	return (
		<div className="mb-[5rem]">
			<ul className="flex flex-col gap-[.75rem] md:flex-row xl:gap-[2rem] xl:justify-between">
				{currentPosts.map((post) => (
					<li key={post.id}>
						<PostAll
							titulo={post.titulo}
							autor={post.nome}
							data={post.data_publicacao}
							descricao={post.descricao}
							clamped
							onClick={() => handleDelete(post.id)}
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
