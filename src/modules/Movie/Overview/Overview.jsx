import React, { useEffect, useState } from 'react'

const Overview = ({movieId}) => {
  const [movie, setMovie] = useState({})

  useEffect(()=>{
    // Gọi API và setMovie
  },[movieId])
  return (
    <div>Overview</div>
  )
}

export default Overview