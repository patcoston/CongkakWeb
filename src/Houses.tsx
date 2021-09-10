import React, { FC, useState, useEffect } from "react"

interface Props {
  houses: number[]
}

const Houses: FC<Props> = ({ houses }) => {
  console.log(houses)
  return (
    <>
      {houses.map((house, key) => (
        <td key={key}>{house}</td>
      ))}
    </>
  )
}

export default Houses
