import React from "react";
import { Box, Grid, makeStyles, Typography, Tooltip } from "@material-ui/core";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  GitHub,
  Mail,
} from "react-feather";

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
  heading: {
    fontWeight: "bold",
    fontSize: "40px",
  },
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
      justify="left"
      className={styles.container}
    >
      <Grid item>
        <img
          src="/images/profile_image.jpg"
          alt="Syed Zubair Ahmed"
          className={styles.profileImage}
        />
        <Box mt={2}>
          <Typography
            variant="h1"
            className={styles.heading}
            color="textPrimary"
          >
            Hey, I'm Zubair
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography
            variant="body1"
            className={styles.subHeading}
            color="textSecondary"
          >
            A software developer and aspiring entrepreneur, 
            building cool things, checkout {" "}
            <a href="https://stories.zubs.xyz"
                alt="Browser Stories"
                target="_blank"
                noopener
                className={styles.link}
                noreferer >Browser Stories</a> my recent piece of creation, also I love reading books and hitting the gym.
          </Typography>
        </Box>
        <Box mt={3}>
          <Tooltip title="Github" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://github.com/syedzubairahmed001"
                alt="github"
                target="_blank"
                noopener
                className={styles.socialIconLink}
                noreferer
              >
                <GitHub strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="Linkedin" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://www.linkedin.com/in/syedzubairahmed001/"
                alt="linkedin"
                target="_blank"
                noopener
                className={styles.socialIconLink}
                noreferer
              >
                <Linkedin strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="Twitter" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://twitter.com/zubairself"
                alt="twitter"
                target="_blank"
                noopener
                className={styles.socialIconLink}
                noreferer
              >
                <Twitter strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="Instagram" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="https://www.instagram.com/zubairself/"
                alt="instagram"
                target="_blank"
                noopener
                className={styles.socialIconLink}
                noreferer
              >
                <Instagram strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip title="Email" arrow placement="top">
            <Box className={styles.socialIcon}>
              <a
                href="mailto:syedzubairahmed001@gmail.com"
                alt="email"
                target="_blank"
                noopener
                className={styles.socialIconLink}
                noreferer
              >
                <Mail strokeWidth={1.5} size={30} />
              </a>
            </Box>
          </Tooltip>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Sec1;
