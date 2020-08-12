//#region > Imports
//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBBtn,
} from "mdbreact";

//> Images
// Logo of MDB React
import { ReactComponent as Logo } from "../../../assets/logo-black.svg";

//> CSS
import "./HomePage.scss";
//#endregion

//#region > Components
class HomePage extends React.Component {
  render() {
    return (
      <div className="main flex-center">
        <div className="text-center">
          <Logo />
          <p className="h3-responsive mt-3">CLOUD & NOBEL</p>
          <p className="text-muted mb-4">
            Unsere neue Webseite ist derzeit in Arbeit.
          </p>
          <MDBBtn
            color="elegant"
            href="https://shop.spreadshirt.at/cloudnobel/"
          >
            Zum Shop
          </MDBBtn>
        </div>
      </div>
    );
  }
}
//#endregion

//#region > Exports
export default HomePage;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
