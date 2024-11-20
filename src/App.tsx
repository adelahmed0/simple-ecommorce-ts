import './App.css';
import ProductCard from './components/ProductCard.tsx';
import { productList } from './data/data.ts';

function App() {
  const renderProductCard = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <main className="container mx-auto">
      <div className=" m-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductCard}
      </div>
    </main>
  );
}

export default App;
