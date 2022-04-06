import { cleanString } from "../CleanStrings/CleanStrings";

export const cleanProductsData = (JSONobject) => {
  const cleanedProducts = JSONobject.map((item) => ({
    id: item.id,
    title: cleanString(item.title),
    image: item.image,
    price: item.price,
  }));
  return cleanedProducts;
};
