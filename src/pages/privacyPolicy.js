import { Box, Typography } from "@mui/material";
import ButtonWhatsappContact from "../components/buttons/buttonWhatsappContact";
import ButtonFill from "../components/buttons/buttonFill";
import styled from "@emotion/styled";
const ContactUs = styled(Box)(({ theme }) => ({
    display: 'flex', width: '100%',
    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
    borderTop: '1px solid #d9d9d9',
}))

const PrivacyPolicy = ({ language }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>

            <Box
                sx={{
                    height: { xs: 'calc(100vh - 50px)', sm: 'calc(100vh - 50px)', md: 'calc(100vh - 60px)' },
                    display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#08113b', textAlign: 'center',
                    boxSizing: 'border-box', px: { xs: '16px', sm: '32px', md: '64px' }
                }}>
                {language == 'en' ?
                    <>
                        Purchasing Guideline
                        <br />
                        Online Sales
                        <br />
                        - For a better shopping experience, our sales consultants are available to assist you via WhatsApp.
                        In-person Sales
                        <br />
                        - You can make your purchase in person at the addresses listed on the "Contact Us" page. If you require assistance
                        from a sales specialist for a better shopping experience, you can schedule your visit through Gopat Jewelry’s
                        WhatsApp.
                        <br />
                        Shipping Schedule
                        <br />
                        - Gopat orders within Tehran are delivered via courier from District 1, and orders to other cities are sent via express
                        Post.
                        <br />
                        - After placing an order, it will be handed over to the postal service within a maximum of 48 hours and will be
                        delivered to you within 3-5 business days.
                        <br />
                        - You can track postal orders using the tracking code in the link below.
                        <br />
                        https://tracking.post.ir/
                        <br />
                        All shipping and after-sales service costs for Gopat orders within Iran are free.
                        <br />
                        - The shipping method for international orders depends on the destination country. For further assistance, please
                        contact us via WhatsApp.
                        <br />
                        Return and Exchange Policies
                        <br />
                        - Gopat will repurchase its products with a 30% deduction, and in the case of custom-made orders, with a 38%
                        deduction.
                        <br />
                        - If you need to exchange the product size, it is possible within 7 days after purchase.
                        <br />
                        - All Gopat products come with a quality guarantee. In case of need any repairs or polishing, you can inform us via
                        WhatsApp.
                        <br />
                        - Lost or broken gemstones are not covered by Gopat’s warranty.
                        <br />
                        - If you require a product to be plated, this is possible for an additional fee.
                        <br />
                        Gemstone Certification
                        <br />
                        - The Gemological Institute of America (GIA) does not issue certificates for diamonds weighing less than 0.30 carats.
                        For custom-made orders with diamonds weighing over 0.30 carats, a GIA certificate with the inscribed code on the
                        stone will be provided.
                        <br />
                        - For diamonds weighing less than 0.30 carats, Gopat brand certification will be issued, which is valid for in-house
                        repurchase by the Gopat brand.
                        <br />
                        - It’s important to note that all diamonds used in Gopat products are natural and of the highest quality category.
                    </>
                    :
                    <>
                        نحوه خرید
                        <br />
                        فروش آنلاین
                        <br />
                        به دلیل تجربه خرید بهتر، مشاوران فروش از طریق واتساپ مجموعه در خدمت شما هستند.
                        <br />
                        فروش حضوری
                        <br />

                        به صورت حضوری می‌توانید از آدرس‌های درج شده در صفحه تماس با ما، خرید خود را انجام دهید. در صورت درخواست متخصص فروش برای راهنمایی و تجربه خرید بهتر، می‌توانید زمان حضور خود را از طریق واتساپ جواهرات گوپت هماهنگ کنید.
                        <br />

                        زمانبندی ارسال
                        <br />

                        سفارشات گوپت داخل تهران از طریق پیک از منطقه ۱ و سفارشات شهرستان از طریق پست پیشتاز ارسال می‌گردد.
                        پس از ثبت سفارش، حداکثر طی ۴۸ ساعت به پست تحویل می‌گردد و طی ۳-۵ روز کاری به دست شما میرسد.
                        پیگیری سفارشات پستی از طریق کد رهگیری و لینک زیر قابل انجام است.
                        <br />
                        https://tracking.post.ir/

                        <br />

                        تمامی هزینه‌های مراحل ارسال و خدمات پس از فروش برند گوپت برای سفارشات داخل ایران رایگان است.
                        <br />

                        نحوه ارسال سفارشات بین المللی بسته به کشور مقصد متغیر است. برای راهنمایی بیشتر به واتساپ مجموعه پیام دهید.
                        <br />

                        شرایط باز خرید و تعویض
                        <br />

                        برند گوپت محصولات خود را با کسر ۳۰٪ و در صورت سفارش شخصی سازی شده، با کسر ۳۸٪ از شما باز خرید می‌کند.
                        در صورت درخواست تعویض سایز محصول به مدت ۷ روز پس از خرید امکان آن فراهم است.
                        تمامی محصولات گوپت از نظر کیفی گارانتی هستند و در صورت نیاز به هرگونه تعمیر و پولیش می توانید درخواست خود را از طریق واتساپ مجموعه اطلاع دهید.
                        مفقودی سنگ جواهرات و شکستگی آنها، شامل گارانتی گوپت نمی باشد.
                        در صورت درخواست آبکاری محصول، با دریافت هزینه امکان پذیر است.
                        <br />

                        شناسنامه سنگ
                        <br />

                        انستیتو گوهرشناسی آمریکا (جی.آی.اِی) برای الماس وزن کمتر از ۰.۳۰ قیراط شناسنامه صادر نمی‌کند. در صورت سفارش های شخصی سازی شده با وزن بالای ۰.۳۰ قیراط، شناسنامه (جی.آی.ای) همراه با بررسی کد حک شده روی سنگ به شما اعطا می‌گردد.
                        برای الماس‌هایی با وزن کمتر از ۰.۳۰ قیراط، گواهی برند گوپت به شما اعطا می‌گردد و برای بازخرید به صورت درون سازمانی برای برند گوپت معتبر است.
                        لازم به ذکر است تمامی الماس‌های به کار رفته در محصولات گوپت طبیعی و در رده عالی قرار دارند.
                    </>
                }

            </Box>
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
    );
}

export default PrivacyPolicy;