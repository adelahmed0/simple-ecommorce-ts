import './App.css';
import ProductCard from './components/ProductCard.tsx';
import { formInputsList, productList } from './data/data.ts';
import Modal from './components/ui/Modal.tsx';
import { ChangeEvent, useState } from 'react';
import Button from './components/ui/Button.tsx';
import Input from './components/ui/Input.tsx';
import { IProduct } from './interfaces/interfaces.ts';

function App() {
  const [product, setProduct] = useState<IProduct>({
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  });
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(product);
  };

  const renderProductCard = productList.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputList = formInputsList.map((formInput) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={formInput.id}
          className="text-sm font-medium text-gray-700 mb-[2px]"
        >
          {formInput.label}
        </label>
        <Input
          type="text"
          id={formInput.id}
          name={formInput.name}
          onChange={onChangeHandler}
          value={product[formInput.name]}
        />
      </div>
    );
  });

  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-600" onClick={openModal}>
        Add Product
      </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductCard}
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} title="Add a new product">
        <form className="space-y-3">
          {renderFormInputList}
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button className="bg-gray-300 hover:bg-gray-400">Cancel</Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
