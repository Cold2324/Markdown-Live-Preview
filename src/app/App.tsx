import { useState } from 'react'
import LeftMenu from './components/LeftMenu/LeftMenu'

const App: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  return (
    <main>
      <LeftMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </main>
  )
}

export default App
