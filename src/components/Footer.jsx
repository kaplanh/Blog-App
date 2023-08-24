import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import Container from "@mui/material/Container";
import { Box, Link, Tooltip } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function Footer() {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState("hannover");
    // const {currentUser}=useSelector((state)=>state.auth)
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=525ec9a980c68d11748eb917c3b824c9&units=metric&lang=de`;
    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setWeather(data);
                console.log(data);
            });
    }, [URL]);

    //  useEffect(() => {
    //      if (currentUser?.city) {
    //          setCity(currentUser?.city);
    //      } else {
    //          setCity("Istanbul");
    //      }
    //  }, [currentUser]);

    return (
        <Tooltip placement="bottom">
            <Box
                sx={{
                    // width: 300,
                    height: 100,
                    backgroundColor: "primary.dark",
                    display: { xs: "flex" },
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        // width: 300,
                        height: 100,
                        backgroundColor: "primary.dark",
                        display: { xs: "flex" },

                        justifyContent: "beetween",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}
                        alt={weather?.weather[0].description.toLocaleUpperCase()}
                        title={weather?.weather[0].description.toLocaleUpperCase()}
                    />
                    <Typography variant="p" color="initial">
                        {weather?.name} {Math.round(weather?.main.temp)}
                        <sup>°C</sup>
                    </Typography>
                </Box>
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
                    <Typography
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
                    </Typography>
                    <Typography
                        variant="h6"
                        nowrap="true"
                        component="a"
                        sx={{
                            mr: 2,

                            fontWeight: 500,
                            letterSpacing: ".2rem",
                            color: "White",
                        }}
                    >
                        {/* Copyright © KP {new Date().getFullYear()} */}
                        Copyright © KP 2023
                    </Typography>
                </Box>
                <Box
                    sx={{
                        // width: 300,
                        height: 100,
                        backgroundColor: "primary.dark",
                        display: { xs: "flex" },

                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        mr: 2,
                    }}
                >
                    <Link
                        href="https://github.com/kaplanh"
                        underline="hover"
                        target="_blank"
                        rel="noopener"
                        color="initial"
                        sx={{ "&:hover": { color: "red", bg: "primary" } }}
                        //*üçüncü taraf içeriğine bağlantı verirken her zaman rel="noopener" veya rel="noreferrer" ayarının yapılması önerilir.
                        // *rel="noopener", yeni sayfanın window.opener özelliğine erişmesini engeller ve ayrı bir işlemde çalışmasını sağlar. Bu olmadan, hedef sayfa potansiyel olarak sayfanızı kötü niyetli bir URL'ye yönlendirebilir.
                        //* rel="noreferrer" has the same effect, but also prevents the Referer header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.
                    >
                        <GitHubIcon />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/kaplan-h/"
                        underline="hover"
                        color="initial"
                        target="_blank"
                        rel="noopener"
                        color="initial"
                        sx={{ "&:hover": { color: "red", bg: "primary" } }}
                    >
                        <LinkedInIcon />
                    </Link>
                    <Link
                        href="mailto:kplnhsyn.49@gmail.com/"
                        underline="hover"
                        color="initial"
                        target="_blank"
                        rel="noopener"
                        color="initial"
                        sx={{ "&:hover": { color: "red", bg: "primary" } }}
                    >
                        <MarkEmailReadIcon />
                    </Link>
                </Box>
            </Box>
        </Tooltip>
    );
}
export default Footer;
