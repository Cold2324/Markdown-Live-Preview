import sidebar from '../../assets/sidebar.svg'
import view from '../../assets/view.svg'
import './WritterTopMenu.css'

interface WritterTopMenuProps {
  setIsOpenMenu: (isOpenMenu: boolean) => void
  isOpenMenu: boolean
  isPreview: boolean
  setIsPreview: (isPreview: boolean) => void
}

const WritterTopMenu: React.FC<WritterTopMenuProps> = (
  props: WritterTopMenuProps
) => {
  const { setIsOpenMenu, isOpenMenu, isPreview, setIsPreview } = props

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }

  const handlePreview = () => {
    setIsPreview(!isPreview)
  }

  return (
    <div className="writter-top-menu--container">
      {!isOpenMenu && (
        <img
          src={sidebar}
          id="sidebar--icon"
          onClick={handleOpenMenu}
          alt="sidebar icon button"
        />
      )}
      <img
        src={view}
        id="view--icon"
        alt="view icon button"
        onClick={handlePreview}
      />
    </div>
  )
}

export default WritterTopMenu
