import Image from './Image.tsx';
import Button from './ui/Button.tsx';
import { IProduct } from '../interfaces/interfaces.ts';
import { txtSlicer } from '../utils/functions.ts';

interface IProps {
  // Define props here
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description, price, category } = product;

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image imageUrl={imageURL} alt={title} className="rounded-md mb-2" />
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
        <span>{price}</span>
        <Image
          imageUrl={category.imageURL}
          alt={category.name}
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
