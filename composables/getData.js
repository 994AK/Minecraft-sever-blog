export const getData = async (url, params = {}) => {
  const { data: result } = await useFetch(
    'http://localhost:3000/' + url,
    {
      params,
      method: 'GET'
    }
  )

  return result.value
}

export const postData = async (url, params = {}) => {
  const { data } = await useFetch(
    'http://localhost:3000/' + url,
    {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return data.value
}
