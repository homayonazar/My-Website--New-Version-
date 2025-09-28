import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

function SideMenu() {
  return (
    <div>
      <div className="fixMenu fixed w-[270px] h-full flex flex-col items-center bg-[var(--bgside)]">
        <h1 className="mt-15 text-2xl">HOMAYONAZAR</h1>
        <br /><br />
        <ul className="space-y-4 text-lg">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} /> Home
          </li>
          <li></li>
          <li></li>
          <li></li>
          
        </ul>
      </div>
    </div>
  )
}

export default SideMenu