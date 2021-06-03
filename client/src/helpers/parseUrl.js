const parseUrl = (url) => {
  const { hostname } = new URL(url);
  return hostname;
};

export default parseUrl;
