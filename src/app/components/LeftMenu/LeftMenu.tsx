import sidebar from '../../assets/sidebar.svg'
import './LeftMenu.css'

interface LeftMenuProps {
  isOpenMenu: boolean
  setIsOpenMenu: (isOpenMenu: boolean) => void
}

const LeftMenu: React.FC<LeftMenuProps> = (props: LeftMenuProps) => {
  const { isOpenMenu, setIsOpenMenu } = props
  const handleOpenMenu = () => {
    setIsOpenMenu(false)
  }
  return (
    <header className="leftmenu--container">
      <h1>G Note</h1>
      {isOpenMenu && (
        <img
          src={sidebar}
          id="sidebar--icon"
          alt="sidebar icon button"
          onClick={handleOpenMenu}
        />
      )}
    </header>
  )
}

export default LeftMenu
