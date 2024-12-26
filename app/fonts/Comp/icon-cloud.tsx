// import React from 'react';
// // import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';

// const useIcons = (slugs: string[]) => {
//   const [icons, setIcons] = React.useState<any>(null);

//   React.useEffect(() => {
//     fetchSimpleIcons({ slugs }).then(setIcons);
//   }, [slugs]);

//   if (icons) {
//     return Object.values(icons.simpleIcons).map((icon: any) => 
//       renderSimpleIcon({
//         icon,
//         size: 42,
//         aProps: {
//           onClick: (e: any) => e.preventDefault()
//         }
//       })
//     );
//   }

//   return <a>Loading</a>;
// };

// const slugs = [
//   'amazonaws',
//   'android',
//   'androidstudio',
//   'antdesign',
//   'typescript',
//   'vercel',
//   'visualstudiocode'
// ];

// const DynamicIconCloud = () => {
//   const icons = useIcons(slugs);

//   return <Cloud>{icons}</Cloud>;
// };
