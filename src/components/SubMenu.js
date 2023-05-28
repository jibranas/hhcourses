import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SubMenuLink = styled.div`
color: white;
text-decoration: none;
font-size: 18px;
margin-left: 20px;
width: 170px;
text-align: left;
`

const SubLabel = styled(Link)`
display: flex;
text-decoration: none;
color: white;
align-items: center;
height: 50px;
text-align: center;

&:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
}
`

const DropLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
background: #414757;
height: 40px;
padding-left: 3rem;
color: #f5f5f5;
font-size: 18px;

&:hover {
    background: #632ce4;
    cursor: pointer;
  }
`


export const SubMenu = (props) => {

    const [subNavClicked, setSubNavClicked] = useState(false)

    const subNavClick = () => {
        setSubNavClicked(!subNavClicked)
    }


return(
<div>
    <SubLabel to = {props.item.path} onClick={subNavClick}>
    {props.item.icon}
         <SubMenuLink >
       {props.item.title}
   </SubMenuLink>
   <div>   
   {props.item.subNav && subNavClicked ? props.item.iconOpened : props.item.subNav? props.item.iconClosed : null}
   </div>
   </SubLabel>
    {subNavClicked && props.item.subNav ? props.item.subNav.map((subItem)=>{
        return (
        <DropLink to = {subItem.path}>
        {subItem.icon}
            <SubMenuLink >
        {subItem.title}
        </SubMenuLink> 
        </DropLink>
        )
    }
    ) : null
    }
    </div>
    
  
)
}

export default SubMenu


