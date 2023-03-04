import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import ClickAwayListener from "../ClickAwayListener";

const links = [
  { href: "/plans", label: "Become a Member" },
  { href: "/partner-program", label: "Apply to the Partner Program" },
  { href: "/membership", label: "Gift a membership" },
];

interface MenuProps {}

export const MenuItems: React.FC<MenuProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const router = useRouter();

  const handleLinkClickHandler = () => {
    router.push("/");
  };

  return (
    <ClickAwayListener onClickAway={() => isMenuOpen && setIsMenuOpen(false)}>
      <Menu>
        <motion.button onClick={toggleMenu} className="p-2 flex items-center">
          <Icon
            icon="carbon:user-avatar-filled"
            className="text-[40px] text-[#d7d7d7]"
          />
          <motion.button animate={{ rotate: isMenuOpen ? 180 : 0 }}>
            <Icon icon={"akar-icons:chevron-down"} />
          </motion.button>
        </motion.button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              initial={{ opacity: 0.5, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.1, y: 0 }}
              layoutId="menu"
              className="text-left absolute right-0 bg-white rounded-md w-[230px] mr-10 drop-shadow-md top-8 z-50 mt-4 "
              onClick={toggleMenu}
            >
              <p className="text-center font-bold text-[18px] py-4 px-5">
                Get started on Medium
              </p>
              <div className="border-b-[1px] px-5">
                <button className=" p-1 bg-nativeGreen w-full rounded-full text-white">
                  Sign up
                </button>
                <button className=" p-1 border-[1px] border-gray-400  my-4 w-full rounded-full text-black">
                  Sign in
                </button>
              </div>
              {links.map((link, id) => (
                <button
                  key={id}
                  onClick={handleLinkClickHandler}
                  className="w-full text-left px-5"
                >
                  <MenuLink>{link.label}</MenuLink>
                </button>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </Menu>
    </ClickAwayListener>
  );
};

const MenuLink = styled.div`
  ${tw` py-2 hover:text-gray-800 block text-gray-500 cursor-pointer`}
`;
