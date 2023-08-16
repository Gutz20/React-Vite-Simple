import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Layout,
  NotFound,
  Password,
  ProtectedRoute,
  Recovery,
  Reset,
} from "./components";
import {
  AboutPage,
  ContactPage,
  CoveragePage,
  ForumPage,
  HomePage,
  LoginPage,
  PlanPage,
  ProfilePage,
  ReposPage,
  SignupPage,
} from "./pages";
import { useAuthStore } from "./store";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<NotFound />}>
            <Route index={true} element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/password" element={<Password />} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/reset" element={<Reset />} />

            <Route element={<ProtectedRoute isAllowed={isAuth} />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="/forum" element={<ForumPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/plans" element={<PlanPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coverage" element={<CoveragePage />} />
            <Route path="/repos" element={<ReposPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
