import React from "react"
import { Link, withRouter } from "react-router-dom"
import Search from "./Search"
import Savedlist from "./Savedlist"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"

const Navbar = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img
            src=""
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-bar">
        <Search />
        <span>
          <Button className="alert" variant="outlined" color="primary" onClick={handleClickOpen}>
            Open alert Dialog
          </Button>
          <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <Savedlist closefunc={handleClose} />
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClose}
              aria-label="close"
            >
              Close
            </Button>
          </Dialog>
        </span>
      </div>
    </nav>
  )
}

export default Navbar
