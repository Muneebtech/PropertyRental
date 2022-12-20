import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
// import Typography from '@material-ui/core/Typography';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectIsGettingAnalysisById,
  makeSelectAnalysisData,
} from './selectors';
import reducer from './reducer';
import {
  getAnalysisById,
  getPropertyTypologies,
  getPropertyTypes,
  getPropertyConditions,
  getAcquisitionTypes,
  getCIPs,
  getIrsCategories,
  getIrsCategoryRegions,
  getIrsDependentsList,
} from './actions';
// import { useStyles } from './styles';
// ///////////////////////////////////////////////
import './analysis.scss';
// Components
import Card from '../../../components/Card/Card';
import Heading from '../../../components/Heading/Heading';
// Icon for Cards
import acqu from '../../../assets/Cards/acquisition.svg';
import after from '../../../assets/Cards/after.svg';
import capital from '../../../assets/Cards/capital.svg';
import cash from '../../../assets/Cards/cash.svg';
import graph from '../../../assets/Cards/graph.svg';
import info from '../../../assets/Cards/info.svg';
import internal from '../../../assets/Cards/internal.svg';
import monthly from '../../../assets/Cards/monthly.svg';
import rent from '../../../assets/Cards/rent.svg';
import time from '../../../assets/Cards/time.svg';
// Slider Section
import location from '../../../assets/slider/location.svg';
import property from '../../../assets/slider/property.svg';
import gross from '../../../assets/slider/first.svg';
import usefull from '../../../assets/slider/second.svg';
import arrow from '../../../assets/arrow.svg';
import imagefirst from '../../../assets/Images/first.png';

// color SVg
import blue from '../../../assets/Acqusition/blue.svg';
import gray from '../../../assets/Acqusition/gray.svg';
import green from '../../../assets/Acqusition/green.svg';
import purpule from '../../../assets/Acqusition/purpule.svg';
import lime from '../../../assets/Acqusition/lime.svg';
import yellow from '../../../assets/Acqusition/yellow.svg';

// Chappi
import chappi from '../../../assets/chappifirst.svg';
import chappisecond from '../../../assets/chappisecond.svg';
import pie from '../../../assets/pie.svg';
import requirement from '../../../assets/requirement.svg';

// Bootstrap

