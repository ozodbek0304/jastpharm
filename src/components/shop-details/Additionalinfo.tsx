import React from "react";

const Additionalinfo = () => {
  return (
    <>
      <div className="additional-information mt-50 h2-gray-background pt-40 pl-50 pr-50 pb-50 mb-100">
        <div className="row">
          <div className="col-xl-12">
            <h5 className="title mb-20 font600">Additional information</h5>
            <table className="table border mt-25 table-responsive-sm">
              <tbody>
                <tr className="add-color-area aditional-info border-bottom border-top ">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Color</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>dark blue, </li>
                      <li>Lower Blue,</li>
                      <li>Pink,</li>
                      <li>White,</li>
                      <li>Yellow</li>
                    </ul>
                  </td>
                </tr>
                <tr className="add-brand-area aditional-info border-bottom h2-gray-background">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Weight</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>1.4 oz</li>
                    </ul>
                  </td>
                </tr>
                <tr className="add-color-area aditional-info border-bottom border-top">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Dimensions</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>62 × 56 × 12 in</li>
                    </ul>
                  </td>
                </tr>
                <tr className="add-brand-area aditional-info border-bottom h2-gray-background">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Fabric</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>Cotton, </li>
                      <li>Silk, </li>
                      <li>Synthetic, </li>
                    </ul>
                  </td>
                </tr>
                <tr className="add-brand-area aditional-info border-bottom h2-gray-background">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Size</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>XS, </li>
                      <li>S, </li>
                      <li>M, </li>
                      <li>L, </li>
                      <li>XL </li>
                    </ul>
                  </td>
                </tr>
                <tr className="add-brand-area aditional-info border-bottom h2-gray-background">
                  <td className="tbl-title pl-5">
                    <h6 className="add-title">Warranty</h6>
                  </td>
                  <td className="tbl-content">
                    <ul className="add-color d-flex">
                      <li>3 Months</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Additionalinfo;
