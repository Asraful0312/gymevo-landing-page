import { Button } from "@/components/ui/button";
import Link from "./Link";
import { SelectedPage } from "@/utils/types";

import MobileMenu from "./MobileNav";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, setSelectedPage, selectedPage }: Props) => {
  const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav
      className={`flex-between fixed top-0 left-0 right-0 z-30 py-6 ${navBarBackground}`}
    >
      <div className="flex-between mx-auto w-full max-w-6xl min-h-full px-6">
        <div className="flex-between gap-16 w-full">
          {/* Left side */}
          {/* <img src={Logo} alt="log" />
           */}
          <div className="flex items-center gap-1">
            <h2 className="font-bold text-2xl text-primary">EVOGYM</h2>
          </div>
          {/* Right side */}

          <div className="hidden lg:flex-between w-full">
            <div className="flex-between  gap-8 text-sm">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex-between">
              <Button variant="link">Sign in</Button>
              <Button>Become a Member</Button>
            </div>
          </div>

          <div className="block lg:hidden">
            <MobileMenu
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
