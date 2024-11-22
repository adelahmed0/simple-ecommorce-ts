import './App.css';
import ProductCard from './components/ProductCard.tsx';
import { productList } from './data/data.ts';
import Modal from './components/ui/Modal.tsx';
import { useState } from 'react';
import Button from './components/ui/Button.tsx';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  // function openModal() {
  //   setIsOpen(true);
  // }

  const renderProductCard = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <main className="container mx-auto">
      <div className=" m-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductCard}
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen}>
        <div className="flex items-center space-x-2">
          <Button className="bg-indigo-700 hover:bg-indigo-600">Submit</Button>
          <Button className="bg-gray-300 hover:bg-gray-400">Cancel</Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
