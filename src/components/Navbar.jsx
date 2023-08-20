import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const currentUser = true;

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            p: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                        onClick={() => navigate("/")}
                    >
                        <img
                            src="../../public/img/blog_logo.png"
                            alt="logo"
                            width={"150px"}
                        />
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate("/");
                                }}
                            >
                                <Typography textAlign="center">
                                    Dasboard
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate("/newblog");
                                }}
                            >
                                <Typography textAlign="center">
                                    New Blog
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate("/about");
                                }}
                            >
                                <Typography textAlign="center">
                                    About
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                            p: 1,
                        }}
                    >
                        <img
                            src="../../public/img/blog_logo.png"
                            alt="logo"
                            width={"150px"}
                        />
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Button
                            onClick={() => {
                                handleCloseNavMenu();
                                navigate("/");
                            }}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            DASHBOARD
                        </Button>
                        <Button
                            onClick={() => {
                                handleCloseNavMenu();
                                navigate("/newblog");
                            }}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            NEW BLOG
                        </Button>
                        <Button
                            onClick={() => {
                                handleCloseNavMenu();
                                navigate("/about");
                            }}
                            sx={{ my: 2, color: "white", display: "block" }}
                        >
                            ABOUT
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>

                        {currentUser ? (
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        navigate("/myblogs");
                                    }}
                                >
                                    <Typography textAlign="center">
                                        My Blogs
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        navigate("/profile");
                                    }}
                                >
                                    <Typography textAlign="center">
                                        Profile
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        navigate("/login");
                                    }}
                                >
                                    <Typography textAlign="center">
                                        Logout
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        ) : (
                            <Menu
                                sx={{ mt: "45px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem
                                    onClick={() => {
                                        handleCloseUserMenu();
                                        navigate("/login");
                                    }}
                                >
                                    <Typography textAlign="center">
                                        Login
                                    </Typography>
                                </MenuItem>{" "}
                            </Menu>
                        )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
