// src/App.jsx
import Header from "./components/Header.jsx";
import Recents from "./components/Recents.jsx";
import AllPosts from "./components/AllPosts.jsx";
import Button from "./components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { usePosts } from "./hooks/usePost";

export default function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = usePosts();   // único estado compartilhado :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}

  function onCreatePostClick() {
    navigate(`/adicionar-post`);
  }

  return (
    <>
      <Header />
      <div className="w-full px-[1.5rem] xl:px-[12.75rem] flex items-center justify-center ">
        <div className="max-w-[70.5rem]">
          <h1 className="font-figtree text-[2.18rem] font-bold pt-[2rem] pb-[1.5rem] text-[#2B2B2B] leading-[120%] xl:text-[6rem]">
            Blog da Blue
          </h1>
          <Recents posts={posts} setPosts={setPosts} />
          <div className="flex flex-col gap-[2rem]">
            <div className="flex justify-between mt-[2rem] flex-col">
              <div className="flex justify-end mb-[2rem]">
                <Button title="Adicionar post" onClick={onCreatePostClick} />
              </div>
              <div>
                <h2 className="mb-[12px] font-bold text-[.875rem] md:text-[1.5rem] text-[#2B2B2B] leading-[150%]">
                  Todos os posts
                </h2>
              </div>
              <AllPosts posts={posts} setPosts={setPosts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
