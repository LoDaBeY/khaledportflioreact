import React from 'react'
import './SocialMediaACC.css'
import { NavLink } from 'react-router-dom'
import { Facebook, LanguageOutlined, LinkedIn } from '@mui/icons-material'

function SocialMediaAcc() {
  return (
    <div className="Icons">
    <NavLink to="https://www.facebook.com/bard.ai" target='_blank'>
      <Facebook />
    </NavLink>

    <NavLink to="htttps://loda.com/" target='_blank'>
      <LinkedIn />
    </NavLink>

    <NavLink to="https://fontawesome.com/" target='_blank'>
      <LanguageOutlined />
    </NavLink>
  </div>
  )
}

export default SocialMediaAcc