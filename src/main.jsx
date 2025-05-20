import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ViewPost from "./components/ViewPost.jsx";
import AddPost from "./components/AddPost.jsx";
import EditPost from "./components/EditPost.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/adicionar-post", element: <AddPost /> },
	{ path: "/visualizar-post/:id", element: <ViewPost /> },
	{ path: "/editar-post/:id", element: <EditPost /> },
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
