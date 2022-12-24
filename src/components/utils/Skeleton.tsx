import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props: {}) => {
  return (
    <ContentLoader 
    speed={2}
    width={350}
    height={500}
    viewBox="0 0 350 500"
    backgroundColor="#e5dcdc"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="269" rx="0" ry="0" width="105" height="20" /> 
    <rect x="0" y="304" rx="0" ry="0" width="348" height="30" /> 
    <rect x="0" y="348" rx="0" ry="0" width="88" height="18" /> 
    <rect x="0" y="378" rx="0" ry="0" width="132" height="20" /> 
    <rect x="0" y="415" rx="0" ry="0" width="176" height="41" /> 
    <rect x="296" y="413" rx="0" ry="0" width="48" height="41" /> 
    <rect x="2" y="6" rx="10" ry="10" width="350" height="250" />
  </ContentLoader>
  );
};

export default Skeleton;
