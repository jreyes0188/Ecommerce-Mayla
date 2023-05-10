import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./DropdownMenu.css"

const DropdownMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styles = {
        popUpBtn: {
            color: "white",
            fontSize: 18,
            fontWeight: "bold",
            textTransform: "lowercase",
        },
        upperText: {
            textTransform: "uppercase",
        },
        link: {
            color: "black",
            fontSize: 18,
            textDecoration: "none",
            
        },
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            > <h4>Catalogo</h4>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem >
                    <Link to="/catalogo/Vasos" style={styles.link}>
                        Vasos
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/catalogo/Mates" style={styles.link}>
                        Mates
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/catalogo/Llaveros" style={styles.link}>
                        Llaveros
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/catalogo/Placas para Perros" style={styles.link}>
                        Placas para Perros
                    </Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DropdownMenu