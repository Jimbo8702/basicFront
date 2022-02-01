import React from "react";

export default function Landing() {
  return (
    <>
      <section
        id="hero"
        class="d-flex align-items-center justify-content-center "
      >
        <div class="d-flex position-relative align-items-center flex-column">
          <h1>Welcome to Day</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            See what we are doing
          </a>
        </div>
      </section>
      <div>
        <section id="about" class=" about landingBody">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 order-1 order-lg-2 ">
                <img src="assets/img/about.jpg" class="img-fluid" alt="IMAGE" />
              </div>
              <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content ">
                <h3>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Duis aute irure dolor in
                    reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i class="bi bi-check-circle"></i> Ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate trideta storacalaperda mastiro
                    dolore eu fugiat nulla pariatur.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="why-us" class="why-us">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 aos-init aos-animate">
                <div class="box">
                  <span>01</span>
                  <h4>Lorem Ipsum</h4>
                  <p>
                    Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
                    consectetur ducimus vero placeat
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0 ">
                <div class="box">
                  <span>02</span>
                  <h4>Repellat Nihil</h4>
                  <p>
                    Dolorem est fugiat occaecati voluptate velit esse. Dicta
                    veritatis dolor quod et vel dire leno para dest
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0 ">
                <div class="box">
                  <span>03</span>
                  <h4> Ad ad velit qui</h4>
                  <p>
                    Molestiae officiis omnis illo asperiores. Aut doloribus
                    vitae sunt debitis quo vel nam quis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
