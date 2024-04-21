import React from 'react'
import {
    Box,
    Container,
    Heading,
    Button,
    Text,
} from "@chakra-ui/react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Secthree() {
    return (
        <>
            <Box className='Secthree_min'>
                <Box className='truco_bx'>
                    <Box className="one_sec_min">
                        <img src="img/three_sec_bg.jpeg" alt="" className='one_sec_bg' />
                        <img src="img/three_sec_bg_mobo.jpeg" alt="" className='one_sec_bg_mobo' />
                        <Box className='sec_contin sec_contin_v2a'>
                            <img src="img/logo_big_img.png" alt="" className="logo_big_img" />
                            <Text>TrucoGold é uma plataforma de jogos de ouro real no estilo brasileiro. Oferecemosuma ampla variedade de jogos de cassino emocionantes, incluindo caça-níqueisclássicos, batalhas de dragão-tigre e jogos de corrida.</Text>
                            <Text>Usamos tecnologia gráfica de última geração para preparar visuais de primeira linha para cada jogo. Oferecemos aosusuários um bônus de primeiro depósito e você pode ganhar bônus em todas as rodadas de apostas. Seja você um novato ou um jogador experiente, você pode sentiro enorme potencial de recompensas em cada clique, vivenciando verdadeiramenteuma experiência de jogo emocionante e divertida no estilo brasileiro.</Text>
                            <Button className='btn_bg btn_bg_v2a' as="a" href="https://baxi0002100ossapk.plernberr.com/Trucogoldqudao/Trucogold-channel-1652302.apk" target="_blank">
                                <img src="img/btn_bg.png" alt="" className='btn_bg' />
                                <img src="img/dwlo_ic.svg" alt="" className="dwlo_ic dwlo_ic_red " />
                                <span>DOWNLOAD APP</span>
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='faq_min'>
                    <Container maxW='1750px' className="">
                        <Box className='faq_ph'>
                            <Heading as='h3'>Perguntas frequentes</Heading>
                            <Text>Se você não encontrar a pergunta que procura, temos atendimento ao cliente 24 horas no jogo para atendê-lo.</Text>
                        </Box>

                        <Accordion className='acod_min'>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Como cadastrar uma conta TrucoGold?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                    Você pode facilmente criar uma conta TrucoGold clicando no botão de download. Após baixar nosso aplicativo, basta se cadastrar com seu número de celular para começar a desfrutar de nossos diversos jogos.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            É legal jogar TrucoGold no Brasil?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                    No Brasil, jogar TrucoGold é totalmente legal. A lei brasileira permite que os cidadãos participem de jogos baseados em habilidades e estratégias, e oferecemos um ambiente de jogo que cumpre a lei. Os jogadores podem jogar no TrucoGold com confiança e encorajamos todos a jogar com responsabilidade.</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Como o TrucoGold garante a justiça do jogo?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                    Na TrucoGold temos o compromisso de manter um ambiente de jogo justo. Utilizamos um gerador de números aleatórios certificado internacionalmente para garantir que todos os resultados do jogo sejam completamente aleatórios, proporcionando a cada usuário uma experiência confiável.</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            O que devo fazer se tiver algum problema com o jogo?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <Text>
                                    Se você encontrar algum problema ao jogar no TrucoGold, nossa equipe de suporte ao cliente está pronta para ajudá-lo. Oferecemos suporte técnico 24 horas por dia, 7 dias por semana, via e-mail, telefone ou chat ao vivo.
</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            A minha informação pessoal está segura?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}><Text>
                                TrucoGold utiliza tecnologia avançada de criptografia e segue rigorosas regulamentações de proteção de dados para garantir a segurança de suas informações pessoais. Você pode jogar com confiança sabendo que seus dados estão seguros.</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left'>
                                            É realmente possível ganhar dinheiro jogando TrucoGold?
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}><Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.</Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
