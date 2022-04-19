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

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  return (
    <section className="writter--root-container">
      <WritterTopMenu handleOpenMenu={handleOpenMenu} isOpenMenu={isOpenMenu} />
    </section>
  )
}

export default WritterSection
