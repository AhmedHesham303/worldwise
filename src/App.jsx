import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
const BASE_URL = "http://localhost:9000";
function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was abn error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>

            <Route
              path="cities"
              element={<CityList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route
              path="countries"
              element={<CountriesList cities={cities} isLoading={isLoading} />}
            ></Route>
            <Route path="form" element={<p>form</p>}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
