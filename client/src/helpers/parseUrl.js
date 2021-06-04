const parseUrl = (url) => {
  const { hostname } = new URL(url);
  const [, name, domain] = hostname.split('.');
  return `${name}.${domain}`;
};

export default parseUrl;
