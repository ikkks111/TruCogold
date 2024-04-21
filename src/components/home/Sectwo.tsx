import {
    Box,
    Container,
    SimpleGrid,
    GridItem,
    Heading,
    Button,
    Text,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slidersec from "../Slidersec";
import Slidersectwo from "../Slidersectwo";



export default function Sectwo() {
    return (
        <>
            <Box className='Sectwo_min'>
                <Box className='trugold_contin'>
                    <Heading as='h2'>TrucoGold jogue online agora mesmo.</Heading>
                    <Text>De<br /> slots clássicos a jogos de estratégia, TrucoGold oferece uma variedade de tipos de jogos para garantir que cada jogador encontre o seu favorito.</Text>
                    <Button className='start_btn btn_bg' as="a" href="https://baxi0002100ossapk.plernberr.com/Trucogoldqudao/Trucogold-channel-1652302.apk" target="_blank">
                        <img src="img/btn_bg.png" alt="" className='btn_bg' />
                        <span>
                            <img src="img/dwlo_ic.svg" alt="" className='dwlo_ic' />
                            DOWNLOAD APP
                        </span>
                    </Button>
                    <img src="img/Samsung_img.png" alt="" className='Samsung_img' />
                </Box>
                <Box className='slid_bg_box'>
                    {/* <img src="img/slid_bg.png" alt="" className='slid_bg' /> */}
                    <Slidersec />
                </Box>
            </Box>

            <Box className="nossos_jogos_min">
                <Container maxW='1750px' className="conta_cent">
                    <Box className="nossos_jogos_contin">
                        <Box className="nossos_jogos_hp">
                            <Heading as='h2'>Nossos jogos</Heading>
                            <Text>Prometemos trazer a você uma experiência de jogo sem precedentes e um banquetevisual deslumbrante.</Text>
                        </Box>
                        <Button className="see_all_btn g_brd d_non_v1" as="a" href="https://baxi0002100ossapk.plernberr.com/Trucogoldqudao/Trucogold-channel-1652302.apk" target="_blank">
                            See All Games
                            <img src="img/se_all_btn.svg" alt="" className='se_all_btn' />
                        </Button>
                    </Box>
                    <SimpleGrid columns={12} columnGap={3} rowGap={3}>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_01.png" alt="" className='Nossos_jogos_img_01' />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_02.png" alt="" className='Nossos_jogos_img_01' />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_03.png" alt="" className='Nossos_jogos_img_01' />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_04.png" alt="" className='Nossos_jogos_img_01 d_non' />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_05.png" alt="" className='Nossos_jogos_img_01 d_non' />
                            </Box>
                        </GridItem>
                        <GridItem colSpan={[12, 12, 6, 4]}>
                            <Box>
                                <img src="img/Nossos_jogos_img_06.png" alt="" className='Nossos_jogos_img_01 d_non' />
                            </Box>
                        </GridItem>
                    </SimpleGrid>
                    <Button className="see_all_btn g_brd d_non_v2" as="a" href="https://baxi0002100ossapk.plernberr.com/Trucogoldqudao/Trucogold-channel-1652302.apk" target="_blank">
                        See All Games
                        <img src="img/se_all_btn.svg" alt="" className='se_all_btn' />
                    </Button>
                </Container>
            </Box>

            <Box className="slid_two_min_bg">
                <Slidersectwo />
            </Box>
        </>
    )
}
