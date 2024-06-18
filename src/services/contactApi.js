const apiKey = 'e6b91cce9d4b4a04bca3f90ba325de5d'

async function contactApi(url) {
  const response = await fetch(url, {
    // method: "GET",
    // withCredentials: true,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export default contactApi;