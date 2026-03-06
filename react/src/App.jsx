import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <div className="products">
        <ProductCard
          image="https://via.placeholder.com/150"
          name="Rolex Watch"
          price="500"
          inStock={true}
          isNew={true}
        />

        <ProductCard
          image="https://via.placeholder.com/150"
          name="Casio Watch"
          price="120"
          inStock={false}
          isNew={false}
        />

        <ProductCard
          image="https://via.placeholder.com/150"
          name="Apple Watch"
          price="700"
          inStock={true}
          isNew={true}
        />

        <ProductCard
          image="https://via.placeholder.com/150"
          name="Omega Watch"
          price="650"
          inStock={true}
          isNew={false}
        />

        <ProductCard
          image="https://via.placeholder.com/150"
          name="Seiko Watch"
          price="400"
          inStock={false}
          isNew={true}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;