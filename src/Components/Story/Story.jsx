import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import bgImage from "../../Assets/pic2.jpg";

export default function Story() {
  return (
    <Paper
      sx={{
        backgroundImage: { sm: `url(${bgImage})` },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        p: { sm: 1 },
        m: { xs: 0.5 },
      }}
    >
      <Box
        sx={{
          width: { sm: "50%" },
          background: { sm: "rgba(255,255,255,0.8)", xs: "none" },
          p: 2,
          borderRadius: { sm: 2 },
        }}
      >
        <Typography variant="h3">Two Bags and a Big dream</Typography>
        <Typography
          variant="body2"
          component="div"
          sx={{ textAlign: "justify", py: 1 }}
        >
          <p>Check-in Counter, Bangalore Airport (8th September 2019) </p>{" "}
          <p>
            {" "}
            “Your luggage looks heavy”. I replied to the security “No My Dreams
            are”
          </p>{" "}
          <p>
            And that’s how the title goes Two bags and a big dream of becoming a
            successful engineer. It's also the day I can never forget in my
            life, 22 year old me realizing that it is at this moment I won't be
            seeing my family for the next few years. Moist eyes, anxious mind,
            and that one last goodbye wave, I just wanted to run back and hug my
            family tightly. When you dream big everything comes at a price. It
            was my first ever international air travel and well the beginning of
            a wonderful journey in Canada.
          </p>{" "}
          <p>
            During my teenage, I would lose myself looking at the sky every time
            an airplane flew by and with excitement let all the kids in the
            neighborhood know that an airplane just passed by. That’s how My
            journey started when I was 16, inspired by the beauty of science and
            maths in the real world. My young innocent brain trying to untangle
            the fictitious science that existed around me. That’s when the seed
            of love for science was sown.{" "}
          </p>{" "}
          <p>
            {" "}
            I am lucky that I have my Indian parents whose dream is to realize
            my dream. They have supported me in every phase of my life through
            their hard work by nourishing me with the best possible education
            and life. I did my bachelor's in Aeronautical Engineering also
            secured an All India rank of 436 in the GATE Aerospace exam(2018),
            considered to be the toughest technical test in India. This did give
            me plenty of opportunities but then it was always a question of what
            lies next & are they challenging enough. Just in time, I decided to
            do my master's in Aerospace engineering at Concordia University
            Montreal. Keeping my competition to the biggest Aviation hubs in the
            world.{" "}
          </p>{" "}
          <p>
            {" "}
            In India, for someone like me, big dreams come with big debt and
            difficulties. But thanks to my parents & family for believing in me
            and also supporting me to pursue my higher studies at Concordia
            University.{" "}
          </p>{" "}
          <p>
            {" "}
            Two years as a student in Aerospace engineering at Montreal has been
            a lot of life learning lessons. It has never been easy for me.
            Living on the sheer edge of balancing myself both academically and
            financially in a foreign country, also keeping my priorities in
            life. This time it was just me who had to take care, keep myself
            motivated, face challenges every day while waking up to new
            surprises of life.{" "}
          </p>{" "}
          <p>
            Looking back to those 2 years, present day, I have not just lived my
            life but I have survived. Be it my part-time job as a Mover, Walmart
            job, or my summer job, my managers tell me “ Goutham, YOU ARE THE
            BEST!”. And that’s what I tell myself every day. I am the best!
            Thank you for reading till the end.{" "}
          </p>{" "}
        </Typography>
      </Box>
    </Paper>
  );
}
