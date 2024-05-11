import React from "react";
import AboutUscomponent from "../Components/AboutUscomponent";
import aboutUsImage from "../images/aboutUsHeroImage.png";
import Contactform from "../Components/Contactform";
import Cards from "../Components/Card";
import cultivator from "../images/cultivator.png";
import rotavator from "../images/Rotavator.jpeg";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      {/* landing page */}
      <div className="maincont">
        <div className="cont">
          <div className="text">
            <h1 className="text-3xl font-bold underline">शान ॲग्रो</h1>
            <h1 className="main_heading">समजूतदार शेतकऱ्याची पहिली आवड</h1>
          </div>
        </div>
      </div>

      {/* product card */}
      <h1 className="header">शेती अवजारे</h1>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          justifyContent: {
            lg: "space-between",
            md: "space-between",
            sm: "center",
            xs: "center",
          },
        }}
      >
        <Cards
          imgSrc={cultivator}
          prodLink="product/cutlivator"
          info="
        शानच्या कल्टीवेटरसह मातीच्या कठीण परिस्थितीवर मात करा. आमच्या मशीनमध्ये सहज प्रवेशासाठी एक अतिशय मजबूत फ्रेम, सहज ऑपरेशनसाठी हायड्रॉलिक प्रणाली आणि सानुकूलित कामाच्या खोलीसाठी हायड्रॉलिकली ॲडजस्टेबल ड्रॉबार आहे. मजबूत उलाढालीची धुरा दीर्घकाळ टिकणारी कामगिरी सुनिश्चित करते, ज्यामुळे हा शेतकरी कोणत्याही क्षेत्रासाठी एक विश्वासार्ह भागीदार बनतो. "
        />

        <Cards
          imgSrc={rotavator}
          prodLink="product/rotavator"
          info="
          या उच्च-कार्यक्षमतेच्या रोटाव्हेटरसह परिपूर्ण सीडबेड मिळवा. अनेक ब्लेडसह सुसज्ज, ते मातीला बारीक, अगदी सुसंगततेमध्ये मुरवते, लागवडीसाठी आदर्श. शिअर बोल्ट डिझाइनसह शक्तिशाली PTO (पॉवर टेक-ऑफ) शाफ्ट सुरळीत ऑपरेशन सुनिश्चित करते आणि अनपेक्षित ताणापासून ड्राइव्हट्रेनचे संरक्षण करते. परंतु ही कार्यक्षमता शक्तीच्या पलीकडे जाते - नाविन्यपूर्ण डिझाइनमध्ये 18-39% इंधन बचत होते, तुमचे ऑपरेशन किफायतशीर राहते. प्रीमियम बोरॉन स्टीलपासून तयार केलेले, ब्लेड केवळ अपवादात्मक माती शुद्धीकरणच देत नाहीत, तर डाउनटाइम आणि बदली खर्च कमी करून, मानक सामग्रीपेक्षा 50% जास्त आयुष्य वाढवतात."
        />
      </Container>
      <div className="contLink">
        <Link to="/product" className="header bg-blue">
          अधिक अवजारे बघा
        </Link>
      </div>

      {/* About us in short */}
      <h1 className="header">आमचे ध्येय</h1>
      <AboutUscomponent
        imgSrc={aboutUsImage}
        content="2021 मध्ये स्थापन झालेल्या आव्हाड इंजिनिअरिंग प्रायव्हेट
            लिमिटेडमध्ये, नावीन्यपूर्ण आणि गुणवत्तेद्वारे शेतीमध्ये क्रांती
            घडवणे हे आमचे ध्येय आहे. शान ब्रँड अंतर्गत, आम्ही उत्कृष्टतेच्या
            वचनबद्धतेनुसार अत्याधुनिक कृषी अवजारे तयार करतो. बिनधास्त गुणवत्तेवर
            लक्ष केंद्रित करून, आम्ही शेतकऱ्यांना विश्वसनीय उपायांसह सक्षम करतो,
            कृषी क्षेत्रातील उत्पादकता आणि टिकाऊपणा वाढवतो. एक डायनॅमिक खेळाडू
            म्हणून विश्वास ठेवला, आम्ही सतत अपेक्षांपेक्षा जास्त प्रयत्न करतो,
            याची खात्री करून घेतो की जगभरातील शेतकरी शेतात यश मिळवण्यासाठी शान
            उपकरणांवर अवलंबून राहू शकतात."
        imgPos={true}
      />
      {/* contact form */}
      <Contactform />
    </>
  );
};

export default Home;
