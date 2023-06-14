import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "next/link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="About Me" {...a11yProps(0)} />
          <Tab label="Projects" {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
          <Tab label="Skills" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <section>
          <p>
            Highly motivated and skilled Web Developer with a passion for
            creating innovative solutions. Coming from a background in security
            and waste management, I bring a unique blend of technical expertise
            and leadership capabilities to the tech industry. With a focus on
            continuous learning and a drive to enhance user experiences, I am
            dedicated to pushing the boundaries of web development.
          </p>
        </section>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <section>
          {" "}
          <ul>
            <li>
              <Link href="/projects">Interactive Portfolio</Link>
            </li>
            <li>QuanderDome</li>
            <li>SpaceDice</li>
            <li>Jambo</li>
            <li>GPT-Autodoc</li>
            <li>Mnemo</li>
            <li>Land Locked</li>
            <li>Web eyes</li>
            <li>Weather Butler</li>
          </ul>
        </section>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <section>
          <h3>Contact Information</h3>
          <p>Email: alexorlow17@gmail.com</p>
          <p>Phone: 647-772-4538</p>
          <p>Website:</p>
          <a href="https://alexorlow.xyz">alexorlow.xyz</a>
          <p>LinkedIn: </p>{" "}
          <a href="https://linkedin.com/in/alex-orlow">
            linkedin.com/in/alex-orlow
          </a>
          <p>GitHub:</p>
          <a href="https://github.com/orloaft">github.com/orloaft</a>
        </section>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <section>
          <ul>
            <li>Front-End Development: JavaScript, React, HTML/CSS</li>
            <li>Back-End Development: Node.js, Express, SQL</li>
            <li>Frameworks and Libraries: Next.js, Web APIs, DOM API</li>
            <li>Agile Development Methodologies</li>
            <li>TypeScript</li>
            <li>Version Control: Git, GitHub</li>
            <li>Testing: Jest</li>
            <li>Tools: Heroku</li>
          </ul>
        </section>
      </TabPanel>
    </Box>
  );
}
