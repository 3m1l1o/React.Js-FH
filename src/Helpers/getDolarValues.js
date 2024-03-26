const getDolarOficial = async () => {
  const url = `https://dolarapi.com/v1/dolares/oficial`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

const getDolarBlue = async () => {
  const url = `https://dolarapi.com/v1/dolares/blue`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export { getDolarBlue, getDolarOficial };
