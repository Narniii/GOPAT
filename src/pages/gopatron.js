import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import about from '../assets/about.svg'
import polish from '../assets/polish.svg'
import repurchasing from '../assets/repurchase.svg'
import gifting from '../assets/gifting.svg'
import counseling from '../assets/counseling.svg'
import deliveries from '../assets/deliveries.svg'
import contact from '../assets/contact.svg'
import gopatron from '../assets/gopatron.svg'
import ButtonWhatsappContact from "../components/buttonWhatsappContact";
import ButtonFill from "../components/buttonFill";
const Details = styled(Box)(({ theme }) => ({
    // display: 'flex',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
}))
const ContactUs = styled(Box)(({ theme }) => ({
    display: 'flex', width: '100%',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    borderTop: '1px solid #d9d9d9',
}))

const ImageScroll = styled(Box)(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    // height: '100%',
    overflowY: 'hidden',
    scrollBehavior: 'smooth',
    overflowX: 'scroll',
    '&::-webkit-scrollbar': {
        background: 'transparent',
        height: '8px',
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        height: '8px',
        width: '8px',
        background: '#08113b',
        color: '#08113b',
        border: 'none',
        borderRadius: '0px'
    },
    '&::-webkit-scrollbar-button': {
        display: 'none'
    },
}))
const Image = styled(Box)(({ theme }) => ({
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
    backgroundColor: '#999',
    height: '100%',
    aspectRatio: '1/1'
}))


const Gopatron = () => {
    const sections = [
        {
            title: 'Free Polishing', subtitle: 'Service', description: 'At Gopat, we believe in the longevity of our products, offering free lifetime polishing services to keep your jewelry in its best condition for years to come.',
            image: polish
        },
        {
            title: 'Re-purchasing', subtitle: 'Policies',
            description: 'In the event that you need to sell your Gopat product, we provide a hassle-free solution by offering to repurchase it from you. Standard items are bought back at a 30% discount, while customized pieces are repurchased with a generous 38% discount.',
            image: repurchasing
        },
        {
            title: 'Free Deliveries', subtitle: 'Exclusive for Iran',
            description: 'Enjoy the convenience of complimentary deliveries and shippings on all your Gopat purchases, ensuring a seamless and cost-effective experience from selection to delivery.',
            image: deliveries
        },
        {
            title: 'Private Counseling', subtitle: 'Meeting',
            description: 'For personalized assistance and guidance, we offer private counseling sessions with our experts. Whether you are seeking advice on selecting the perfect piece or need assistance with jewelry care, we are here to ensure your experience is enjoyable and tailored to your needs.',
            image: counseling
        },
        {
            title: 'Gifting', subtitle: 'Journey',
            description: 'Let us handle the entire gifting journey for you. If youre interested in purchasing a gift from Gopat but unable to manage the process yourself, we take care of everything from selection to delivery, ensuring a seamless and thoughtful gifting experience.',
            image: gifting
        },

    ]
    return (
        <>
            <Box sx={{
                // height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                height: { xs: '100%', md: 'calc(100vh - 60px)' },
                width: '100%', boxSizing: 'border-box',
                display: 'flex', flexDirection: { xs: 'column', md: 'row' },
                // mb: { xs: 'none', md: '60px' }
            }}>
                <ImageScroll sx={{
                    height: { xs: '420px', md: '100%' },
                }}>
                    <Box sx={{
                        display: 'flex',
                        height: '100%', width: '100%',
                        boxSizing: 'border-box',
                        width: 'max-content', flexWrap: 'nowrap'
                    }}>
                        <Image sx={{
                            backgroundImage: `url(${gopatron})`,
                            width: { xs: '100vw', md: '100%' }
                        }} />
                        <Image sx={{
                            backgroundImage: `url(${about})`,
                            width: { xs: '100vw', md: '100%' }
                        }} />
                        <Image sx={{
                            backgroundImage: `url(${contact})`,
                            width: { xs: '100vw', md: '100%' }
                        }} />
                    </Box>
                </ImageScroll>
                <Details sx={{
                    display: { xs: 'none', md: 'flex' },
                    mx: { xs: '32px', md: '100px' },
                    my: { xs: '50px', md: '60px' },
                    gap: { xs: '8px', sm: '12px', md: '16px' }
                }}>
                    <Typography variant="h1" sx={{
                        whiteSpace: 'nowrap',
                        fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                    }}>
                        Gopatron</Typography>
                    <Typography variant="h1" sx={{
                        whiteSpace: 'nowrap', fontWeight: 500,
                        fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                    }}>
                        Customer Service
                    </Typography>
                </Details>
            </Box>


            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                {/* section about gopatron */}
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '50%' },
                    padding: { xs: '32px 32px', md: '120px 64px' }, gap: { xs: '16px', md: '32px' }, boxSizing: 'border-box'
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            Gopatron</Typography>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                        }}>
                            Customer Service
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: '#999', textAlign: 'center', width: '100%',
                        fontSize: { xs: '14px', md: '16px' }, fontWeight: 500,
                    }}>
                        Gopat prioritizes after-sale service as an integral aspect of the luxury world, understanding its significance in fostering enduring connections with customers. Committed to providing unparalleled service, Gopat goes above and beyond to ensure every client receives the utmost care and attention, striving to create a lasting bond built on trust and satisfaction.
                    </Typography>
                </Box>

                {sections.map((section, index) => {
                    return (
                        <Box sx={{
                            mb: { xs: '16px', md: '32px' },
                            width: '100%',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: index % 2 == 0 ? 'row-reverse' : 'row' },
                            justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                        }}>
                            <Box sx={{
                                width: '100%', backgroundColor: '#d9d9d9',
                                backgroundImage: `url(${section.image})`,
                                aspectRatio: { xs: '4/3', md: '1/1' },
                                backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                            }} />

                            <Box sx={{
                                padding: { xs: '32px', md: '64px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                                    <Typography variant="h4" sx={{
                                        whiteSpace: 'nowrap',
                                        fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                                    }}>
                                        {section.title}</Typography>
                                    <Typography variant="h1" sx={{
                                        whiteSpace: 'nowrap', fontWeight: 500,
                                        fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                                    }}>
                                        {section.subtitle}</Typography>
                                </Box>
                                <Typography sx={{
                                    color: '#999', textAlign: 'center', width: '100%',
                                    fontSize: { xs: '14px', md: '16px' }, fontWeight: 500,
                                }}>
                                    {section.description}
                                </Typography>
                            </Box>


                        </Box>

                    )
                })}



                <ContactUs sx={{
                    py: { xs: '32px', md: '64px' },
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mb: '16px' }}>
                        <Typography variant="h6" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '18px', sm: '22px', md: '24px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            Further Assistant?
                        </Typography>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                        }}>
                            Whatsapp & Call
                        </Typography>
                    </Box>
                    <ButtonWhatsappContact width={'100%'} maxwidth={'290px'} mb={'8px'} text={'Whatsapp Link'} />
                    <ButtonFill width={'100%'} maxwidth={'290px'} text={'+98 910 674 19 71'} />
                </ContactUs>

            </Box>
        </>
    );
}

export default Gopatron;