export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, instance, info) => {
    // Log error to console in development
    if (process.dev) {
      console.error('Vue Error:', error)
      console.error('Component:', instance)
      console.error('Error Info:', info)
    }

    // Handle specific error types
    if (error instanceof TypeError) {
      showError({
        statusCode: 500,
        statusMessage: 'Internal Server Error',
        message: 'Something went wrong while processing your request.'
      })
    } else if (error instanceof Error) {
      showError({
        statusCode: 500,
        statusMessage: error.name,
        message: error.message
      })
    }

    // Track error in production (you can add your analytics service here)
    if (!process.dev) {
      // Example: send to analytics service
      // trackError(error)
    }
  }

  // Handle unhandled promise rejections
  if (process.client) {
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled Promise Rejection:', event.reason)
      
      showError({
        statusCode: 500,
        statusMessage: 'Promise Rejection',
        message: 'An unexpected error occurred. Please try again.'
      })

      event.preventDefault()
    })
  }
}) 