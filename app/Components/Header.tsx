import Link from 'next/link';
import React from 'react'
import tw, { styled } from 'twin.macro';
import media from '../../styles/media';
import { NAVBAR_HEIGHT } from '../constants/variables';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
          <HeaderContainer>
            <LogoSection>
              <Link href="/">Rolex Medium</Link>
            </LogoSection>
          </HeaderContainer>
        );
}

const HeaderContainer = styled.div`
  ${tw`flex py-0 px-[100px] justify-between items-center`}

  height: ${NAVBAR_HEIGHT}px;

  ${media.smallDesktop} {
    padding: 0px 20px;
  }
`;
const LogoSection = styled.div``;
