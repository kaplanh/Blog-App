import React from 'react'

const About = () => {
  return (
      <Grid container justifyContent="center" spacing={2}>
         
              <Grid item >
                  <Paper
                      sx={{
                          display: "flex",
                          gap: 3,
                          p: 2,
                          alignItems: "center",
                          justifyContent: "center",
                          width: "280px",
                      }}
                      elevation={5}
                  >
                      <Avatar
                          sx={{
                              bgcolor: item.bgColor,
                              color: item.color,
                              width: "70px",
                              height: "70px",
                          }}
                      >
                          
                      </Avatar>

                      <Box>
                          <Typography variant="button" mb={2}>
                              
                          </Typography>
                          <Typography variant="h4" mb={2}>
                              
                          </Typography>
                      </Box>
                  </Paper>
              </Grid>
          )
      </Grid>
  );
}

export default About