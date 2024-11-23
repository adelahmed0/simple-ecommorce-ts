export const productValidation = (product: {
  title: string;
  price: string;
  description: string;
  imageURL: string;
}) => {
  let errors: {
    title: string;
    price: string;
    description: string;
    imageURL: string;
  } = {
    title: '',
    price: '',
    description: '',
    imageURL: '',
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = 'Product title must be between 10 and 80 characters';
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    errors.description =
      'Product description must be between 10 and 900 characters';
  }

  if (!product.imageURL.trim() || !validUrl) {
    errors.imageURL = 'Please provide a valid image URL';
  }

  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = 'Please provide a valid price';
  }

  return errors;
};
