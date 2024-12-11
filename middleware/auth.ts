export default defineNuxtRouteMiddleware((to, from) => {
    const token = useStatefulCookie('token')
    if (!token.value) {
      return navigateTo('/login')
    }
  })
  