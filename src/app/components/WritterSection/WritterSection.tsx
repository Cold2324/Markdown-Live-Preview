import { useState } from 'react'
import Editor from '../Editor/Editor'
import WritterTopMenu from '../WritterTopMenu/WritterTopMenu'
import './WritterSection.css'

interface WritterSectionProps {
  isOpenMenu: boolean
  setIsOpenMenu: (isOpenMenu: boolean) => void
}

const WritterSection: React.FC<WritterSectionProps> = (
  props: WritterSectionProps
) => {
  const { isOpenMenu, setIsOpenMenu } = props
  const [text, setText] = useState<string>('')

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  return (
    <section className="writter--root-container">
      <WritterTopMenu handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />
      <Editor text={text} setText={setText} />
    </section>
  )
}

export default WritterSection
