import React from 'react'
import { SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarBtnWrap,SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="development" onClick={toggle}>
            Development
            </SidebarLink>
            <SidebarLink to="discovery" onClick={toggle}>
            Discovery
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
            Services
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
            Contact
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/demo">
              Request Demo
            </SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    </>
  )
}

export default Sidebar
