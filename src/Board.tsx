import React, { FC, useState, useEffect } from "react"
import Houses from "./Houses"

const Board: FC = () => {
  const [updateHouses, setUpdateHouses] = useState<boolean>(false)
  const [houses, setHouses] = useState<number>(7)
  const [shellsPerHouse, setShellsPerHouse] = useState<number>(7)
  const [board, setBoard] = useState<number[]>([
    17, 7, 7, 7, 7, 7, 5, 7, 12, 7, 3, 7, 7, 7, 7, 7,
  ])
  const [p1Board, setP1Board] = useState<number[]>([])
  const [p2Board, setP2Board] = useState<number[]>([])

  useEffect(() => {
    setP1Board(board.slice(1, shellsPerHouse + 1))
    setP2Board(board.slice(shellsPerHouse + 2, shellsPerHouse * 2 + 2))
    setUpdateHouses(false) // will it calls useEffect again?
  }, [updateHouses])

  return (
    <div>
      <table className="board">
        <tbody>
          <tr>
            <td rowSpan={2}>{board[houses + 1]}</td>
            <Houses houses={p1Board} />
            <td rowSpan={2}>{board[0]}</td>
          </tr>
          <tr>
            <Houses houses={p2Board} />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Board
