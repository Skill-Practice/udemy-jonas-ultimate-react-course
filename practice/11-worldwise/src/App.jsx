import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProdiver } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import Login from "./pages/Login";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

// dist/index.html                   0.48 kB │ gzip:   0.32 kB
// dist/assets/index-ed37b46e.css   29.96 kB │ gzip:   5.08 kB
// dist/assets/index-8fbb5a6b.js   509.36 kB │ gzip: 148.30 kB

function App() {
  return (
    <AuthProdiver>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />}></Route>
              <Route path="product" element={<Product />}></Route>
              <Route path="pricing" element={<Pricing />}></Route>
              <Route path="login" element={<Login />}></Route>

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="cities" />}
                  // element={<CityList cities={cities} isLoading={isLoading} />}
                />
                <Route
                  path="cities"
                  element={<CityList />}
                  // element={<CityList cities={cities} isLoading={isLoading} />}
                />
                <Route path="cities/:id" element={<City />} />
                <Route
                  path="countries"
                  element={<CountryList />}
                  // element={<CountryList cities={cities} isLoading={isLoading} />}
                />
                <Route path="form" element={<Form />} />
              </Route>

              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProdiver>
  );
}

export default App;
