import sidebar from '../../assets/sidebar.svg'
import view from '../../assets/view.svg'
import download from '../../assets/download.svg'
import save from '../../assets/save.svg'
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
      {isOpenMenu && <div></div>}
      <div className="action-icon-buttons--container">
        <img src={save} alt="save icon button" id="save--icon" />
        <img src={download} alt="download icon button" id="download--icon" />
        <img
          src={view}
          id="view--icon"
          alt="view icon button"
          onClick={handlePreview}
        />
      </div>
    </div>
  )
}

export default WritterTopMenu
