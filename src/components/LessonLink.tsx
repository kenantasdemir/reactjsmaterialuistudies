import React from 'react';
import { Link, Box } from '@mui/material';

export const LessonLink = () => {
  return (
    <Box>
      {/* <Link href="https://www.canboz.com/">webisteme git</Link>
      <Link href="https://www.canboz.com/" color="error">
        webisteme git
      </Link>
      <Link href="https://www.canboz.com/" color="error" variant="body2">
        webisteme git
      </Link> */}

      <Link href="https://www.canboz.com/" underline="none">
        webisteme git
      </Link>
      <Link href="https://www.canboz.com/" underline="hover">
        webisteme git
      </Link>
      <Link href="https://www.canboz.com/" underline="always">
        webisteme git
      </Link>

      <Link
        href="https://www.canboz.com/"
        component="button"
        color="error"
        variant="body2"
        onClick={() => {
          console.log('Can');
        }}
      >
        webisteme git
      </Link>
    </Box>
  );
};
