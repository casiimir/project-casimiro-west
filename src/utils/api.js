const BASE_URL = "https://api.musement.com/api/v3/";
const GET = async (type, specific = "") => {
  const res = await fetch(BASE_URL + type + specific);
  return await res.json();
};

export { GET };
