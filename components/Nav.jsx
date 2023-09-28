import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-8 border-b">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={"/ticket/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">berthosefin@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
