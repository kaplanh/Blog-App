import React, { useEffect, useState } from "react";
import useBlogCalls from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";
import DashCard from "../components/DashCard";
// import { Button } from "flowbite-react";
import NewsCard from "../components/NewsCard";
import { Container } from "react-bootstrap";
import { Button,  Grid, Stack } from "@mui/material";


const Dashboard = () => {
    const { getBlogs } = useBlogCalls();
    const { blogs } = useSelector((state) => state.blog);
    const [data, setData] = useState(blogs?.slice(0, 2));

    useEffect(() => {
        getBlogs("blogs");
    }, []);

    useEffect(() => {
        setData(blogs?.slice(0, 3));
    }, [blogs]);
    const handleClick = () => {
        data?.length < 4 ? setData(blogs) : setData(blogs?.slice(0, 3));
    };
    return (
        <Stack direction={"row"} justifyContent={"space-between"} p={"2rem"}>
            <Grid container flexDirection={"column"} rowGap={3}>
                <Grid container rowGap={3}>
                    {blogs?.length > 0 &&
                        data?.map((item) => (
                            <Grid item>
                                <DashCard key={item.id} item={item} />
                            </Grid>
                        ))}
                </Grid>

                <Grid item>
                    {data?.length === 3 && (
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={handleClick}
                        >
                            Read More
                        </Button>
                    )}
                    {data?.length > 3 && (
                        <Button variant="contained" onClick={handleClick}>
                            Close More
                        </Button>
                    )}
                    <Grid item>
                        {data?.length > 3 && (
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={handleClick}
                                >
                                    Close More
                                </Button>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container flexDirection={"column"}>
                <Grid item>
                    <NewsCard />
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Dashboard;
