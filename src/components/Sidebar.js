import React, { useState } from 'react'
import styled from 'styled-components'
import SidebarData from './SidebarData'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import SubMenu from './SubMenu'


const TopNav = styled.div`
background: black;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`

const TopNavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
&:hover FaIcons{
    color: 'purple';
}
`

const SideBarNav = styled.nav`
background: black;
height: 100vh;
width: 15rem;
position: fixed;
left: ${(props)=> props.show?'0':'-100%'};
transition: 350ms;
`


function Sidebar() {

    const [show, setShow] = useState(false)

    const showSidebar = () => setShow(!show)

    return (
        <div>
        <TopNav>
            <TopNavIcon onClick={showSidebar}>
                <FaIcons.FaBars style={{color: 'white'}}/>
            </TopNavIcon>
        </TopNav>
        <SideBarNav show={show}>
            {SidebarData.map((item)=>{
                return <SubMenu item={item}></SubMenu>
                })}
        </SideBarNav>
        </div>
    )
}

export default Sidebar
