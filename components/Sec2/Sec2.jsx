import React from "react";
import { Box, Grid, makeStyles, Typography, Tooltip, Paper, Button, Chip } from "@material-ui/core";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  GitHub,
  Mail,
  ExternalLink
} from "react-feather";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import techStack from '../../constants/techstack.json';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: "50px",
    height: "100%"
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "100px",
  },
  //   heading: {
  //     fontWeight: "bold",
  //     fontSize: "40px",
  //   },
  subHeading: {
    fontSize: "20px",
    width: "70%"
  },
  socialIcon: {
    display: "inline-block",
    width: "30px",
    height: "30px",
    color: "#fff",
    marginRight: "20px",
  },
  socialIconLink: {
    color: "#fff",
  },
  link: {
    color: "#fff"
  },
  "@media only screen and (max-width:600px)": {
    container: {
      padding: "20px",
    },
    subHeading: {
      fontSize: "20px",
      width: "90%"
    },
  },
}));

const Sec1 = (props) => {
  const styles = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="flex-start"
      className={styles.container}
    >
      <Grid item>
        <Box>
          <Typography
            variant="h5"
            className={styles.heading}
            color="textPrimary"
          >
            Products I've built
          </Typography>
          <Box mt={2}>

            <Grid container
              alignItems="center"
              justify="flex-start"
              className={styles.container}
              spacing={2}
              style={{ padding: "0px" }}>
              <Grid item lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="/images/zubstr.jpeg"
                  />
                  {/* <img
          src="/images/profile_image.jpeg"
          alt="Syed Zubair Ahmed"
          className={styles.profileImage}
        /> */}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Zubstr
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      A subscription based B2B solution for educational institutions to build community of students and teachers inside of the campus.
                    </Typography>
                    <Box mt={2}>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.nodejs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.reactjs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.aws} color="primary" variant="outlined" />

                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.redis} color="primary" variant="outlined" />

                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.stripe} color="primary" variant="outlined" />

                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.sql} color="primary" variant="outlined" />

                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.mongodb} color="primary" variant="outlined" />

                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Github</Button> */}
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="250"
                    image="/images/browser_stories.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Browser Stories (Sold)
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      A browser extension which enables Stories like feature for all chromium based browsers, scaled upto 200+ daily active users before it got acquired.
                    </Typography>
                    <Box mt={2}>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.nextjs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.reactjs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.firebase} color="primary" variant="outlined" />

                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.nodejs} color="primary" variant="outlined" />

                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <a href="https://chrome.google.com/webstore/detail/browser-stories/cpflpimmgoikimlpdpihhecigmgehagn?hl=en" style={{ textDecoration: "none " }} target="_blank" rel="noopener noreferrer">
                      <Button size="medium" variant="contained" color="secondary" endIcon={<ExternalLink size={17} />}>Visit</Button>
                    </a>
                    <a href="https://www.producthunt.com/posts/browser-stories" style={{ textDecoration: "none " }} target="_blank" rel="noopener noreferrer">
                      <Button size="medium" variant="outlined" color="default" endIcon={<ExternalLink size={17} />}>Product hunt</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="RelaxFrens"
                    height="250"
                    image="/images/relaxfrens.jpeg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      RelaxFrens
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      An app to help people meditate better by eliminating background noise using relaxing sounds, it was listed as one of the top 10 products of the day.
                    </Typography>
                    <Box mt={2}>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.nextjs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">

                        <Chip label={techStack.reactjs} color="primary" variant="outlined" />
                      </Box>
                      <Box mr={1} mt={1} display="inline-block">
                        <Chip label={techStack.firebase} color="primary" variant="outlined" />

                      </Box>
                    </Box>
                  </CardContent>
                  <CardActions>

                    <a href="https://relaxfrens.com" style={{ textDecoration: "none " }} target="_blank" rel="noopener noreferrer">
                      <Button size="medium" variant="contained" color="secondary" endIcon={<ExternalLink size={17} />}>Visit</Button>
                    </a>
                    <a href="https://www.producthunt.com/posts/relaxfrens" style={{ textDecoration: "none " }} target="_blank" rel="noopener noreferrer">
                      <Button size="medium" variant="outlined" color="default" endIcon={<ExternalLink size={17} />}>Product hunt</Button>
                    </a>
                  </CardActions>
                </Card>
              </Grid>

            </Grid>
          </Box>

        </Box>
      </Grid>
    </Grid>
  );
};

export default Sec1;
