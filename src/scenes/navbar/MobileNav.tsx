import { useEffect, useState } from "react";
import { SheetContent, SheetTrigger, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "./Link";
import { SelectedPage } from "@/utils/types";
import { Button } from "@/components/ui/button";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const MobileMenu = ({ selectedPage, setSelectedPage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);


  const handleLinkClick = (page: SelectedPage) => {
    setSelectedPage(page);
    setIsOpen(false); // Close the sheet
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="group -m-2 flex items-center p-2 bg-primary rounded-full ">
          <MenuIcon className="text-white size-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-full pr-0 max-w-xs ">
        <div className="flex flex-col items-center justify-center gap-8 text-xl mt-10">
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={handleLinkClick}
          />
          <Link
            page="Benefits"
            selectedPage={selectedPage}
            setSelectedPage={handleLinkClick}
          />
          <Link
            page="Our Classes"
            selectedPage={selectedPage}
            setSelectedPage={handleLinkClick}
          />
          <Link
            page="Contact Us"
            selectedPage={selectedPage}
            setSelectedPage={handleLinkClick}
          />
          <div className="flex flex-col gap-4">
            <Button
              onClick={() => setIsOpen(false)}
              className="text-xl text-gary-500 hover:text-primary transition-all duration-300"
              variant="link"
            >
              Sign in
            </Button>
            <Button onClick={() => setIsOpen(false)} className="">
              Become a Member
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
