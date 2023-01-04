const envUrl = process.env.NODE_ENV !== 'development' ? 'http://159.75.79.184:3000/' : 'http://localhost:3000/'
export const getData = async (url, params = {}) => {
  const { data: result } = await useFetch(
    envUrl + url,
    {
      params,
      method: 'GET'
    }
  )

  return result.value
}

export const postData = async (url, params = {}) => {
  const { data } = await useFetch(
    envUrl + url,
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
