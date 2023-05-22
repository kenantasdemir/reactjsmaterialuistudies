import { Breadcrumbs, Link } from '@mui/material'
import React from 'react'

function CustomBreadCrumb() {
  return (
    <Breadcrumbs separator=">">
            <Link href="/" underline="hover">Anasayfa</Link>
            <Link href="/" underline="hover">Blog</Link>
            <Link href="/" underline="hover">Kenan Taşdemir</Link>
    </Breadcrumbs>
  )
}

export default CustomBreadCrumb