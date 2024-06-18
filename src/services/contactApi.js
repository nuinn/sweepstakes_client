const apiKey = 'e6b91cce9d4b4a04bca3f90ba325de5d'

async function contactApi(url) {
  const response = await fetch(url, {
    // method: "GET",
    withCredentials: true,
    headers: {
      'X-Auth-Token': 'e6b91cce9d4b4a04bca3f90ba325de5d'
    },
  });
  const data = await response.json();
  console.log('got it!', data);
  return data;
}

export default contactApi;