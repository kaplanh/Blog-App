import { Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Stack alignItems={"center"} justifyContent={"center"} gap={4}> 
            <Typography variant="h2" color="initial">
                Page Not Found
            </Typography>
            <Button  variant="contained"  onClick={() => navigate("/")}>Return Home</Button>
        </Stack>
    );
};

export default NotFound;
