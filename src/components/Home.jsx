import React from "react";
import image from './images/12-Roofing-Services-Offered-throughout.jpg'
import image1 from './images/Feature-House-renovation-checklist.jpg'
import image2 from './images/Maintenance.jpeg'
import image3 from './images/images (1).jpeg'
import image4 from './images/images.jpeg'

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
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
        <h1>about us</h1>
        <div className="about-text-container">
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
        <div className="about-circles">
            <div className="circles"></div>
            <div className="circles"></div>
        </div>
      </section>
      <section className="services" id="services">
        <h1>services</h1>
  <div className="services-grid">
    <figure>
      <img src={image} alt="Additions & Extensions" />
      <figcaption>Additions & Extensions</figcaption>
    </figure>
    <figure>
      <img src={image1} alt="Property Maintenance" />
      <figcaption>Property Maintenance</figcaption>
    </figure>
    <figure>
      <img src={image2} alt="Roofing Services" />
      <figcaption>Roofing Services</figcaption>
    </figure>
    <figure>
      <img src={image3} alt="Renovations & Remodeling" />
      <figcaption>Renovations & Remodeling</figcaption>
    </figure>
  </div>
</section>

<section className="testimonial-main">
<h1 className="testimonial-header">testimonials</h1> 
<div className="testimonials">
  
<div className="testimonial-container">
        <p>
        "I couldn't be happier with the work DM Services and Maintenance did on our home renovation. From start to 
finish, the team was professional, reliable, and truly listened to our vision. They transformed our outdated
 kitchen into a beautiful, modern space that we absolutely love. The attention to detail was exceptional, and they
 completed the project on time and within budget. I highly recommend them for any construction or renovation 
needs!"
        </p>
        <div className="client">
            <img src={image4} alt="" className="client-img"/> <h3>john m homeowner</h3>
        </div>
    </div>
</div>
</section>
    </>
  );
};

export default Home;
