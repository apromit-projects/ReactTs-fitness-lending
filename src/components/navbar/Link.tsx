import type { SectionId } from "@/types/type";
import React from "react";
import { Link } from "react-scroll";

type Props = {
  section: SectionId;
  children: React.ReactNode;
  onClick: (sectionId: SectionId) => void;
  activeSection: SectionId | null;
};

const CustomLink = ({ section, children, onClick, activeSection }: Props) => {
  const isActive = activeSection === section;

  return (
    <Link
      to={section}
      onClick={() => onClick(section)}
      className={`animate hover:text-primary-300 cursor-pointer capitalize ${isActive ? "text-primary-500" : ""}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
