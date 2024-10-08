import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled/macro";
import about from '../assets/Tishtar-unisex-bangle.jpg'
import about1 from '../assets/craftmanship.jpg'
import about2 from '../assets/Persepolis3.jpg'
import Header from "../components/header";
const Details = styled(Box)(({ theme }) => ({
    // display: 'flex',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
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


const About = ({ language }) => {
    return (
        <>
            <Header hideDetailsOnMobile={true} images={[about]} title={language == 'en' ?
                `About GOPAT` : `درباره گوپت`}
                subtitle={language == 'en' ? `Founded In Tehran, Iran.` : `تاسیس شده در تهران،ایران`} />

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

                {/* section about us */}
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    justifyContent: 'center',
                    width: { xs: '100%', md: '50%' },
                    padding: { xs: '16px 32px', md: '120px 64px' }, gap: { xs: '16px', md: '32px' }, boxSizing: 'border-box'
                }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                        }}>
                            {language == 'en' ?
                                `About GOPAT` : `درباره گوپت`}
                        </Typography>
                        <Typography variant="h1" sx={{
                            whiteSpace: 'nowrap', fontWeight: 500,
                            fontSize: { xs: '16px', sm: '18px', md: '18px' }, color: '#b3b3b3'
                        }}>
                            {language == 'en' ?

                                ` Founded In Tehran, Iran.` : `تاسیس شده در تهران،ایران`}
                        </Typography>
                    </Box>
                    <Typography sx={{
                        color: '#999', textAlign: 'center', width: '100%', fontWeight: 500,
                        fontSize: { xs: '14px', md: '16px' }
                    }}>
                        {language == 'en' ?
                            `
                        Gopat Fine Jewelry is a newly established Iranian luxury brand committed to elevating the essence of luxury through meticulous branding, an exceptional shopping journey, and comprehensive after-sales services, all aligned with international standards.

                        Gopat epitomizes a singular product design ethos, meticulously crafted with a focus on intricate details, embodying a timeless design identity. Our products epitomize style and epitomize a high-quality lifestyle that endures through the decades.`:
                            `جواهرات گوپت یک برند لوکس تازه تاسیس ایرانی است که با هدف ارتقاء مفهموم لوکس از طریق برندسازی، تجربه خرید عالی و خدمات پس از فروش، همگام با استانداردهای بین المللی فعالیت می‌کند. طراحی محصولات گوپت با داستان‌های اساطیری ایران باستان پشتیبانی می‌شود و در عین حال، طراحی بی زمان و سادگی آن می‌تواند از نسل‌ها به جا ماند. گوپت نمایانگر اصالت و کیفیت است.`}
                    </Typography>
                </Box>


                {/* image section one */}
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'row' },
                    justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                }}>
                    <Box sx={{
                        padding: { xs: '32px', md: '64px', lg: '64px 128px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                            <Typography variant="h4" sx={{
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                            }}>
                                {language == 'en' ? 'Craftmanship' : 'استادکاری'}</Typography>
                            <Typography variant="h1" sx={{
                                whiteSpace: 'nowrap', fontWeight: 500,
                                fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                            }}>
                                {language == 'en' ? 'Details' : 'جزعیات'}</Typography>
                        </Box>
                        <Typography sx={{
                            color: '#999', textAlign: 'center', width: '100%', fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' }
                        }}>
                            {language == 'en' ?
                                `At Gopat, our jewelry features bodies crafted from premium Italian 950 and 925 silver for enduring quality.

                            In the Tishtar collection, each piece boasts a brilliant-cut natural diamond weighing 0.07 carats, chosen for its superior 4C's attributes.

                            Handcrafted without molds or casting, our products ensure both the silver's elasticity and durability, embodying artisanal excellence.`
                                : `بدنه جواهرات گوپت از نقره سوئیسی و عیار ایتالیایی تشکیل شده تا کیفیت پولیش نهایی، ماندگاری محصول، قوانین محیط کار و مسائل زیست محیطی را رعایت کند. تمامی محصولات گوپت دستساز بوده و از قالب و ریخته‌گری استفاده نشده است. همین امر باعث افزایش چشمگیر دوام محصول می‌شود و در نهایت هنر دست را به نمایش می‌گذارد.`}             </Typography>
                    </Box>

                    <Box sx={{
                        width: { xs: '100%', md: '70%' }, backgroundColor: '#d9d9d9',
                        backgroundImage: `url(${about1})`,
                        aspectRatio: { xs: '4/3', md: '1/1' },
                        backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                    }} />

                </Box>

                {/* image section two */}
                <Box sx={{
                    my: { xs: '16px', md: '32px' },
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between', boxSizing: 'border-box', px: { xs: '16px', md: '0' },
                }}>
                    <Box sx={{
                        width: { xs: '100%', md: '70%' },
                        backgroundImage: `url(${about2})`, backgroundColor: '#d9d9d9',
                        aspectRatio: { xs: '4/3', md: '1/1' },
                        backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
                    }} />
                    <Box sx={{
                        padding: { xs: '32px', md: '64px', lg: '64px 128px' }, boxSizing: 'border-box', width: { xs: '100%', md: '50%' },
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: { xs: '16px', md: '32px' }
                    }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
                            <Typography variant="h4" sx={{
                                whiteSpace: 'nowrap', fontWeight: 500,
                                fontSize: { xs: '24px', sm: '28px', md: '32px' }, fontWeight: 500, color: '#08113B'
                            }}>
                                {language == 'en' ? 'Concept' : 'مفهوم کلی'}</Typography>
                            <Typography variant="h1" sx={{
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '14px', md: '16px' }, color: '#b3b3b3'
                            }}>
                                {language == 'en' ? 'The Myth' : 'افسانه'}</Typography>
                        </Box>
                        <Typography sx={{
                            color: '#999', textAlign: 'center', width: '100%', fontWeight: 500,
                            fontSize: { xs: '14px', md: '16px' }
                        }}>
                            {language == 'en' ?
                                `The name "Gopat" finds its origins in the legendary guardian of the Parsah Palace entrance (now Takhte Jamshid). Gopat Jewelry holds dear its Iranian heritage and endeavors to contemporize and internationalize its rich history, paying homage to this cherished land.`
                                :
                                `نام گوپت برگرفته از جانوری اساطیری است که نگهبانی کاخ پارسه (تخت جمشید کنونی) را بر عهده دارد. هر مجموعه گوپت وظیفه ایجاد احساسی بهتر در مخاطب دارد و از داستان های اساطیری برای این امر کمک می‌گیرد. اولین روایت، ستاره تیشتر است که نماد امید در دل تاریکی است. در مجموعه تیشتر، تک الماس طبیعی ۰.۰۷ قیراطی نقش ستاره را بازی می‌کند و برش‌های دوار آن، نقش سیارک را. تیم گوپت معتقد است تجربه کلید به جلو رانده شدن است و به همین جهت، میراث هر ملتی را باید پاس داشت و به گوش جهانیان رساند. `
                            }    </Typography>
                    </Box>
                </Box>

            </Box>
        </>
    );
}

export default About;