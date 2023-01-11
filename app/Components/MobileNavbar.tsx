import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import tw, { styled } from 'twin.macro';
import media from '../../styles/media';

interface MobileNavbarProps {
open: boolean;
navLink: { name: string; path: string }[]
}

  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };

    const ulVariant = {
      opened: {
        transition: {
          delayChildren: 1,
          staggerChildren: 0.18,
        },
      },
      closed: {
        transition: {
          staggerChildren: 0.06,
          staggerDirection: -1,
        },
      },
    };


export const MobileNavbar: React.FC<MobileNavbarProps> = ({open, navLink}: MobileNavbarProps) => {
    const router = useRouter();
    console.log(router.pathname)
        return (
          <motion.div variants={mobileMenuVariant}>
            <MobileNavWrapper
              className={`${open ? "translate-y-0" : "translate-y-full"}`}
            >
              <Container>
                {navLink?.map((link) => (
                  <Link href={link.path} key={link.name} legacyBehavior>
                    <motion.a
                    href={link.path}
                      whileHover={{ scale: 1.1 }}
                    >
                      {link.name}
                    </motion.a>
                  </Link>
                ))}
              </Container>
            </MobileNavWrapper>
          </motion.div>
        );
}

const MobileNavWrapper = styled.div`
  ${tw`absolute top-[69px] left-0 w-screen bg-[#FCC017] border-t-4 border-[#FFFFFF] h-screen transform transition-transform duration-300  ease-in-out filter text-[18px]`}
`;
const Container = styled.div`
    ${tw`flex flex-col justify-center items-center mt-10 gap-2`}
`