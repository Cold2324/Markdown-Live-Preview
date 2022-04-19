import { useState } from 'react'
import Editor from '../Editor/Editor'
import MarkdownPreviewr from '../MarkdownPreviewr/MarkdownPreviewr'
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
  const [isPreview, setIsPreview] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  return (
    <section className="writter--root-container">
      <WritterTopMenu
        setIsOpenMenu={setIsOpenMenu}
        isOpenMenu={isOpenMenu}
        isPreview={isPreview}
        setIsPreview={setIsPreview}
      />
      {isPreview ? (
        <MarkdownPreviewr text={text} />
      ) : (
        <Editor text={text} setText={setText} />
      )}
    </section>
  )
}

export default WritterSection
