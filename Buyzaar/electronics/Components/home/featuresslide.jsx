import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import '../../CSS/FeatureSection.css'

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    {
      id: 1,
      name: "Casual Hoodie",
      img: "https://i.etsystatic.com/27843869/r/il/29c3e3/4859885804/il_1588xN.4859885804_1sk9.jpg",
      title: "Massive Discounts on Smart Gadgets",
      subtitle: "Style and Innovation for Everyone",
      btnText: "Shop Now",
    },
    {
      id: 2,
      name: "Elegant Dress",
      title: "Upgrade Your Smart Home",
      subtitle: "AI-driven comfort and control at your fingertips",
      btnText: "Explore Now",
      img: "https://images.unsplash.com/photo-1618333258404-f509733839c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1929",
    },
    {
      id: 3,
      name: "Sporty Joggers",
      title: "Tech for Every Lifestyle",
      subtitle: "Powerful performance meets modern design",
      btnText: "Discover",
      img: "https://plus.unsplash.com/premium_photo-1670808338046-c85712818adf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
    },
    {
      id: 4,
      name: "Smart Watch",
      title: "Tech for Every Lifestyle",
      subtitle: "Powerful performance meets modern design",
      btnText: "Discover",
      img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      name: "Classic T-Shirt",
      title: "Tech for Every Lifestyle",
      subtitle: "Powerful performance meets modern design",
      btnText: "Discover",
      img: "https://images.unsplash.com/photo-1711641066067-3c1d03492345?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
    },
    {
      id: 6,
      name: "Smart Watch",
      title: "Tech for Every Lifestyle",
      subtitle: "Powerful performance meets modern design",
      btnText: "Discover",
      img: "https://plus.unsplash.com/premium_photo-1728759435328-9a5a417edef7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070",
    },
    // {
    //   id: 6,
    //   name: "Smart Watch",
    //   title: "Tech for Every Lifestyle",
    //   subtitle: "Powerful performance meets modern design",
    //   btnText: "Discover",
    //   img: "https://i.etsystatic.com/37260176/r/il/69562e/6251182327/il_570xN.6251182327_n38d.jpg",
    // },
  ];


  // const chunked = [];
  // for (let i = 0; i < products.length; i += 4) {
  //   chunked.push(products.slice(i, i + 4));
  // }
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Auto-slide logic
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  // ✅ Manual controls
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length);

  return (

    <section className="hero-carousel position-relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`carousel-slide ${index === activeIndex ? "active" : ""
            } position-absolute top-0 start-0 w-100 h-100`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out",
            opacity: index === activeIndex ? 1 : 0,
          }}
        >
          <div className="overlay position-absolute w-100 h-100"></div>

          <div
            className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
            style={{
              top: 0,
              bottom: 0,
              left: "10%",
              right: "10%",
              zIndex: 5,
            }}
          >
            <div className="hero-carousel-text ">
              <h1
                className="fw-bold display-4 mb-3 a"
                style={{
                  animation: "fadeInUp 1.2s ease",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="lead mb-4"
                style={{
                  color: "#e0e0e0",
                  animation: "fadeInUp 1.5s ease",
                }}
              >
                {slide.subtitle}
              </p>
              <button
                className="btn btn-outline-info px-5 py-2 fw-semibold rounded-pill"
                style={{
                  borderColor: "#00e0ff",
                  animation: "fadeInUp 2s ease",
                }}
              >
                {slide.btnText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* ✅ Full-height Side Buttons */}
      <button
        onClick={prevSlide}
        className="carousel-btn prev-btn btn position-absolute border-0"
        style={{
          top: 0,
          left: 0,
          height: "100%",

          width: "70px",
          backgroundColor:
            window.innerWidth < 768 ? "transparent" : "rgba(0, 115, 255, 0.05)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background 0.3s ease",
          zIndex: 10,
        }}
      >
        <ArrowLeft size={30} color="white" style={{ display: window.innerWidth < 768 ? "none" : '' }} />
      </button>

      <button
        onClick={nextSlide}
        className="carousel-btn next-btn btn position-absolute border-0"
        style={{
          top: 0,
          right: 0,
          height: "100%",
          width: "70px",
          backgroundColor:
            window.innerWidth < 768 ? "transparent" : "rgba(0, 115, 255, 0.08)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "background 0.3s ease",
          zIndex: 10,
        }}
      >
        <ArrowRight size={30} color="white" style={{ display: window.innerWidth < 768 ? "none" : '' }} />
      </button>

      {/* ✅ Indicators */}
      <div
        className="d-flex justify-content-center position-absolute w-100"
        style={{ bottom: "30px", zIndex: 10 }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: "12px",
              height: "12px",
              margin: "0 6px",
              borderRadius: "50%",
              cursor: "pointer",
              border: "2px solid #00e0ff",
              backgroundColor: i === activeIndex ? "#00e0ff" : "transparent",
              boxShadow:
                i === activeIndex ? "0 0 10px rgba(0,224,255,0.8)" : "none",
              transition: "all 0.3s ease",
            }}
          ></div>
        ))}
      </div>
    </section>


    // <section className="hero-carousel position-relative overflow-hidden">
    //   {slides.map((slide, index) => (
    //     <div
    //       key={slide.id}
    //       className={`carousel-slide ${
    //         index === activeIndex ? "active" : ""
    //       } position-absolute top-0 start-0 w-100 h-100`}
    //       style={{
    //         backgroundImage: `url(${slide.img})`,
    //         backgroundSize: "cover",
    //         backgroundPosition: "center",
    //         transition: "opacity 1s ease-in-out",
    //         opacity: index === activeIndex ? 1 : 0,
    //       }}
    //     >
    //       <div className="overlay position-absolute w-100 h-100"></div>

    //       <div
    //         className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
    //         style={{
    //           top: 0,
    //           bottom: 0,
    //           left: "10%",
    //           right: "10%",
    //           zIndex: 5,
    //         }}
    //       >
    //         <h1
    //           className="fw-bold display-4 mb-3 a"
    //           style={{
    //             // color: "#00e0ff",
    //             // textShadow: "0 0 15px rgba(0,224,255,0.7)",
    //             animation: "fadeInUp 1.2s ease",
    //           }}
    //         >
    //           {slide.title}
    //         </h1>
    //         <p
    //           className="lead mb-4"
    //           style={{
    //             color: "#e0e0e0",
    //             animation: "fadeInUp 1.5s ease",
    //           }}
    //         >
    //           {slide.subtitle}
    //         </p>
    //         <button
    //           className="btn btn-outline-info px-5 py-2 fw-semibold rounded-pill"
    //           style={{
    //             borderColor: "#00e0ff",
    //             // color: "#00e0ff",
    //             animation: "fadeInUp 2s ease",
    //           }}
    //         >
    //           {slide.btnText}
    //         </button>
    //       </div>
    //     </div>
    //   ))}

    //   {/* ✅ Manual Navigation Buttons */}
    //   <button
    //     onClick={prevSlide}

    //     // className="carousel-btn prev-btn btn position-absolute d-none d-lg-block"
    //     className={`carousel-btn next-btn btn position-absolute ${window.innerWidth < 768 ? "bg-transparent" : ""}`}
    //     style={{
    //       top: "50%",
    //       left: "3px",
    //       transform: "translateY(-50%)",
    //       // backgroundColor: "rgba(0,224,255,0.6)",
    //       backgroundColor:" #0072ff",
    //       border: "none",
    //       borderRadius: "50%",
    //       // padding: "12px 16px",
    //       padding: "16px auto",
    //       zIndex: 10,
    //     }}
    //   >
    //     <ArrowLeft size={20} color="white" />
    //   </button>
    //   <button
    //     onClick={nextSlide}
    //     // className="carousel-btn next-btn btn position-absolute d-none d-lg-block"
    //     className={`carousel-btn next-btn btn position-absolute ${window.innerWidth < 768 ? "bg-transparent" : ""}`}
    //     style={{
    //       top: "50%",
    //       right: "3px",
    //       transform: "translateY(-50%)",
    //       // backgroundColor: "rgba(0,224,255,0.6)",
    //       backgroundColor: " #0072ff",
    //       border: "none",
    //       borderRadius: "50%",
    //       padding: "12px 16px",
    //       zIndex: 10,
    //     }}
    //   >
    //     <ArrowRight size={20} color="white" />
    //   </button>

    //   {/* ✅ Indicators */}
    //   <div
    //     className="d-flex justify-content-center position-absolute w-100"
    //     style={{ bottom: "30px", zIndex: 10 }}
    //   >
    //     {slides.map((_, i) => (
    //       <div
    //         key={i}
    //         onClick={() => setActiveIndex(i)}
    //         style={{
    //           width: "12px",
    //           height: "12px",
    //           margin: "0 6px",
    //           borderRadius: "50%",
    //           cursor: "pointer",
    //           border: "2px solid #00e0ff",
    //           backgroundColor: i === activeIndex ? "#00e0ff" : "transparent",
    //           boxShadow:
    //             i === activeIndex ? "0 0 10px rgba(0,224,255,0.8)" : "none",
    //           transition: "all 0.3s ease",
    //         }}
    //       ></div>
    //     ))}
    //   </div>
    // </section>
  )
};

export default FeaturedProducts;
