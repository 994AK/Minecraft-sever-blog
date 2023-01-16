const envUrl = process.env.NODE_ENV !== 'development' ? 'http://159.75.79.184:3000/' : 'http://localhost:3000/'
export const getData = async (url, params = {}) => {
  const authToken = useCookie('authToken')
  const { data: result } = await useFetch(
    envUrl + url,
    {
      params,
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken.value
      }
    }
  )

  return result.value
}

export const postData = async (url, params = {}) => {
  console.log(1111)
  const authToken = useCookie('authToken')
  const { data } = await useFetch(
    envUrl + url,
    {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + authToken.value
      }
    }
  )

  return data
}
