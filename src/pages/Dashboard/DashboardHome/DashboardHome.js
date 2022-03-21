import React from "react";
import { Container } from "react-bootstrap";

const DashboardHome = () => {
  //   const { user } = useAuth();
  return (
    <div>
      <Container>
        <h3>
          Welcome <span className="welcome-user">Jalish Mahmud</span>
        </h3>

        <div>
          <div class="cards">
            <div class="card-single">
              <div>
                <h1>54</h1>
                <span>Appointment</span>
              </div>
              <div>
                <span class="las la-users"></span>
              </div>
            </div>

            <div class="card-single">
              <div>
                <h1>79</h1>
                <span>Completed</span>
              </div>
              <div>
                <span class="las la-clipboard"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>124</h1>
                <span>Pending</span>
              </div>
              <div>
                <span class="las la-shopping-bag"></span>
              </div>
            </div>
            <div class="card-single">
              <div>
                <h1>$6k</h1>
                <span>income</span>
              </div>
              <div>
                <span class="lab la-google-wallet"></span>
              </div>
            </div>
          </div>
          <div class="recent-grid">
            <div class="projects">
              <div class="card">
                <div class="card-header">
                  <h3>All Appointment</h3>
                  <button>
                    See all <span class="las la-arrow-right"></span>
                  </button>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Doctors Name</td>
                          <td>Date & Time</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status orange"></span>
                            Success
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status purple"></span>
                            Pending
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status purple"></span>
                            Pending
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status orange"></span>
                            Success
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status purple"></span>
                            Pending
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Dr. Arfiur Rahman</p>
                            <small>MBBS, FCPS, BCS (Health)</small>
                          </td>
                          <td>27/03/2022, 8:30pm</td>
                          <td>
                            <span class="status purple"></span>
                            Pending
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="customers">
              <div class="card">
                <div class="card-header">
                  <h3>All Departments</h3>
                  {/* <button>
                    See all <span class="las la-arrow-right"></span>
                  </button> */}
                </div>

                <div class="card-body">
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Child Health</h4>
                        <small>24/7 Available</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Child Health</h4>
                        <small>24/7 Available</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Child Health</h4>
                        <small>24/7 Available</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                  <div class="customer">
                    <div class="info">
                      <img
                        src="img/user.png"
                        width="40px"
                        height="40px"
                        alt=""
                      />
                      <div>
                        <h4>Child Health</h4>
                        <small>24/7 Available</small>
                      </div>
                    </div>
                    <div class="contact">
                      <span class="las la-comment"></span>
                      <span class="las la-phone"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardHome;
