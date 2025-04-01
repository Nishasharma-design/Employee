import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import store from './redux/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ToastContainer from './toast/ToastContainer.tsx'


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
    <App />
    </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
