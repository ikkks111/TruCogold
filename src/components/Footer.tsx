import React from 'react'
import {
    Box,
    Container,
    Heading,
    Button,
    Text,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box className='footer_min'>
        <Container maxW='1750px' className="">
          <img src="img/logo_footer.png" alt="" className="logo_footer" />
          <Box className='footer_contin'>
            <Heading as={'h2'}>100% SAFE Protected connection and encrypted data.</Heading>
            <Text>Jogo Responsável:</Text>
            <Text className='set_color'>Os jogadores devem ter 18 anos ou mais para participar do trucogold. O jogo tem potencial para ser viciante e representar riscos financeiros. Por favor, jogue com responsabilidade.</Text>
            <Text>100% legal:</Text>
            <Text className='set_color'>TrucoGold é um software de jogo de ouro real 100% legal. Cumprimos todas as leis e regulamentos aplicáveis ​​para fornecer aos jogadores um ambiente de jogo seguro e justo.</Text>
            <span className='foot_spn'>Copyright © 2022 TrucoGold® All Rights Reserved</span>
          </Box>
        </Container>
      </Box>
    </>
  )
}
