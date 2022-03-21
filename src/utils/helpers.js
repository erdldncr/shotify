export const formatPrice = (price) => {
  return Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price / 100);
};

export const getUniqueValues = () => {};
