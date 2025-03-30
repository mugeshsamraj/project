// import React, { useRef } from "react"
// import * as styles from "../Home/Home.module.scss"
// import cardInfoImg from "../../images/card-info-img1.svg"
// import cardInfoImg2 from "../../images/card-info-img2.svg"
// import cardInfoImg3 from "../../images/card-info-img3.svg"
// import { useScroll, useInView, useTransform, motion } from "framer-motion"

// const cardData = [
//   {
//     img: "../../images/card-info-img1.svg",
//     title: "$1.7M Savings with Cloud Migration",
//     description:
//       "How an oil giant optimized logistics and reduced costs with cloud solutions.",
//   },
//   {
//     img: "../../images/card-info-img2.svg",
//     title: "Unified Oil & Gas Systems in Qatar",
//     description:
//       "How streamlined data systems maximized performance for an energy giant.",
//   },
//   {
//     img: "cardInfoImg3",
//     title: "Empowering India’s Elections with Real-Time Tracking",
//     description:
//       "How innovative tech ensured transparent and efficient vote monitoring.",
//   },
// ]
// const Insights: React.FC = () => {
//   const containerRef = useRef(null)
//   const { scrollYProgress } = useScroll({ container: containerRef })
//   return (
//     <>
//       <section className="card-component" style={{ overflow: "visible" }}>
//         <div
//           ref={containerRef}
//           className="container-fluid position-relative"
//           style={{ minHeight: ${cardData.length * 100}vh }}
//         >
//           {cardData.map((card, index) => {
//             const sectionRef = useRef(null)
//             const isInView = useInView(sectionRef, { amount: 0.5, once: false })
//             const yPosition =  index === 0 ? "0vh" : useTransform(
//               scrollYProgress,
//               [0, 1],
//               [${index * 10}vh, ${index * 15}vh]
//             )

//             return (
//               <motion.div 
//                 key={index}
//                 ref={sectionRef}
//                 initial={{ 
//                   opacity: index === 0 ? 1 : 0, 
//                   y: index === 0 ? 0 : 100 
//                 }}
//                 animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
//                 exit={{ opacity: 0, y: -60 }}
//                 transition={ index === 0
//                   ? {} 
//                   :{
//                     duration: 0.8,
//                     ease: [0.25, 1, 0.5, 1],
//                     delay: index * 0.1,
//                   }}
//                   className={${styles.cardComponentSec} py-5 ${index===0?"first-card position-fixed":"position-absolute"}}
//                   style={{
//                     top: index === 0 ? "0" : yPosition,
//                     left: 0,
//                     zIndex: isInView ? index + 5 : 2,
//                     //background: "linear-gradient(90.28deg, #06aeea 5.63%, #2cd1c1 98.56%)",
  
//                     backgroundColor: "#1b2c5d",
//                     //background: "linear-gradient(90.28deg, rgba(6, 174, 234, 0.1) 5.63%, rgba(44, 209, 193, 0.1) 98.56%)",
//                     //backdropFilter: 'blur(52px)' ,
//                     height: "100vh",
//                     boxShadow: "0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1)",
//                     borderRadius:"2rem",
//                     transform: index === 0 ? "translateY(0px)" : translateY(${yPosition}),
//                   }}
//                 >
//                   <div className="row">
//                     <div className="col-md-4">
//                       <img
//                         src={index === 0 ? cardInfoImg : index === 1 ? cardInfoImg2 : cardInfoImg3}
//                         alt="image"
//                         className="img-fluid"
//                       />
//                     </div>
//                     <div className="col-md-8 py-5">
//                     <h4 className="text-white mb-4">{card.title}</h4>
//                     <p className="text-white mb-4">{card.description}</p>
//                     <div className="mt-3">
//                       <a className="secondary-button" href="#">
//                         Discover
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//           <div className="pubblesShadowRight"></div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Insights  