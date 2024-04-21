import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Button, Heading, Container } from "@chakra-ui/react";


function Slidersec() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Container maxW='1550px' className="conta_cent">

        <div className="slider-container">
          <Slider {...settings} className="slider_bx">
            <div>
              <Box className="slid_bx_contin_min slid_bx_contin_min_respo">
                <img src="img/slid_bx_img_01.svg" alt="" className='slid_bx_img_01' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Grandes bônus</Heading>
                  <Text>Preparamos muitos bônus de boas-vindas, bônus de primeiro depósito e bônus de agência. Você pode usar suas habilidades e sabedoria para ganhar grandes quantias de dinheiro real em todos os jogos.</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className="slid_bx_contin_min">
                <img src="img/slid_bx_img_02.svg" alt="" className='slid_bx_img_02' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Retirada instantânea</Heading>
                  <Text>A retirada é rápida e a experiência é tranquila. A alegria da vitória, não espere</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className="slid_bx_contin_min">
                <img src="img/slid_bx_img_03.svg" alt="" className='slid_bx_img_03' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Segurança total</Heading>
                  <Text>Absolutamente seguro, fique à vontadepara jogar. Temos o compromisso de fornecer a você um ambiente de jogoseguro. e</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className="slid_bx_contin_min">
                <img src="img/slid_bx_img_01.svg" alt="" className='slid_bx_img_01' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Grandes bônus</Heading>
                  <Text>Preparamos muitos bônus de boas-vindas, bônus de primeiro depósito e bônus de agência. Você pode usar suas habilidades e sabedoria para ganhar grandes quantias de dinheiro real em todos os jogos.</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className="slid_bx_contin_min">
                <img src="img/slid_bx_img_02.svg" alt="" className='slid_bx_img_02' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Retirada instantânea</Heading>
                  <Text>A retirada é rápida e a experiência é tranquila. A alegria da vitória, não espere</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className="slid_bx_contin_min">
                <img src="img/slid_bx_img_03.svg" alt="" className='slid_bx_img_03' />
                <Box className="slid_bx_contin">
                  <Heading as="h2">Segurança total</Heading>
                  <Text>Absolutamente seguro, fique à vontadepara jogar. Temos o compromisso de fornecer a você um ambiente de jogoseguro. e</Text>
                </Box>
              </Box>
            </div>
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default Slidersec;
