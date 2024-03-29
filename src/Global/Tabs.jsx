// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tabs, { tabsClasses } from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// function TabWithMenu({ label, menuItems, selected, ...other }) {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleMenuClick = (event) => {
//     event.stopPropagation();
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <Tab 
//         selected={selected}
//         onClick={handleMenuClick}
//         label={
//           <Box height="20%" display="flex" alignItems="center">
//             {label} <ArrowDropDownIcon />
//           </Box>
//         }
//         {...other}
//         sx={{
//             padding: '1px 12px', // adjust padding here
//             fontSize: '0.775rem', // adjust font size here
//           }}
//       />
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//       >
//         {menuItems.map((item, index) => (
//           <MenuItem key={index} onClick={handleMenuClose}>
//             {item}
//           </MenuItem>
//         ))}
//       </Menu>
//     </>
//   );
// }

// export default function ScrollableTabsButtonVisible() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         bgcolor: 'background.paper',
//         width: '100%',
//       }}
//     >
//       <Tabs 
//         value={value}
//         onChange={handleChange}
//         variant="scrollable"
//         scrollButtons   
//         aria-label="visible arrows tabs example"
//         indicatorColor="primary"
//         textColor="primary"
//         sx={{
//           [`& .${tabsClasses.scrollButtons}`]: {
//             '&.Mui-disabled': { opacity: 0.3 },
//           },
//           [`& .${tabsClasses.scroller}`]: {
//             flex: '1 1 auto',
//           },
//           [`& .${tabsClasses.flexContainer}`]: {
//             ['@media (max-width:600px)']: {
//               flexDirection: 'column',
//             },
//           },
//           [`& .MuiTab-root`]: {
//             minHeight: '50px',
//             padding: '0px 12px',
//           },
//         }}
//       >
//         <TabWithMenu label="Web Development" menuItems={["React", "Javascript", "CSS"]} selected={value === 0}/>
//         <TabWithMenu label="Database Management" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 1} />
//         <TabWithMenu label="Networking" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 2} />
//         <TabWithMenu label="Cloud Computing" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 3} />
//         <TabWithMenu label="Artificial Intelligence(AI)" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 4} />
//         <TabWithMenu label="Item Six" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 5} />
//         <TabWithMenu label="Item Seven" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 6} />
//         <TabWithMenu label="Item Eight" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 7} />
//       </Tabs>
//     </Box>
//   );
// }



import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function TabWithMenu({ label, menuItems, selected, onMenuSelect, ...other }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (item) => {
    onMenuSelect(item); // This function is provided by the parent component
    handleMenuClose(); // Close the menu after selection
  };

  return (
    <>
      <Tab
        selected={selected}
        onClick={handleMenuClick}
        label={
          <Box height="20%" display="flex" alignItems="center">
            {label} <ArrowDropDownIcon />
          </Box>
        }
        {...other}
        sx={{
          padding: '1px 12px',
          fontSize: '0.775rem',
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function ScrollableTabsButtonVisible({ onMenuSelection }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        indicatorColor="primary"
        textColor="primary"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          [`& .${tabsClasses.scroller}`]: {
            flex: '1 1 auto',
          },
          [`& .${tabsClasses.flexContainer}`]: {
            ['@media (max-width:600px)']: {
              flexDirection: 'column',
            },
          },
          [`& .MuiTab-root`]: {
            minHeight: '50px',
            padding: '0px 12px',
          },
        }}
      >
        <TabWithMenu label="Web Development" menuItems={["React", "Javascript", "CSS"]} selected={value === 0} onMenuSelect={onMenuSelection}/>
        <TabWithMenu label="Database Management" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 1} onMenuSelect={onMenuSelection} />
  <TabWithMenu label="Networking" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 2} onMenuSelect={onMenuSelection} />
  <TabWithMenu label="Cloud Computing" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 3} onMenuSelect={onMenuSelection} />
  <TabWithMenu label="Artificial Intelligence(AI)" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 4} onMenuSelect={onMenuSelection} />
  <TabWithMenu label="Machine Learning(ML)" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 4} onMenuSelect={onMenuSelection} />
  <TabWithMenu label="Data Science" menuItems={["Option 1", "Option 2", "Option 3"]} selected={value === 4} onMenuSelect={onMenuSelection} />
      </Tabs>
    </Box>
  );
}

export default ScrollableTabsButtonVisible;
