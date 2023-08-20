import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {
    Button,
    CardActionArea,
    CardActions,
    Paper,
    Grid,
    Icon,
} from "@mui/material";

const About = () => {
    return (
        <Grid container justifyContent="center" spacing={2}>
            <Grid item>
                <Paper
                    sx={{
                        display: "flex",

                        p: 2,
                        m: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        width: "350px",
                        height:"450px"
                    }}
                    elevation={10}
                >
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="../../public/img/blog_logo.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    KP
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Full Stack Developper
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                sx={{ "&:hover": { color: "red" } }}
                                size="small"
                            >
                                <LinkedInIcon />
                            </Button>
                            <Button
                                sx={{ "&:hover": { color: "red" } }}
                                size="small"
                            >
                                <TwitterIcon />
                            </Button>
                            <Button
                                sx={{ "&:hover": { color: "red" } }}
                                size="small"
                            >
                                <InstagramIcon />
                            </Button>
                            <Button
                                sx={{ "&:hover": { color: "red" } }}
                                size="small"
                            >
                                <YouTubeIcon />
                            </Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Grid>
            )
        </Grid>
    );
};

export default About;
