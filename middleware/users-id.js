export default defineNuxtRouteMiddleware(({ next }) => {
  const authToken = useCookie('authToken')
  if (authToken) {
    return next()
  }
  return navigateTo('/login')
})
