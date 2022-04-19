import sidebar from '../../assets/sidebar.svg'
import view from '../../assets/view.svg'
import './WritterTopMenu.css'

interface WritterTopMenuProps {
  handleOpenMenu: () => void
  isOpenMenu: boolean
}

const WritterTopMenu: React.FC<WritterTopMenuProps> = (
  props: WritterTopMenuProps
) => {
  const { handleOpenMenu, isOpenMenu } = props
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
      <img src={view} id="view--icon" alt="view icon button" />
    </div>
  )
}

export default WritterTopMenu
