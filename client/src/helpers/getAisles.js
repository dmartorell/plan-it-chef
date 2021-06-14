const getAisles = (selectedList) => {
  const aisles = selectedList?.ingredients?.length
      && selectedList?.ingredients?.map((ingredient) => (ingredient.aisle));
  const setAisles = new Set(...[aisles]);
  return setAisles;
};

export default getAisles;
