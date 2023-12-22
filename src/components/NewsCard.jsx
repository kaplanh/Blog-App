import axios from "axios";
import React, { useState } from "react";
// import newsImg from "../assets/news.jpg";
import { useEffect } from "react";

import {Container, Box, Button, Divider, Grid, Link, Typography } from "@mui/material";


const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=2108f1dba8114b89b4a326fc6f71a5a8";
// " https://newsapi.org/v2/everything?country=de?category=sports&apiKey=2108f1dba8114b89b4a326fc6f71a5a8";
// "https://newsapi.org/v2/everything?q=bitcoin&apiKey=2108f1dba8114b89b4a326fc6f71a5a8";

const NewsCard = () => {
    const [news, setNews] = useState([]);
    const [sliceData, setSliceData] = useState([]);

    const getNewsData = async () => {
        const { data } = await axios.get(url);
        setNews(data.articles);
        console.log(data.articles);
    };

    useEffect(() => {
        getNewsData();
    }, []);

    useEffect(() => {
        setSliceData(news.slice(0, 5));
    }, [news]);

    const handleClick = (index) => {
        sliceData.length < 6
            ? setSliceData(news)
            : setSliceData(news.slice(0, 5));
    };

    return (
        <Container>
            
                <Typography variant="h6" component={"h6"} align="center">News</Typography>
                <Divider/>
            
            <Grid container flexDirection={"column"} spacing={2} alignItems={"center"}>
                {sliceData.length > 1 ? (
                    sliceData?.map((item, index) => {
                        return (
                            <Grid item key={index} sx={{ width: "200px" }}>
                                <img
                                    alt=""
                                    src={
                                        item?.urlToImage
                                            ? item?.urlToImage
                                            : null
                                    }
                                    width={"200px"}
                                />
                                <Box>
                                    {item?.title}
                                    <p>
                                        {new Date(
                                            item?.publishedAt
                                        ).toDateString()}
                                    </p>
                                    <Link
                                        rel="noopener noreferrer"
                                        target="true"
                                        href={item?.url}
                                    >
                                        See Details
                                    </Link>
                                </Box>
                                <Divider sx={{m:2}} width="200px"/>
                            </Grid>
                        );
                    })
                ) : (
                    <Grid container>
                        <Grid item>No news data available.</Grid>
                    </Grid>
                )}
                {sliceData?.length < 6 && sliceData.length > 0 && (
                    <Box>
                        <Button
                            onClick={handleClick}
                            gradientDuoTone="cyanToBlue"
                        >
                            See More
                        </Button>
                    </Box>
                )}
                {sliceData?.length > 6 && (
                    <Box>
                        <Button
                            onClick={handleClick}
                            gradientDuoTone="cyanToBlue"
                        >
                            Close More
                        </Button>
                    </Box>
                )}
            </Grid>
        </Container>
    );
};

export default NewsCard;
