import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.button
        animate={{ rotate: isMenuOpen ? 180 : 0 }}
        onClick={toggleMenu}
        className="p-2"
      >
        <Icon icon={"akar-icons:chevron-down"} />
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0.5, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0.1, y: 0 }}
            layoutId="menu"
            className="absolute right-0 bg-white rounded-md w-[230px] mr-4 drop-shadow-md top-8 z-50"
            onClick={toggleMenu}
          >
            <li>
              <Link href={""}>
                <MenuLink>My Account</MenuLink>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <MenuLink>News</MenuLink>
              </Link>
            </li>
            <li>
              {/* <Link href={""}> */}
              <MenuLink>Sign out</MenuLink>
              {/* </Link> */}
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuLink = styled.div`
  ${tw`px-5 py-2 hover:bg-gray-200 block cursor-default`}
`;
