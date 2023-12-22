
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { blue, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Box, Button, Paper } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { blue } from "@mui/material/colors";

// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//     transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//     }),
// }));

export default function DashCard({ item }) {
    const { currentUser } = useSelector((state) => state.auth);
    console.log(item);
     const navigate = useNavigate();
    return (
        <Paper elevation={5} sx={{ maxWidth:500 }}>
            <CardMedia
                component="img"
                height="194"
                image="../../public/img/blog_logo.png"
                alt="Paella dish"
            />
            <CardHeader title="React" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    React kullanıcı arayüzü oluşturmaya yarayan açık kaynak
                    kodlu bir javascript kütüphanesidir.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    29.03.2023 16:28:04
                </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton aria-label="settings">
                    <Avatar
                        sx={{ bgcolor: blue[500], width: 24, height: 24 }}
                        aria-label="recipe"
                    ></Avatar>
                </IconButton>
                <Typography variant="body2" color="primary">
                    hüseyin
                </Typography>
            </Box>

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon sx={{ color: blue[500] }} />
                    <Typography paragraph>10</Typography>
                </IconButton>
                <IconButton aria-label="chat">
                    <ChatBubbleOutlineIcon sx={{ color: blue[500] }} />
                    <Typography paragraph>10</Typography>
                </IconButton>
                <IconButton aria-label="visible">
                    <VisibilityIcon sx={{ color: blue[500] }} />{" "}
                    <Typography paragraph>10</Typography>
                </IconButton>

                <Button
                    variant="contained"
                    size="medium"
                    endIcon={<ReadMoreIcon />}
                >
                    READ MORE
                </Button>
            </CardActions>
        </Paper>
    );
}
