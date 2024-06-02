import { SelectedPage } from "@/utils/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (page: SelectedPage) => void;
};

const Link = ({ page, setSelectedPage, selectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <a
      className={`transition-all duration-300 hover:text-primary ${
        selectedPage === lowerCasePage ? "text-primary" : ""
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </a>
  );
};

export default Link;
