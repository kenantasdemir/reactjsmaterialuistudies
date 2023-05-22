import React, { useState } from 'react'
import {Stack,Skeleton,Box} from "@mui/material"

function CustomSkeleton() {

    let [isLoading,setIsLoading] = useState(true)

  return (
        <Box>
            {isLoading ? (
                <Skeleton width={250} height={142} animation="wave"/>
            ):(
                <img src="https://picsum.photos/id/237/200/300"/>
            )
}
        </Box>
  )
}

export default CustomSkeleton