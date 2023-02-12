import { Menu } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import tw, { styled } from "twin.macro";

const links = [
  { href: "/signup", label: "Sign up" },
  { href: "/signin", label: "Sign in " },
  { href: "/plans", label: "Become a Member" },
  { href: "/partner-program", label: "Apply to the Partner Program" },
  { href: "/membership", label: "Gift a membership" },
];

interface MenuProps {}

export const MenuItems: React.FC<MenuProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Menu>
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
            className="text-left absolute right-0 bg-white rounded-md w-[230px] mr-4 drop-shadow-md top-8 z-50"
            onClick={toggleMenu}
          >
            <p className="text-center font-bold text-[18px] p-4 py-4">
              Get started on Medium
            </p>
            {links.map((link, id) => (
              <li key={id}>
                <Link href={link.href}>
                  <MenuLink>{link.label}</MenuLink>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </Menu>
  );
};

const MenuLink = styled.div`
  ${tw`px-5 py-2 hover:bg-gray-200 block cursor-default`}
`;
