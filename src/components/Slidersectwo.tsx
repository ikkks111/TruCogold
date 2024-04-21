import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Button, Heading, Container, } from "@chakra-ui/react";


function Slidersectwo() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
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
      <Box className="slid_two">
        <Container maxW='1750px'>
          <Box className="nossos_jogos_contin nossos_jogos_contin_v2">
            <Box className="nossos_jogos_hp">
              <Heading as='h2'>Principais jogos</Heading>
              <Text>Explore a popular série de jogos do TrucoGold: bônus infinitos e emoção estãoesperando por você para desafiar!</Text>
            </Box>
            <Button className="see_all_btn see_all_btn_v2 d_non_v1 g_brd">
              See All Games
              <img src="img/se_all_btn.svg" alt="" className='se_all_btn' />
            </Button>
          </Box>

          <div className="slider-container">
            <Slider {...settings} className="slider_bx slider_bx_v2">
              <div>
                <Box className="sld_two_img_bx">
                  <img src="img/slid_two_img_01.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_02.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_03.png" alt="" className='slid_two_img_02' />
                </Box>
              </div>
              <div>
                <Box className="sld_two_img_bx">
                  <img src="img/slid_two_img_04.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_05.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_06.png" alt="" className='slid_two_img_02' />
                </Box>
              </div>
              <div>
                <Box className="sld_two_img_bx">
                  <img src="img/slid_two_img_04.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_05.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_06.png" alt="" className='slid_two_img_02' />
                </Box>
              </div>
              <div>
                <Box className="sld_two_img_bx">
                  <img src="img/slid_two_img_04.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_05.png" alt="" className='slid_two_img_02' />
                  <img src="img/slid_two_img_06.png" alt="" className='slid_two_img_02' />
                </Box>
              </div>
            </Slider>
          </div>
        </Container>
        <Button className="see_all_btn g_brd d_non_v2 see_all_btn_v2">
          See All Games
          <img src="img/se_all_btn.svg" alt="" className='se_all_btn' />
        </Button>
      </Box>
    </>
  );
}

export default Slidersectwo;
