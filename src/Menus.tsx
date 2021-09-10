import { FC, useState, MouseEvent } from "react"
import { Menu, MenuItem } from "@material-ui/core"
import Button from "@material-ui/core/Button"

const Menus: FC = () => {
  const [housesPerPlayer, setHousesPerPlayer] = useState<number>(7)
  const [seedsPerHouse, setSeedsPerHouse] = useState<number>(7)
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  const handleClick = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const setHouses = (houses: number) => {
    setHousesPerPlayer(houses)
  }

  const setSeeds = (seeds: number) => {
    setSeedsPerHouse(seeds)
  }

  return (
    <>
      <Button
        aria-controls="houses-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        variant="contained"
      >
        Houses per Player
      </Button>
      <Menu
        id="houses-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={setHouses(1)}>1</MenuItem>
        <MenuItem onClick={setHouses(2)}>2</MenuItem>
        <MenuItem onClick={setHouses(3)}>3</MenuItem>
        <MenuItem onClick={setHouses(4)}>4</MenuItem>
        <MenuItem onClick={setHouses(5)}>5</MenuItem>
        <MenuItem onClick={setHouses(6)}>6</MenuItem>
        <MenuItem onClick={setHouses(7)}>7</MenuItem>
        <MenuItem onClick={setHouses(8)}>8</MenuItem>
        <MenuItem onClick={setHouses(9)}>9</MenuItem>
        <MenuItem onClick={setHouses(10)}>10</MenuItem>
        <MenuItem onClick={setHouses(11)}>11</MenuItem>
        <MenuItem onClick={setHouses(12)}>12</MenuItem>
      </Menu>
      <Button
        aria-controls="houses-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
        variant="contained"
      >
        Seeds per house
      </Button>
      <Menu
        id="houses-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={setSeeds(1)}>1</MenuItem>
        <MenuItem onClick={setSeeds(2)}>2</MenuItem>
        <MenuItem onClick={setSeeds(3)}>3</MenuItem>
        <MenuItem onClick={setSeeds(4)}>4</MenuItem>
        <MenuItem onClick={setSeeds(5)}>5</MenuItem>
        <MenuItem onClick={setSeeds(6)}>6</MenuItem>
        <MenuItem onClick={setSeeds(7)}>7</MenuItem>
        <MenuItem onClick={setSeeds(8)}>8</MenuItem>
        <MenuItem onClick={setSeeds(9)}>9</MenuItem>
        <MenuItem onClick={setSeeds(10)}>10</MenuItem>
        <MenuItem onClick={setSeeds(11)}>11</MenuItem>
        <MenuItem onClick={setSeeds(12)}>12</MenuItem>
      </Menu>
    </>
  )
}

export default Menus
