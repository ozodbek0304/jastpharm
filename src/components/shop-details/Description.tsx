import React from 'react';
import parse from 'html-react-parser';


const Description = ({ data }: any) => {


  return (
    <>
      <div className="describe-area">
        <div className="product-details-text pr-10 mb-50">
          <p className="gray-color2 dc-text1 pb-6">
            {data?.body && parse(data?.body)}
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            Can Data Visualization Improve The Mobile Web Experience?
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            Smashing Podcast Episode 16 With Ben Frain: How Can
            Optimize Workspace
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            How To Make Performance Visible With GitLab CI And Hoodoo
            Of GitLab
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            Learning Resources In Challenging Times: Online Work And
            Events
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            Can Data Visualization Improve The Mobile Web Experience?
          </p>
          <p className="gray-color2">
            <span className="h2-theme-color pr-10">
              <i className="far fa-check-circle"></i>
            </span>
            How To Make Performance Visible With GitLab CI And Hoodoo
            Of GitLab
          </p>
        </div>
      </div>
    </>
  );
};

export default Description;