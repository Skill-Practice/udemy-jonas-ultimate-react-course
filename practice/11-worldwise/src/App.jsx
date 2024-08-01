import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProdiver } from "./contexts/FakeAuthContext";

function App() {
  return (
    <AuthProdiver>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Homepage />}></Route>
            <Route path="product" element={<Product />}></Route>
            <Route path="pricing" element={<Pricing />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="app" element={<AppLayout />}>
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
        </BrowserRouter>
      </CitiesProvider>
    </AuthProdiver>
  );
}

export default App;
