import { Box, Link, Stack } from '@mui/material'
import React from 'react'

function ContactsPage() {
  return (
    <Stack spacing={5} sx={{
        textAlign:"center",
    }}>

        <Link underline="hover" href="https://www.youtube.com">Youtube'da takip edin.</Link>
        <Link underline="hover" href="https://www.linkedin.com">Linkedin'de takip edin.</Link>
        <Link underline='hover' href="https://www.facebook.com">Facebook'ta takip edin.</Link>
        <Link underline="hover" href="https://www.instagram.com">Instagram'da takip edin</Link>
        <Link underline="hover" href="https://www.twitter.com">Twitter'da takip edin.</Link>

    </Stack>
  )
}

export default ContactsPage