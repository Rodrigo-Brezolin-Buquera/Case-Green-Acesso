import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("../pages/Main"));
const FavoritesPage = lazy(() => import("../pages/Favorites"));
const DetailsPage = lazy(() => import("../pages/Details"));
const ErrorPage = lazy(() => import("../pages/Error"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>carregando</p>}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
