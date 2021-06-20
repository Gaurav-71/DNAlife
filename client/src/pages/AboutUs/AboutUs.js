import React from "react";
import "./AboutUs.scss";
import Heading from "../../components/Heading/Heading";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import p1 from "../../assets/About/droppedImage.png";
import p2 from "../../assets/About/image002.jpg";
import p3 from "../../assets/About/BC4.jpg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="page">
      <Heading pageTitle={"About Us"} />
      <AppBar style={{ zIndex: 10 }} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Introduction" {...a11yProps(0)} />
          <Tab label="Biodiversity" {...a11yProps(1)} />
          <Tab label="Mission & Vision" {...a11yProps(2)} />
          <Tab label="Objectives" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ width: "100%" }} value={value} index={0}>
        <div className="about-us-page">
          <div className="text">
            <p>
              Given the burgeoning human population in India in particular and
              world in general, many decisions taken in the ‘interest of
              society’, invariably spell doom to the natural wealth of the land,
              with green-cover rapidly cleared to make room for an ever
              expanding human society. This is destined to backfire, for the
              very foundation of healthy life is based, among other things, on a
              clean environment, abundant rainfall, fertile of soil and pure
              water. It is therefore the need-of-the- hour, even in the interest
              of human society, to generate a greater respect for nature and to
              check over-exploitation of natural resources. More important,
              however, is for us to recognize the right for all life forms to
              exist independent of human whims and fancies, a right that is
              rarely ever acknowledged. Fruition of each of these goals is a
              long way off, but every step taken with this intention is a step
              taken in the right direction.
            </p>
            <p>
              DNA Life attempts, in its own modest way, to correct for this
              appalling imbalance and change the way we view nature.
              Conservation practices are adopted both actively and passively.
              Based primarily in Anuganalu, a village in Karnataka, India (at
              the foot of the verdant Western Ghats). Human activities were
              minimized around a barren stretch of rocky land, about 30 acres,
              which belongs to Anuganalu. The result was evident within three
              years when a slow regeneration of the forest that once, not so
              long ago, stretched up to the village was noticed. This area is
              now completely green thanks to additional efforts from DNA Life to
              afforest it.
            </p>
            <p>
              Being native to the region, local flora require little or no
              attention but benefit the farmer immensely by enriching soil
              fertility, recharging ground water and preventing soil erosion.
              DNA Life encourages farmers to grow these in addition to their own
              crops, and has already distributed hundreds of thousands of
              saplings to farmers. In parallel, DNA Life has convinced farmers
              to take up tree-based farming (forest farming or Kadu Krushi). Now
              most farmers have adopted forest farming methods in their own
              land, which is zero-investment and high-return to farmers. DNA
              Life is successful by transforming over 75% landscape into green
              space in villages around Anuganalu, which was less than 10% green
              in 2000.
            </p>
            <img className="biodiv" src={p3} alt="img" />
            <p>
              Deep ponds and lakes have silted over the years, are being
              de-silted for creating a lake that would not only enhance the
              local bio-diversity by supporting local flora and fauna,
              particularly as a bird- habitat, but would also benefit the
              denizens of the village by recharging ground water.
            </p>
            <p>
              Medicinal plants are grown here in order to preserve indigenous
              knowledge in medicine. DNA Life conducts workshops to sensitize
              villagers to the importance of natural wealth and the direct
              influence it has on the quality of their lives. Organic farming,
              soil and water conservation methods have been implemented in and
              around Anuganalu. DNA Life has worked with central and state
              government institutions like Karnataka Biodiversity Board, Forest
              Department, Watershed Department and Department of Agriculture.
              DNA Life is working to protect bio- diversity in a hill close to
              the village by establishing large watershed and rainforest area
              for hundred’s of villages.
            </p>
            <p>
              The ultimate objective of DNA Life, in addition to conservation
              and documentation, is to support and conduct research in
              rainforest biology particularly by involving farmers right from
              the beginning. This involvement of end-users (farmers) serves as a
              tool to preserve and protect the indigenous vegetation.
            </p>
            <p>
              The activities of DNA Life have proved to be nothing short of
              inspirational to the people whose lives it has touched. Several
              have returned with the intention of establishing a similar system
              in their own villages across India and abroad. The government and
              the forest department have always backed its activities as DNA
              Life looks forward to a steady growth in this goodwill and
              camaraderie.
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={1}>
        <div className="about-us-page">
          <div style={{ paddingBottom: "4rem" }} className="text">
            <p>
              Rainforests are among the most important places on earth; although
              rainforests occupy less than 10% of the landmass, they harbor
              nearly 50% of the global biodiversity, bring rainfall and sustain
              livelihood in the tropical regions. The rainforests of Western
              Ghats in India are one of the biodiversity hotspots; however, over
              three-fourth of this habitat is deforested due to human
              activities. To counteract deforestation-driven problems and to
              rescue rainforests, DNA Life was formed. DNA Life is a non-profit
              organization committed to conservation and documentation of
              biodiversity and strives to establish a more harmonious
              relationship between man and nature. Based primarily in Anuganalu,
              a village located at the foot of the Western Ghats, our main focus
              has been to encourage the community to grow local species of
              trees, which our nursery grows in its hundreds of thousands.
            </p>
            <img className="biodiv" src={p2} alt="img" />
            <p>
              A barren stretch within Anuganalu was afforested successfully and
              serves as an experiment that can be repeated in other villages
              too. We are working on conservation of soil and water, habitats
              for birds and preserving bio-diversity in nearby hills. We are
              also propagating plants known to the local community for their
              medicinal properties. We conduct workshops for farmers and
              school-children where we give live demonstrations on the
              importance of biodiversity conservation.
            </p>
            <img className="biodiv" src={p1} alt="img" />
            <p>
              While you are here we urge you to browse through the projects we
              have handled in the last five years and our plans for the future.
              Please take time to learn more about us, our principles and how we
              started. If you are a nature lover committed to promoting the
              spirit of conservation, you could participate in more ways than
              one.
            </p>
          </div>
        </div>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={2}>
        <div className="info">
          <p>
            <b>Mission :-</b> To protect biodiversity through afforestation
            methods
          </p>
          <br />
          <br />
          <p>
            <b>Vision :-</b> To strive for environmental conservation by
            integrating Greenomics and Genomics through community participation
            and empowerment, to understand the life and emotions in all life
            forms and to unite with nature while prospering in its love.
          </p>
        </div>
      </TabPanel>
      <TabPanel style={{ width: "100%" }} value={value} index={3}>
        <div className="info2">
          <ul className="ack">
            <li>
              To conserve or preserve the natural resources including living and
              non-living resources and maintain the ecosystem.
            </li>
            <li>
              To create awareness among local people of the environment,
              ecology, natural food chain, forest, plants, animals and
              microorganisms of their help and uses.
            </li>
            <li>
              To establish, promote, set-up, maintain or aid or to help in the
              setting up of research institutions for conservation of
              biodiversity and also educating the people on conservation of
              forest and forest wealth for maintaining ecological balance.
            </li>
            <li>
              To render any assistance in the form of cash or kind to people for
              planting of saplings and also awarding people who are actively
              involved in conservation efforts.
            </li>
            <li>
              To render/provide assistance in implementation of any scheme
              sponsored by the state or central government or foreign
              countries/institutional for conservation and growing of forest to
              maintain ecological balance in and around villages.
            </li>
            <li>
              To provide/render monetary or other help and assistance or
              contribute or to donate to any institution establishment or person
              for conservation of biodiversity and to preserve forest, forest
              produces an ecological balance.
            </li>
            <li>
              To start, maintain and assist any relief measures in those parts
              of villages where deforestation on a large scale has resulted in
              the ecological imbalance.
            </li>
            <li>
              To construct and maintain any institution which is concerned with
              the afforestation scheme and for planting trees to improve
              greenery on a large scale.
            </li>
            <li>
              To open, establish, promote, set-up, run, maintain, assist,
              financially support or aid or help in the setting up or maintain
              or run schools, institutions for biodiversity conservation through
              afforestation or environmental schemes in rural and urban areas
              and also maintain by adopting local and modern technologies.
            </li>
            <li>
              To meet traveling, boarding and lodging expenses of students who
              go abroad or to other states/countries to study Afforestation
              methods and biodiversity conservation.
            </li>
            <li>
              To publish research articles in journals or books, pamphlets,
              periodicals, and newspapers in India or outside India and channel
              the advancement of education and technology towards ecological
              balance.
            </li>
            <li>
              To assist or set up or establish nurseries for preservation of
              medicinal plants, herbs and shrubs, and also educate the people on
              the importance of preserving and growing medicinal plants in and
              around the villages.
            </li>
            <li>
              The Trustees may conduct research on forestry, horticulture,
              agriculture and animal husbandry.
            </li>
            <li>
              To establish, promote, maintain or aid or to help in setting up
              natural or artificial parks, sanctuaries, zoos and museums for
              conserving wild plants and animals.
            </li>
            <li>
              To establish or set up modern research labs including Tissue
              culture, biotechnology and any molecular biology laboratories to
              conserve endangered organisms.
            </li>
            <li>
              Conservation of native germplasm of locally adopted plants,
              animals and microbial species and also introduction of exotic
              species to enrich the biodiversity.
            </li>
          </ul>
        </div>
      </TabPanel>
    </div>
  );
}
