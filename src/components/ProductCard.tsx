import Image from './Image.tsx';
import Button from './ui/Button.tsx';
import { IProduct } from '../interfaces/interfaces.ts';
import { txtSlicer } from '../utils/functions.ts';
import CircleColor from './CircleColor.tsx';

interface IProps {
  // Define props here
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, imageURL, description, price, category, colors } = product;
  const renderColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
      <Image
        imageUrl={imageURL}
        alt={title}
        className="rounded-md h-full mb-2"
      />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>
      <div className="flex items-center flex-wrap space-x-2">
        {renderColors}
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
        <Button className="bg-indigo-500" onClick={() => console.log('hi')}>
          Edit
        </Button>
        <Button className="bg-red-500">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
