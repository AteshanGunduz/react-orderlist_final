'use client'
import App from '@/components/App'
import Hook from '@/hooks/CustomHooks'

import { Provider } from '@/context/foods'

const HomePage = () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
export default HomePage
