import './App.css';
import ProductCard from './components/ProductCard.tsx';
import { colors, formInputsList, productList } from './data/data.ts';
import Modal from './components/ui/Modal.tsx';
import { ChangeEvent, FormEvent, useState } from 'react';
import Button from './components/ui/Button.tsx';
import Input from './components/ui/Input.tsx';
import { IProduct } from './interfaces/interfaces.ts';
import { productValidation } from './validation/valiidation.ts';
import ErrorMessage from './components/ErrorMessage.tsx';
import CircleColor from './components/CircleColor.tsx';
import { v4 as uuid } from 'uuid';

function App() {
  const defaultProductObj = {
    title: '',
    description: '',
    imageURL: '',
    price: '',
    colors: [],
    category: {
      name: '',
      imageURL: '',
    },
  };
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [errors, setErrors] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });
  const [isOpen, setIsOpen] = useState(false);
  const [tempColor, setTempColor] = useState<string[]>([]);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { title, description, imageURL, price } = product;
    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === '') &&
      Object.values(errors).every((value) => value === '');

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prevState) => [
      {
        ...product,
        id: uuid(),
        colors: tempColor,
      },
      ...prevState,
    ]);

    setProduct(defaultProductObj);
    setTempColor([]);
    closeModal();
  };

  const renderProductCard = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  const renderFormInputList = formInputsList.map((formInput) => {
    return (
      <div className="flex flex-col" key={formInput.id}>
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
        <ErrorMessage message={errors[formInput.name]} />
      </div>
    );
  });
  const renderProductColors = colors.map((color) => {
    return (
      <CircleColor
        key={color}
        color={color}
        onClick={() => {
          if (tempColor.includes(color)) {
            setTempColor((prevState) =>
              prevState.filter((tempColor) => tempColor !== color),
            );
            return;
          }
          {
            setTempColor((prevState) => [...prevState, color]);
          }
        }}
      />
    );
  });
  console.log(tempColor);
  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 hover:bg-indigo-600" onClick={openModal}>
        Add Product
      </Button>
      <div className=" m-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md">
        {renderProductCard}
      </div>
      <Modal closeModal={closeModal} isOpen={isOpen} title="Add a new product">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputList}
          <div className="flex items-center flex-wrap space-x-2">
            {tempColor.map((color) => (
              <span
                key={color + Math.random()}
                style={{ backgroundColor: color }}
                className={`p-1 mr-1 mb-1 text-sm rounded-md text-white`}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            {renderProductColors}
          </div>
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-700 hover:bg-indigo-600">
              Submit
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-400"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
