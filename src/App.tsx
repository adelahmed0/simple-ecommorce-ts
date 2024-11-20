import './App.css';
import ProductCard from './components/ProductCard.tsx';
import { productList } from './data/data.ts';

function App() {
  const renderProductCard = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <div className="">
      <div className=" m-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md">
        {renderProductCard}
      </div>
    </div>
  );
}

export default App;
