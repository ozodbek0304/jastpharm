import Image from 'next/image';
import React from 'react';
import bannerImg from "../../../public/assets/images/banner/banner-img.jpg";
import bannerImgTwo from "../../../public/assets/images/banner/banner-img2.jpg";
const Description = () => {
    return (
        <>
            <div className="describe-area">
                  <div className="product-details-text pr-10 mb-50">
                    <p className="gray-color2 dc-text1 pb-6">
                      Sed perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni doloreos qui
                      ratione voluptatem sequi nesciunt. Neque porro quisquam
                      est, qui dolorem ipsum quia dolor siconsectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      siconsectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem.
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
                  <div className="p-review-area pb-90">
                    <div className="row">
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12 mb-20">
                        <Image
                          src={bannerImg}
                          width={500}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                          alt=""
                        />
                      </div>
                      <div className="col-xl-6  col-lg-6  col-md-6  col-sm-12 col-12 mb-20">
                        <Image
                          src={bannerImgTwo}
                          width={500}
                          height={500}
                          style={{ width: "100%", height: "auto" }}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
        </>
    );
};

export default Description;