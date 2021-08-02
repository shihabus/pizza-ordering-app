const toPriceLabel = (price) => parseFloat(price).toFixed(2);

const isEmptyObject = (obj) => Object.keys(obj)?.length === 0;

export { toPriceLabel, isEmptyObject };
