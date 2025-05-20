// src/components/Recents.jsx
import Post from "./Post";
import PostSmall from "./PostSmall";
import EmptyState from "./EmptyState";

export default function Recents({ posts, setPosts }) {
	if (posts.length === 0) {
		return <EmptyState />;
	}

	const latestPosts = [...posts]
		.sort((a, b) => {
			const dateB = new Date(b.data_publicacao.split("/").reverse().join("-"));
			const dateA = new Date(a.data_publicacao.split("/").reverse().join("-"));
			return dateB - dateA;
		})
		.slice(0, 3);

	function handleDelete(id) {
		setPosts((prev) => prev.filter((post) => post.id !== id));
	}

	const smallPosts = latestPosts.slice(1, 3);

	return (
		<div>
			<h2 className="font-semibold text-[1.5rem] text-[#2B2B2B] leading-[150%] pb-[2rem]">
				Posts recentes
			</h2>

			<ul className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
				{latestPosts[0] && (
					<Post
						titulo={latestPosts[0].titulo}
						autor={latestPosts[0].nome}
						data={latestPosts[0].data_publicacao}
						descricao={latestPosts[0].descricao}
						onClick={() => handleDelete(latestPosts[0].id)}
					/>
				)}

				<div className="flex gap-4 flex-row md:flex-col md:justify-between">
					{smallPosts.map((post) => (
						<PostSmall
							key={post.id}
							titulo={post.titulo}
							autor={post.nome}
							data={post.data_publicacao}
							descricao={post.descricao}
							clamped
							onClick={() => handleDelete(post.id)}
						/>
					))}
				</div>
			</ul>
		</div>
	);
}
