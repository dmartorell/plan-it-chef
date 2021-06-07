/* eslint-disable no-debugger */
const parseUrl = (url) => {
  const { hostname } = new URL(url);
  const [first, name, domain] = hostname.split('.');
  return domain ? `${name}.${domain}` : `${first}.${name}`;
};

export default parseUrl;
