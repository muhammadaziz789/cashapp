import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./style.scss";
function TabPanel(props) {
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CTab({
  tabList,
  value = 0,
  handleCustomClick = () => {},
}) {
  const customization = {
    "& .tabs": {
      gap: "50px",
      display: "flex",
    },
    "& .MuiButtonBase-root": {
      background: "#white",
      borderRadius: "10px",
      color: "#111",
      textTransform: "none",
      fontSize: "14px",
      fontWight: "500",
      padding: "0 20px",
      textAlign: "left",
      height: "50px",
      border: "1px solid #d95c35",
    },
    "& .MuiButtonBase-root, & .MuiTab-root": {
      maxWidth: "auto",
    },
    "& .Mui-selected": {
      transition: "0.7s",
      color: "#fff !important",
    },
    "& .MuiTabs-indicator": {
      borderRadius: "10px",
      backgroundColor: "#d95c35",
      height: "100%",
    },
  };

  return (
    <Box sx={{ width: "100%" }} id="CTabID">
      <Box sx={customization}>
        <Tabs
          value={value}
          variant="scrollable"
          scrollButtons={"auto"}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {tabList?.map((tab, ind) => (
            <Tab
              disableRipple
              key={ind}
              onClick={() => handleCustomClick(tab)}
              sx={{
                "& .MuiButtonBase-root, & .MuiTab-root": {
                  maxWidth: "auto",
                },
              }}
              label={<p className="text">{tab?.name}</p>}
              {...a11yProps(tab.id)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
