import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { Box, Tooltip } from "@mui/material";

function Footer() {
    return (
        <Tooltip placement="bottom" >
            <Box
                sx={{
                    // width: 300,
                    height: 100,
                    backgroundColor: "primary.dark",
                    display: { xs: "flex" },
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,

                        fontWeight: 500,
                        letterSpacing: ".2rem",
                        color: "White",
                    }}
                >
                    Developed by KP
                </Box>
                <Typography
                    variant="h6"
                    nowrap
                    component="a"
                    sx={{
                        mr: 2,

                        fontWeight: 500,
                        letterSpacing: ".2rem",
                        color: "White",
                    }}
                >
                    Copyright © KP {new Date().getFullYear()}
                </Typography>
            </Box>
        </Tooltip>
    );
}
export default Footer;
