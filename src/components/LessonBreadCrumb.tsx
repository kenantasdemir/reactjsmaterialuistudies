import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';

export const LessonBreadCrumb = () => {
  return (
    <Breadcrumbs separator="-" maxItems={2}>
      <Link href="/" underline="hover">
        Anasayfa
      </Link>
      <Link href="/" underline="hover">
        Blog
      </Link>
      <Link underline="none">Can Boz</Link>
      <Link underline="none">Can Boz</Link>
      <Link underline="none">Can Boz</Link>
      <Link underline="none">Can Boz</Link>
    </Breadcrumbs>
  );
};
