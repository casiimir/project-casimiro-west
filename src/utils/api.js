const BASE_URL = "https://api.musement.com/api/v3/";

const GET = async (type, specific = "") => {
  const res = await fetch(BASE_URL + type + specific, {
    headers: {
      "Accept-Language": "en-GB",
      "x-musement-application": "wanderer_123456",
    },
  });
  return await res.json();
};

export { GET };
