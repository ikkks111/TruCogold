import React from 'react'
import { Box, Text, Button } from "@chakra-ui/react";


export default function Secone() {
  return (
    <>
      <Box className="one_sec_min">
        <a href="">
          <img src="img/logo.png" alt="" className='logo' />
        </a>

        <img src="img/one_sec_bg.jpeg" alt="" className='one_sec_bg' />
        <img src="img/one_sec_bg_mobo.jpeg" alt="" className='one_sec_bg_mobo' />
        <Box className='sec_contin'>
          <img src="img/trucog_img.png" alt="" className='trucog_img' />
          <Text>Comece sua jornada com<br /> o TrucoGold, uma apaixonante e inovadora plataforma de jogos em ouro real
            que reúne os slots mais populares e uma variedade de jogoseletrônicos. Esteja você procurando uma
            aventura emocionante ou ganhando muitodinheiro,
            nosso aplicativo atende a todas as suas necessidades de jogo.
          </Text>


          <Button className='btn_bg'>
            <img src="img/btn_bg.png" alt="" className='btn_bg' />
            <span>START YOU JOURNEY</span>
          </Button>
        </Box>
      </Box>
    </>
  )
}
