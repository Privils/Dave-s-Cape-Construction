import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offest: 120,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="hero">
        <div
          className="hero-content"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in"
          data-aos-duration="1000"
        >
          <h1>Buidling Dreams, One brick at a time</h1>
          <p>
            At DM Services and Maintenance, we specialize in turning your vision
            for your home into a reality. Whether you're looking to build from
            the ground up, renovate an existing space, or need reliable
            maintenance services, our hardworking and dedicated team is here to
            make it happen. As a startup, we understand the importance of
            building trust and delivering top-notch quality.
            <br /> <br />
            Our skilled professionals are passionate about craftsmanship and
            attention to detail, ensuring that each project is executed with
            precision and care. We collaborate closely with our clients,
            providing personalized solutions tailored to your unique needs,
            whether it's a new construction, renovation, or ongoing maintenance.
            Our commitment to excellence is evident in every project we
            undertake. We take pride in our ability to provide innovative
            designs, efficient project management, and superior customer
            service. No project is too big or small for us – we tackle each
            challenge with enthusiasm and professionalism, ensuring that you’re
            completely
            <br /> <br />
            satisfied with the final result. At DM Services and Maintenance, we
            don't just build structures, we create lasting relationships with
            our clients through hard work, integrity, and a relentless pursuit
            of perfection. Let us bring your dream home to life – we’ve got the
            expertise, tools, and dedication to make it happen.
          </p>
        </div>
      </section>

       <section className="about" id="about">
        <h1 className="about-us">about us</h1>
        <div
          className="about-text-container"
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <p>
            At DM Services and Maintenance, we are a passionate and driven team
            dedicated to bringing your vision for your home or business to life.
            Founded as a startup, we are committed to providing exceptional
            construction, renovation, and maintenance services that meet the
            highest standards of quality and craftsmanship. We believe that
            every project, no matter how big or small, deserves the same level
            of attention, precision, and care. Our team is made up of skilled
            professionals who have a deep understanding of the construction
            industry and a relentless commitment to delivering outstanding
            results. From the design phase to completion, we work closely with
            our clients to ensure their needs and expectations are met, with a
            focus on communication, transparency, and customer satisfaction.
            Whether you’re looking to build a new home, renovate an existing
            property, or keep your space in top condition with expert
            maintenance, DM Services and Maintenance is here to help. We pride
            ourselves on our reliability, integrity, and dedication to
            excellence, and we take great pride in the trust our clients place
            in us. As a startup, we are driven by the opportunity to make a
            difference in our community by delivering high-quality work that
            stands the test of time. Our goal is to build lasting relationships
            with our clients through exceptional service, attention to detail,
            and a commitment to doing the job right the first time. At DM
            Services and Maintenance, we don’t just build structures; we build
            dreams.
          </p>
        </div>
      </section> 



      <section className="services" id="services">
        <h1>services</h1>
        <div className="services-grid">
          <figure
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="700"
          >
            <a href="./services/Additions">
              <img src={require("./images/images (1).jpeg")} alt="Additions & Extensions" />
            </a>
            <figcaption>Additions & Extensions</figcaption>
          </figure>
          <figure
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="800"
          >
            <a href="#">
              <img src={require("./images/Maintenance.jpeg")} alt="Property Maintenance" />
            </a>
            <figcaption>Property Maintenance</figcaption>
           
          </figure>
          <figure
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="900"
          >
            <a href="./services/Roofing">
              <img src={require("./images/12-Roofing-Services-Offered-throughout.jpg")} alt="Roofing Services" />
            </a>
            <figcaption>Roofing Services</figcaption>
           
          </figure>
          <figure
            data-aos="fade-down"
            data-aos-easing="ease-in"
            data-aos-duration="1000"
          >
            <a href="#">
              <img src={require("./images/Feature-House-renovation-checklist.jpg")} alt="Renovations & Remodeling" />
            </a>
            <figcaption>Renovations & Remodeling</figcaption>
           
          </figure>
        </div>

        <div className="btn-button"><button class="btn">
          <a href="./Portfolio">view all</a></button></div>
         
      </section>

      <section className="testimonial-main">
        <h1 className="testimonial-header">testimonials</h1>
        <div className="testimonials">
          <div className="testimonial-container"
     >
            <p>
              "I couldn't be happier with the work DM Services and Maintenance
              did on our home renovation. From start to finish, the team was
              professional, reliable, and truly listened to our vision. They
              transformed our outdated kitchen into a beautiful, modern space
              that we absolutely love. The attention to detail was exceptional,
              and they completed the project on time and within budget. I highly
              recommend them for any construction or renovation needs!"
            </p>
            <div className="client">
              <img src={require("./images/images.jpeg")} alt="" className="client-img" />{" "}
              <h3>luke michaels</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
