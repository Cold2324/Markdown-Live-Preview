import { useState } from 'react'
import LeftMenu from './components/LeftMenu/LeftMenu'
import WritterSection from './components/WritterSection/WritterSection'

const App: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
  return (
    <main style={{ display: 'flex' }}>
      {isOpenMenu && (
        <LeftMenu isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      )}
      <WritterSection isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </main>
  )
}

export default App