export function Analysis(props) {
  // const classes = useStyles();
  // const [open, setOpen] = useState(false);

  useInjectReducer({ key: 'analysis', reducer });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    const path = window.location.pathname;
    const id = path.split('/').pop();
    props.getAnalysisById(id);
    props.getIrsCategories();
    props.getIrsDependentsList();
    props.getIrsCategoryRegions();
    props.getPropertyTypes();
    props.getPropertyTypologies();
    props.getPropertyConditions();
    props.getAcquisitionTypes();
    props.getCIPs();
  }, []);

  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-right">
          <div className="card-section">
            <Card icon={acqu} heading="Acquisition Price" price="€ 427 500" />
            <Card
              icon={capital}
              heading="Total Required Capital"
              price="€ 120 546"
              border="border"
            />
            <Card
              icon={graph}
              heading="Multiple On Invested Capital"
              price="x 1.13"
              border="border"
            />
            <Card
              icon={internal}
              heading="Internal Rate Of Return"
              price="16%"
              border="border"
            />
            <Card
              border="border"
              icon={after}
              heading="Profit After Tax"
              price="€ 19 112"
            />
            <Card icon={time} heading="Time to Sell" price="2 Months" />
            <Card
              border="border"
              icon={monthly}
              heading="Monthly Debt Service"
              price="€ 427"
            />
            <Card
              border="border"
              icon={rent}
              heading="Monthly Rent"
              price="€ 7 500"
            />
            <Card
              border="border"
              icon={cash}
              heading="Monthly Cash Flow"
              price="€ 427 500"
            />
            <Card border="border" icon={info} heading="Net Yield" price="12%" />
          </div>
          {/* Slider Seciton */}

          <div className="slider-section">
            <div className="slider-section-container">
              <div className="slider-section-left">
                <div className="slider-section-left-location item-center">
                  <img src={location} alt="location" />
                  <h3>Location</h3>
                </div>
                <h4>Oeiras, Lisbon, Portugal</h4>
                <div className="slider-section-left-property item-center">
                  <img src={property} alt="property" />
                  <span>View Property</span>
                </div>
                <Divider />
                <div className="slider-section-left-area item-center">
                  <Area icon={gross} main="500 M2" sub="Gross area" />
                  <Area icon={usefull} main="280 M2" sub="Useful Area" />
                </div>
                <p className="light-gray">
                  Fantástico apartamento (2º andar) de 6 assoalhadas, com
                  excelentes áreas, óptima luminosidade, vistas desafogadas,
                  situado em Arroios próximo do Metro dos Anjos.
                </p>

                <div className="slider-section-left-option">
                  <Check option="Type" value="Apartment" />
                  <Check option="Condition" value="New" />
                  <Check option="Typology" value="T2" />
                </div>
              </div>
              <div className="slider-section-right">
                <Carousel arrows>
                  <div>
                    <img
                      className="d-block w-100"
                      src={imagefirst}
                      alt="First slide"
                    />
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={imagefirst}
                      alt="Second slide"
                    />
                  </div>
                  <div>
                    <img
                      className="d-block w-100"
                      src={imagefirst}
                      alt="Third slide"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Acqusition  */}
          <div className="acqusition">
            <div className="acqusition-container">
              <div className="acqusition-container-left">
                <Heading heading="Acquisition Cost " />
                <Divider />
                <div className="acqusition-container-left-content">
                  <div className="acqusition-container-left-color">
                    <Acquistion icon={blue} heading="Legend name" />
                    <Acquistion icon={green} heading="Legend name" />
                    <Acquistion icon={yellow} heading="Legend name" />
                    <Acquistion icon={purpule} heading="Legend name" />
                    <Acquistion icon={lime} heading="Legend name" />
                    <Acquistion icon={gray} heading="Legend name" />
                  </div>
                  <div className="acqusition-container-left-bar">
                    <img src={pie} alt="pie" />
                  </div>
                </div>
              </div>
              <div className="acqusition-container-right">
                <Heading heading="Investment Metrics " />
                <Divider />
                <br />

                <Investment
                  heading="Asking Price"
                  primary="450 000"
                  price="4500"
                  m="M²"
                />
                <Investment
                  heading="Acquisition Price"
                  primary="450 000"
                  price="4500"
                  m="M²"
                />
                <Investment
                  heading="Acquisition Price + Rehabilition Cost"
                  primary="450 000"
                  price="4500"
                  m="M²"
                />
                <Investment
                  heading="Selling Price"
                  primary="450 000"
                  price="4500"
                  m="M²"
                />
              </div>
            </div>
          </div>
          {/* Capital Section */}
          <div className="capital">
            <div className="capital-container ">
              <div className="capital-container-left">
                <br />
                <br />
                <Heading heading="Capital Source & Uses" />

                <Divider />
                <CapitalSource lable="Acquisition Price" price="237.500" />
                <CapitalSource lable="Acquisition Debt @80%" price="237.500" />
                <CapitalSource lable="Acquisition Cost" price="237.500" />
                {/* Heading */}
                <CapitalHeading
                  heading="Required Initial Capital"
                  price="237.500"
                />
                <CapitalSource lable="Rent" price="237.500" />
                <CapitalSource lable="Property Rehabilition" price="237.500" />
                <CapitalSource
                  lable="Property Rehabilition @80%"
                  price="237.500"
                />
                <CapitalSource lable="Operational Costs" price="237.500" />
                <CapitalSource lable="Interest @0.5%" price="237.500" />
                <CapitalSource lable="Debt Amortization" price="237.500" />
                {/* Heading */}
                <CapitalHeading
                  heading="Total Required Capital"
                  price="237.500"
                />
                <CapitalSource lable="Net selling Price" price="237.500" />
                <CapitalSource lable="Debt Amortization" price="237.500" />
                <CapitalHeading
                  heading="Total Required Capital"
                  price="237.500"
                />
                <CapitalSource lable="Rental Tax @28%" price="237.500" />
                <CapitalSource lable="Capital Gain Tax 28%" price="237.500" />
                <CapitalHeading heading="Profit After Tax" price="237.500" />
              </div>

              <div className="capital-container-right">
                {/* <Heading heading="Capital Requirement & profit" />
                <Divider /> */}
                <img src={requirement} alt="" />
              </div>
            </div>
          </div>

          <div className="transtional-price">
            <img src={chappi} alt="chappi" />
          </div>
          <div className="transtional-price">
            <img src={chappisecond} alt="chappi" />
          </div>

          {/* Tables */}

          <div className="table">
            <div className="table-container">
              <Heading heading="Investment Cash Flow" />

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Total Acquisition Price:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td className="green">€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td className="green">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td className="green">€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td className="green">€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                    <tr />
                  </tbody>
                </table>
                <div className="total-table_style">
                  <table>
                    <tbody>
                      <tr>
                        <td>Total Acquisition Price</td>
                        <td className="red">€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Debt Service cost:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-table_style">
                  <table>
                    <tbody>
                      <tr>
                        <td>Total Debt Service Cost</td>
                        <td className="red">€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Net Operating Income:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-table_style">
                  <table>
                    <tbody>
                      <tr>
                        <td>Total Operating Costs</td>
                        <td className="red">€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Property Rehabiliation:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Net Selling Price:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-table_style">
                  <table>
                    <tbody>
                      <tr>
                        <td>Total net selling price</td>
                        <td className="red">€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="table-container-content">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span>Profit After Tax:</span>
                          <span>
                            € 5,400
                            <img
                              src={arrow}
                              alt="arrow"
                              style={{ marginLeft: '1rem' }}
                            />
                          </span>
                        </div>
                      </th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                      <th>€ 5,400</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Asking</td>
                      <td className="red">€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                      <td>€ 5,400</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-table_style">
                  <table>
                    <tbody>
                      <tr>
                        <td>Total profit After tax</td>
                        <td className="red">€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                        <td>€ 5,400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  analysis: makeSelectAnalysisData(),
  isGettingAnalysisById: makeSelectIsGettingAnalysisById(),
});

