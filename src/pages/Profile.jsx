import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function Profile() {
    const { currentUser } = useSelector((state) => state.auth);
    const { blogs } = useSelector((state) => state.blog);
    return (
        <Card sx={{ maxWidth: 345 }}>
            {
                blogs?.filter((item) => item.author === currentUser?.username)
                    .length
            }
            <CardMedia
                component="img"
                alt={currentUser?.username}
                height="140"
                image={currentUser?.image}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {currentUser?.username}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {currentUser?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {currentUser?.bio}
                </Typography>
            </CardContent>
        </Card>
    );
}
