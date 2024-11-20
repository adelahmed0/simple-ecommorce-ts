import Image from './Image.tsx';
import Button from './ui/Button.tsx';
import { IProduct } from '../interfaces/interfaces.ts';
import { txtSlicer } from '../utils/functions.ts';

interface IProps {
  // Define props here
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description } = product;

  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image imageUrl={imageURL} alt="product" className="rounded-md mb-2" />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-orange-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-yellow-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-blue-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-purple-500 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-pink-500 rounded-full cursor-pointer" />
      </div>
      <div className="flex items-center justify-between">
        <span>$500,000</span>
        <Image
          imageUrl="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="product"
          className="w-10 h-10 rounded-full object-center"
        />
      </div>
      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button className="bg-indigo-700" onClick={() => console.log('hi')}>
          Edit
        </Button>
        <Button className="bg-red-700">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
