export const getAisles = (selectedList) => {
  let setAisles = [];
  if (selectedList.ingredients && selectedList.ingredients?.length) {
    const aisles = selectedList?.ingredients?.length
              && selectedList?.ingredients?.map((ingredient) => (ingredient.aisle));
    setAisles = new Set(...[aisles]);
  }
  return setAisles;
};

export const parseUrl = (url) => {
  const { hostname } = new URL(url);
  const [first, name, domain] = hostname.split('.');
  return domain ? `${name}.${domain}` : `${first}.${name}`;
};

export const sortByAisle = (a, b) => {
  if (a.aisle < b.aisle) {
    return -1;
  }
  if (a.aisle > b.aisle) {
    return 1;
  }
  return 0;
};
