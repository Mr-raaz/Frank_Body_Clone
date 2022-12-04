import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DetailsTabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="detaisTabSection">
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divide' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary"
        indicatorColor="secondary">
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Benefits" {...a11yProps(1)} />
          <Tab label="Direction Of Use" {...a11yProps(2)} />
          <Tab label="Other Information" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      It's time to play naughty and nice with Cheeky Blush Duo. This blush duo brings a natural-looking flush of color that pops on every skin tone. This palette provides a dominant color and a subtle color for blending and softening edges. Infused with radiance-boosting minerals, These pigments sweep on weightless, And a soft veil of color. The ultra-light, Micronized pigments of these shades blend effortlessly into the skin and give you a buildable coverage to enhance the apples of your cheeks!
<br /> <br />
Silky, Luminous finish
Long-wearing formula
Enriched with radiance-boosting minerals
Made in Europe
Available In Three Shades - Brazilian Bombshell 01, Cali Chik 02, Malibu Barbie 03

it is unparalleled.The key ingredients Chicory  protects the liver against alcohol toxicity. It is also a potent antioxidant, which can be seen by its free radical scavenging property and has hepatoprotective property.The Caper Bush is a potent hepatoprotective.It inhibits the elevation of malondialdehyde levels in plasma and hepatic cells. Caper Bush also inhibits the ALT and AST enzyme levels and improves the functional efficiency of the liver.Flavonoids present in the Caper Bush exhibit significant antioxidant properties, as well.

<br /> <br />
This palette provides a dominant color and a subtle color for blending and softening edges. Infused with radiance-boosting minerals, These pigments sweep on weightless, And a soft veil of color. The ultra-light, Micronized pigments of these shades blend effortlessly into the skin and give you a buildable coverage to enhance the apples of your cheeks!
      </TabPanel>
      <TabPanel value={value} index={1}>
      Every girl has that one makeup product without which she can’t leave her house. If you’re anything like Katrina, you would agree that adding a hint of colour to the apples of your cheeks can keep you looking fresh-faced all day. The Kay Beauty Blush is here to give your face an extreme matte finish, and each shade is curated to flatter your natural skin tone. Its weightless formula feels feathery light on your skin, which makes blending a dream come true. Don’t worry about the blush settling into your pores or fine lines, it works like magic to blur out all your flaws. Swirl the blush all over your cheeks and your makeup will stay put for the day. Our care ingredients containing avocado and mango butter reduces the appearance of age spots while brightening your skin. Being a super hydrating formula it's non-drying and melts into your skin. You can take your pick from eight shades that range from neutral pinks and plums to deeper hues like coral and berry that are made to suit all types of Indian skin tones and undertones, while delivering a seamless finish. Long-lasting and non-transferable, it just ticks all the boxes! <br /><br />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <br />
     <b>Step 1: </b> Apply a light color all over the lid. <br /> <br />


<b>Step 2:</b> Take a mid-tone color and put it in the crease.<br /> <br />


<b>Step 3:</b> Blend the colors together and add a shimmer shade to the center lid portion of your eye.<br /> <br />


<b>Step 4:</b> Using a light shimmer, highlight the brow bone and inner corner of the eye.<br /> <br />
      </TabPanel>

      <TabPanel value={value} index={3}>

      Explore the entire range of Blush available on Frank Body. Shop more Kay Beauty products here.You can browse through the complete world of Kay Beauty Blush . <br />
Alternatively, you can also find many more products from the Kay Beauty Matte Blush range. <br /><br />


<b>Expiry Date:</b> 15 October 2023 <br />

<b>Country of Origin:</b>  India <br /> <br />

<b>Manufacturer:</b>  Frank Body - KK Beauty Pvt Ltd <br />
<b>Address:</b>  104 Vasan Udyog Bhavan Sun Mill Compound Senapati Bapat Marg, Lower Parel, Mumbai City Maharashtra - 400013

<br /> <br /> <br />



      </TabPanel>
    </Box>
      </div>
    </>
  );
}