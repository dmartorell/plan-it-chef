const sortByAisle = (a, b) => {
  if (a.aisle < b.aisle) {
    return -1;
  }
  if (a.aisle > b.aisle) {
    return 1;
  }
  return 0;
};

export default sortByAisle;