function mapDispatchToProps(dispatch) {
  return {
    getAnalysisById: id => dispatch(getAnalysisById(id)),
    getPropertyTypes: () => dispatch(getPropertyTypes()),
    getPropertyTypologies: () => dispatch(getPropertyTypologies()),
    getPropertyConditions: () => dispatch(getPropertyConditions()),
    getAcquisitionTypes: () => dispatch(getAcquisitionTypes()),
    getCIPs: () => dispatch(getCIPs()),
    getIrsCategories: () => dispatch(getIrsCategories()),
    getIrsCategoryRegions: () => dispatch(getIrsCategoryRegions()),
    getIrsDependentsList: () => dispatch(getIrsDependentsList()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
  injectIntl,
)(Analysis);
// /////////////////////////////////////////////////////////
// Sub components
// /////////////////////////////////////////////////
const Divider = () => (
  <>
    <div className="divider" />
  </>
);

const Area = ({ icon, main, sub }) => (
  <>
    <div className="area">
      <div className="area-container item-center">
        <img src={icon} alt="icon" />
        <div className="area-container-headings">
          <h2>{main}</h2>
          <h2 className="light-gray">{sub}</h2>
        </div>
      </div>
    </div>
  </>
);

const Check = ({ option, value }) => (
  <>
    <div className="check item-center">
      <h3 className="light-gray">{option}:</h3>
      <h3>{value}</h3>
    </div>
  </>
);

const Acquistion = ({ icon, heading }) => (
  <>
    <div className="acquistion-flex item-center">
      <img src={icon} alt="color" />
      <h4 className="light-gray">{heading}</h4>
    </div>
  </>
);

const Investment = ({ heading, price, primary, m }) => (
  <>
    <div className="investment j_space">
      <h5 className="light-gray"> {heading}</h5>
      <h3>
        <span className="primary">€ {primary} </span> / {price} € / {m}
      </h3>
    </div>
    <Divider />
  </>
);

const CapitalHeading = ({ heading, price }) => (
  <>
    <div className="capital_heading j_space">
      <h1>{heading}</h1>
      <h1>{price}</h1>
    </div>
  </>
);

const CapitalSource = ({ lable, price }) => (
  <>
    <div className="capital_source j_space light-gray">
      <h5>{lable}</h5>
      <h5>{price}</h5>
    </div>
  </>
);
