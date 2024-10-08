import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import craftmanship from '../assets/craftmanship.jpg'
import polish from '../assets/polishing.jpg'
import repurchasing from '../assets/packaging.jpg'
import gifting from '../assets/GOPAT-Gifting.jpg'
import counseling from '../assets/GOPAT-Private-Consulting.jpg'
import deliveries from '../assets/Avacenter.jpg'
import gopatron from '../assets/1-Campaign.jpg'
import gopatron2 from '../assets/2-Customizing-Jewelry.jpg'
import ButtonWhatsappContact from "../components/buttons/buttonWhatsappContact";
import ButtonFill from "../components/buttons/buttonFill";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
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


const Gopatron = ({ language }) => {
    const sections = [
        {
            title: 'Free Polishing',
            subtitle: 'Service',
            description: 'At Gopat, we believe in the longevity of our products, offering free lifetime polishing services to keep your jewelry in its best condition for years to come.',
            image: polish,
            id: 'polishing',
            titleFa: 'خدمات رایگان پولیش',
            subtitleFa: 'سرویس',
            descriptionFa: 'در گوپت، ما به دوام محصولات خود پایبندیم و خدمات پولیش رایگان و مادام‌العمر را ارائه می‌دهیم تا جواهرات شما در بهترین شرایط برای سال‌ها باقی بمانند.',
        },
        {
            title: 'Re-purchasing',
            subtitle: 'Policies',
            description: 'In the event that you need to sell your Gopat product, we provide a hassle-free solution by offering to repurchase it from you. Standard items are bought back at a 30% discount, while customized pieces are repurchased with a generous 38% discount.',
            image: repurchasing,
            id: 'repurchasing',
            titleFa: 'بازخرید',
            subtitleFa: 'قوانین',
            descriptionFa: 'در صورتی که نیاز به فروش محصول گوپت خود دارید، ما یک راه‌حل بدون دردسر را با ارائه خدمات خرید مجدد فراهم کرده‌ایم. محصولات فروشگاهی با کسر ۳۰ درصد و قطعات سفارشی با کسر ۳۸ درصد باز خرید می‌شوند.',
        },
        {
            title: 'Free Deliveries',
            subtitle: 'Exclusive for Iran',
            description: 'Enjoy the convenience of complimentary deliveries and shippings on all your Gopat purchases, ensuring a seamless and cost-effective experience from selection to delivery.',
            image: deliveries, id: 'deliveries',
            titleFa: 'ارسال رایگان داخلی',
            subtitleFa: 'انحصاری برای ایران',
            descriptionFa: 'از راحتی ارسال و تحویل رایگان برای تمامی خریدهای گوپت لذت ببرید و تجربه‌ای بدون هزینه اضافی از انتخاب تا تحویل را تجربه کنید.',
        },
        {
            title: 'Private Counseling',
            subtitle: 'Meeting',
            description: 'For personalized assistance and guidance, we offer private counseling sessions with our experts. Whether you are seeking advice on selecting the perfect piece or need assistance with jewelry care, we are here to ensure your experience is enjoyable and tailored to your needs.',
            image: counseling, id: 'counseling',
            titleFa: 'مشاوره و طراحی اختصاصی',
            subtitleFa: 'جلسات مشاوره',
            descriptionFa: 'برای دریافت مشاوره و طراحی اختصاصی، ما جلسات خصوصی با کارشناسان خود را ارائه می‌دهیم. چه برای انتخاب قطعه‌ای خاص نیاز به راهنمایی داشته باشید و چه برای مراقبت از جواهرات، ما اینجا هستیم تا تجربه‌ای لذت‌بخش و متناسب با نیازهای شما ارائه دهیم.',
        },
        {
            title: 'Gifting',
            subtitle: 'Journey',
            description: 'Let us handle the entire gifting journey for you. If youre interested in purchasing a gift from Gopat but unable to manage the process yourself, we take care of everything from selection to delivery, ensuring a seamless and thoughtful gifting experience.',
            image: gifting, id: 'gifting',
            titleFa: 'هدیه دادن',
            subtitleFa: 'مسیر',
            descriptionFa: 'اجازه دهید ما کل مسیر هدیه دادن را برای شما مدیریت کنیم. اگر قصد خرید هدیه از گوپت را دارید و نمی‌توانید روند آن را خودتان مدیریت کنید، ما از انتخاب تا تحویل همه چیز را بر عهده می‌گیریم و یک تجربه هدیه‌دهی بی‌نقص و مخصوص را تضمین می‌کنیم.',
        },

    ]
    useEffect(() => {
        const id = window.location.hash ? window.location.hash.replace('#', '') : undefined
        if (id) {
            window.document.getElementById(id).scrollIntoView({ behavior: "smooth" })
        }
    }, [window.location.hash])
    return (
        <>
            <Header hideDetailsOnMobile={true} images={[gopatron, gopatron2]}
                title={language == 'en' ? `Gopatron` : `گوپترون`}
                subtitle={language == 'en' ? `Customer Service` : 'خدمان مشتریان'} />
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
                            {language == 'en' ? `Gopatron` : `گوپترون سرویس`}</Typography>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                        }}>
                            {language == 'en' ? `Customer Service` : 'خدمان مشتریان'}
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: '#999', textAlign: 'center', width: '100%',
                        fontSize: { xs: '14px', md: '16px' }, fontWeight: 500,
                    }}>
                        {language == 'en' ? `
                        Gopat prioritizes after-sale service as an integral aspect of the luxury world, understanding its significance in fostering enduring connections with customers. Committed to providing unparalleled service, Gopat goes above and beyond to ensure every client receives the utmost care and attention, striving to create a lasting bond built on trust and satisfaction.
                        ` : `گوپت خدمات پس از فروش را به عنوان بخشی جدایی‌ناپذیر از دنیای لوکس در نظر می‌گیرد و به اهمیت آن در ایجاد ارتباط پایدار با مشتریان واقف است. تیم گوپت متعهد است تا هر مشتری از نهایت توجه و مراقبت برخوردار شود و ارتباطی طولانی‌مدت بر پایه اعتماد و رضایت شکل گیرد.`}
                    </Typography>
                </Box>

                {sections.map((section, index) => {
                    return (
                        <div id={section.id} style={{ width: '100%' }} >
                            <Box key={section.id} sx={{
                                mb: { xs: '16px', md: '32px' },
                                width: '100%',
                                display: 'flex',
                                flexDirection: { xs: 'column', md: index % 2 == 0 ? 'row-reverse' : 'row' },
                                justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                            }}>
                                <Box sx={{
                                    width: { xs: '100%', md: '70%' }, backgroundColor: '#d9d9d9',
                                    backgroundImage: `url(${section.image})`,
                                    aspectRatio: { xs: '4/3', md: '1/1' },
                                    backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                                }} />

                                <Box sx={{
                                    padding: { xs: '32px', md: '64px', lg: '64px 128px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                                }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                                        <Typography variant="h4" sx={{
                                            whiteSpace: 'nowrap',
                                            fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                                        }}>
                                            {language == 'en' ? section.title : section.titleFa}</Typography>
                                        <Typography variant="h1" sx={{
                                            whiteSpace: 'nowrap', fontWeight: 500,
                                            fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                                        }}>
                                            {language == 'en' ? section.subtitle : section.subtitleFa}</Typography>
                                    </Box>
                                    <Typography sx={{
                                        color: '#999', textAlign: 'center', width: '100%',
                                        fontSize: { xs: '14px', md: '16px' }, fontWeight: 500,
                                    }}>
                                        {language == 'en' ? section.description : section.descriptionFa}
                                    </Typography>
                                </Box>

                            </Box>
                        </div>

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
                            {language == 'en' ?
                                'Further Assistant' :
                                'راهنمایی بیشتر'
                            }
                        </Typography>
                        <Typography variant="p" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                        }}>
                            {language == 'en' ? 'Whatsapp & Call' : 'واتساپ و تماس'}
                        </Typography>
                    </Box>
                    <ButtonWhatsappContact width={'100%'} maxwidth={'290px'} mb={'8px'} text={language == 'en' ? 'Whatsapp Link' : 'لینک واتساپ'} />
                    <ButtonFill width={'100%'} maxwidth={'290px'} text={'+98 910 674 19 71'} />
                </ContactUs>

            </Box>
        </>
    );
}

export default Gopatron;