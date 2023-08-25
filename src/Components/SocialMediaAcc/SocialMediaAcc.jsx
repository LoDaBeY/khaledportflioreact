import React from 'react'
import './SocialMediaACC.css'
import { NavLink } from 'react-router-dom'
import { Facebook, LanguageOutlined, LinkedIn } from '@mui/icons-material'

function SocialMediaAcc() {
  return (
    <div className="Icons">
    <NavLink to="https://www.facebook.com/bard.ai">
      <Facebook />
    </NavLink>

    <NavLink to="htttps://loda.com/">
      <LinkedIn />
    </NavLink>

    <NavLink to="https://fontawesome.com/">
      <LanguageOutlined />
    </NavLink>
  </div>
  )
}

export default SocialMediaAcc