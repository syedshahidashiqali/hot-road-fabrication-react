import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import flashIcon from "../../images/flash.png";
import waterIcon from "../../images/water.png";
import watchIcon from "../../images/stopwatch.png";
import carIcon from "../../images/car-header.png";
import lineIcon from "../../images/line-shape.png";
import electronIcon from "../../images/electron.png";
import Toggle from "./Toggle";

function Header() {
  return (
    <div className={styles.headerWrapperMain}>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5} lg={5}>
            <div className={styles.leftColWrapper}>
              <div className={styles.topSection}>
                <Row>
                  <Col xs={12} sm={12} md={4} lg={4}>
                    <div className={styles.innerWrapperLeft}>
                      <h5>Hot Road</h5>
                    </div>
                  </Col>
                  <Col xs={12} sm={12} md={8} lg={8} className="d-flex jc-e">
                    <div className={styles.innerWrapperRight}>
                      <div className={styles.iconWrapper}>
                        <img src={flashIcon} alt="flash icon" />
                      </div>
                      <div className={styles.textWrapper}>
                        <span>
                          Lorem Ipsum is simply dummy text of the printing
                          industry.
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div className={styles.midInnerWrapper}>
                      <div className={styles.textWrapper}>
                        <h3>Hot Rod Fabrication</h3>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing
                          typesetting in Lorem Ipsum is simply dummy text of the
                          printing typesetting in
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={styles.botSection}>
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div className={styles.botWrapper}>
                      <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                          <div className={styles.botLeft}>
                            <h4>Features</h4>
                          </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                          <div className={styles.botRight}>
                            <span>Manual</span>
                            <Toggle />
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12}>
                    <div className={styles.botDownWrapper}>
                      <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                          <div className={styles.botDownLeft}>
                            <div className={styles.iconWrapper}>
                              <img src={waterIcon} alt="" />
                            </div>
                            <h6>Consumption</h6>
                            <h2>12 Litres</h2>
                          </div>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                          <div className={styles.botDownRight}>
                            <div className={styles.iconWrapper}>
                              <img src={watchIcon} alt="" />
                            </div>
                            <h6>Speed-Up</h6>
                            <h2>75 Km/h</h2>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={7} lg={7}>
            <div className={styles.rightColWrapper}>
              <div className={styles.linksWrapper}>
                <ul>
                  <li>
                    <a className={styles.active} href="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Contacts</a>
                  </li>
                </ul>
              </div>
              <div className={styles.textBgWrapper}>
                <h1>Hot Pod</h1>
              </div>
              <div className={styles.carBgWrapper}>
                <img className="img-fluid" src={carIcon} alt="" />
                <img className="img-fluid" src={lineIcon} alt="" />

                <div className={styles.midIconWrapper}>
                  <img className="img-fluid" src={electronIcon} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
