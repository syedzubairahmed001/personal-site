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
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "100px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "40px",
  },
  subHeading: {
    fontSize: "20px",
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
  "@media only screen and (max-width:600px)": {
    container: {
      padding: "20px",
    },
  },
}));

const Sec1 = (props) => {
  const styles = useStyles();
  return (
    <Grid
      container
      alignItems="center"
      justify="center"
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
            Hello, I am Syed Zubair Ahmed!
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography
            variant="body1"
            className={styles.subHeading}
            color="textSecondary"
          >
            A Full-Stack Developer and Entrepreneur, I work with Reactjs,
            Nodejs, ReactNative, Postgres, MongoDb, AWS and many cool
            technologies. I learn new stuff everytime and it's never ending!
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
