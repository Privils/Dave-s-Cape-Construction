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
  // change the icon , company name on top of the search
  return (
    <>
      <section className="services" id="services">
        <h1>services :</h1>
        <div className="services-text">
          <p>
            At DCC Services and Maintenance, we bring your dream home to life
            with reliable construction, renovation, and maintenance services.
            Our skilled team ensures quality workmanship, clear communication,
            and personalized solutions for every project. We take pride in
            delivering results you can trust while building lasting
            relationships with our clients through hard work and integrity.
          </p>
        </div>
        <div className="service">
          <figure>
            <a href="./services/Additions">
              <img
                src={require("./images/images (1).jpeg")}
                alt="Additions & Extensions"
              />
            </a>
            <figcaption>taking of qoutations</figcaption>
          </figure>
          <figure className="lowered">
            <a href="#">
              <img
                src={require("./images/Maintenance.jpeg")}
                alt="Property Maintenance"
              />
            </a>
            <figcaption>Property Maintenance</figcaption>
          </figure>
          <figure>
            <a href="./services/Roofing">
              <img
                src={require("./images/12-Roofing-Services-Offered-throughout.jpg")}
                alt="Roofing Services"
              />
            </a>
            <figcaption>Roofing Services</figcaption>
          </figure>
          <figure className="lowered">
            <a href="#">
              <img
                src={require("./images/renovations.jpg")}
                alt="Renovations & Remodeling"
              />
            </a>
            <figcaption>Renovations & Remodeling</figcaption>
          </figure>
        </div>

        {/* <div className="btn-button"><button class="btn">
          <a href="./Portfolio">view all</a></button></div>
          */}
      </section>
      <section className="about" id="about">
        <div
         className="about-text-container"
        >
          <div className="image-about">
            <figure>
              <img src={require("./images/house cons.jpg")} alt="" />
            </figure>
          </div>
          <div className="about-Daves">
            <h1 className="about-us">about us</h1>
            <p>
              At <span>DCC Services and Maintenance</span>, we are a
              <span>passionate</span> and <span>driven team</span> dedicated to
              turning your vision for your <span>home</span> or
              <span>business</span> into reality. As a committed
              <span>startup</span>, we provide exceptional
              <span>construction</span>, <span>renovation</span>, and
              <span>maintenance</span> services that reflect the highest
              standards of <span>quality</span> and <span>craftsmanship</span>.
              We believe that every project, regardless of size, deserves
              detailed <span>attention</span>, <span>precision</span>, and
              genuine <span>care</span>. Our team consists of skilled
              professionals with a deep understanding of the
              <span>construction industry</span> and a relentless commitment to
              delivering <span>outstanding results</span>.
              <br />
              <br />
              From the initial <span>design phase</span> to project completion,
              we work closely with our <span>clients</span> to ensure their
              <span>needs</span> and <span>expectations</span> are fully met,
              prioritizing <span>communication</span>, <span>transparency</span>
              , and <span>customer satisfaction</span> throughout the process.
              Whether you wish to build a <span>new home</span>, renovate your
              current space, or maintain your property with expert care,
              <span>DCC Services and Maintenance</span> is ready to assist you
              with reliable and efficient solutions. We take pride in our
              <span>integrity</span>, <span>reliability</span>, and dedication
              to <span>excellence</span>, valuing the trust our clients place in
              us.
              <br />
              <br />
              As a growing startup, we are inspired by the opportunity to
              positively impact our community by delivering
              <span>high-quality work</span> that endures over time. Our mission
              is to build <span>lasting relationships</span> with our clients
              through <span>exceptional service</span>, careful attention to
              detail, and a commitment to getting the job done right the first
              time. At <span>DCC Services and Maintenance</span>, we don’t just
              build structures; <span>we build dreams</span> and bring your
              ideas to life with <span>care</span> and <span>expertise</span>.
            </p>
          </div>
        </div>
      </section>
      <section className="prevoius-work">
<h1>Previous Works</h1>
<p>Explore some of our completed projects and see how we bring quality craftsmanship and client visions to life.</p>

      <div className="prev-wrk-cont">
      <div className="prev-wrk">
        <figure>
          <img src={require('./images/portfolioImages/additons/entertainment8.jpg')} alt="" />
        </figure>
      </div>
      <div className="prev-wrk-1">
         <figure>
          <img src={require('./images/portfolioImages/roofingImages/scheming1.jpg')} alt="" />
        </figure>
         <figure>
          <img src={ require('./images/portfolioImages/roofingImages/roof11.jpg')} alt="" />
        </figure>
      </div>
      <div className="prev-wrk-2">
         <figure>
          <img src={ require('./images/portfolioImages/tiles/tiles-3.jpg')} alt="" />
        </figure>
      </div>
      </div>
      </section>
      <section className="testimonial-main">
        <h1 className="testimonial-header">testimonials</h1>
        <div className="testimonials">
         <div className="testimonial-container">
  <p>
    "I couldn't be happier with the work DM Services and Maintenance did on our home renovation.
    From start to finish, the team was professional, reliable, and truly listened to our vision.
    They transformed our outdated kitchen into a beautiful, modern space that we absolutely love.
    The attention to detail was exceptional, and the project was completed on time and within budget.
    I highly recommend them for any construction or renovation needs!"
  </p>
  <div className="client">
    <figure>
       <img
      src={require("./images/elizeu-dias.jpg")}
      alt="Luke Michaels"
      className="client-img"
    />
    </figure>
   
    <h3>elizeu dias</h3>
  </div>
</div>
<div className="testimonial-container">
  <p>
    "DM Services and Maintenance exceeded our expectations with our bathroom renovation.
    They provided excellent advice, worked efficiently, and the quality of their work is outstanding.
    The team was friendly and respectful of our home throughout the process.
    We now have a modern, functional bathroom we’re proud to show off to guests."
  </p>
  <div className="client">
     <figure>
      <img
      src={require("./images/prince-akachi.jpg")}
      alt="Sarah Ncube"
      className="client-img"
    />
    </figure>
    
    <h3>Sarah Ncube</h3>
  </div>
</div>
<div className="testimonial-container">
  <p>
    "From planning to execution, DM Services and Maintenance handled our home extension project with professionalism and care.
    They were transparent about timelines and costs, and their workmanship is top-notch.
    We now have the extra space our family needed, and it blends seamlessly with our existing home."
  </p>
  <div className="client">
     <figure>
      <img
      src={require("./images/charles-etoroma.jpg")}
      alt="Thabo Moyo"
      className="client-img"
    />
    </figure>
    
    <h3>Thabo Moyo</h3>
  </div>
</div>
<div className="testimonial-container">
  <p>
    "Working with DM Services and Maintenance was a fantastic experience.
    They transformed our cramped kitchen into a beautiful, open space perfect for our family.
    Their team was punctual, tidy, and communicated with us every step of the way.
    I highly recommend them for any renovation projects."
  </p>
  <div className="client">
     <figure>
       <img
      src={require("./images/johan arense.jpg")}
      alt="Maria Daniels"
      className="client-img"
    />
    </figure>
   
    <h3>Maria Daniels</h3>
  </div>
</div>
<div className="testimonial-container">
  <p>
    "I have used DM Services and Maintenance for several maintenance jobs around my property,
    and each time they deliver excellent work. They are reliable, affordable, and complete tasks quickly without compromising quality.
    It’s reassuring to know I can count on them for any property maintenance needs."
  </p>
  <div className="client">
     <figure>
        <img
      src={require("./images/nomsa khumalo.jpg")}
      alt="Nomsa Khumalo"
      className="client-img"
    />
    </figure>
  
    <h3>Nomsa Khumalo</h3>
  </div>
</div>
<div className="testimonial-container">
  <p>
    "DM Services and Maintenance helped us renovate our small business premises, and we couldn’t be more pleased with the outcome.
    They worked around our schedule to minimize disruption, kept the site clean, and delivered quality work on time.
    The new look has made a huge difference for our customers and staff."
  </p>
  <div className="client">
     <figure>
         <img
      src={require("./images/ian-dooley.jpg")}
      alt="Jacob Smith"
      className="client-img"
    />
    </figure>
 
    <h3>Jacob Smith</h3>
  </div>
</div>


        </div>
      </section>
    </>
  );
};

export default Home;
