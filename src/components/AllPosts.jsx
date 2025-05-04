import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function AllPosts() {
	const [Posts, setPosts] = useState([]);

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

	return (
		<div>
			<ul className="flex flex-col gap-[.75rem]">
				{Posts.map((post, index) => (
					<li key={index}>
						<Post
							titulo={post.titulo}
							autor={post.nome}
							data={post.data_publicacao}
							descricao={post.descricao}
							clamped={false}
						/>
					</li>
				))}
			</ul>
            
		</div>
	);
}
