import express from 'express';
const app = express();

app.get('/coupons', (req, res) => {

    let couponData = {
        recognizePage: {
            titleRecognizePage: 'I recognized that you arrived at Azrieli Mall, There are 3 suitable coupons for you',
            imageGenie: 'https://medinaschool.org/files/images/2017/11/70fded8b4b041393ab3767ba212fc902.png',
            logoAzrieli: 'https://www.tips4u.co.il/wp-content/uploads/2018/05/900-300-siteNewLogo398383.jpg',
        },
        descriptions: {
            descriptionSteimatzky: 'Your coupon to the "Steimatzky" store',
            descriptionSweetime: 'Your coupon to the "Sweetime" store',
            descriptionSuperpharm: 'Your coupon to the "Super-Pharm" store',
        },
        coupons: {
            couponSteimatzky: 'https://www.cashyo.co.il/tmp/media/cil/uploads/logos_cashyo/steimatzky_logo/w415h225q80fit.png.webp',
            couponSweetime: 'https://res.cloudinary.com/hljdjmqlh/image/upload/ar_1:1,c_fill,f_auto,fl_lossy,q_auto/v1653942356/curx4hjv89mu2emhysrd.jpg',
            couponSuperpharm: 'https://logovectorseek.com/wp-content/uploads/2021/10/super-pharm-logo-vector.png',
        },
        qrcodes: {
            qrcodeSteimatzky: 'https://is.gd/qN6QsR',
            qrcodeSweetime: 'https://is.gd/jKuT2D',
            qrcodeSuperpharm: 'https://is.gd/smokGa',
        },
    };

    res.json(couponData);

});

app.get('/gifts', (req, res) => {

    let giftsData = {
            apartment: 'https://amiel.club/uploads/posts/2022-09/1664444424_24-amiel-club-p-kvartiri-v-izraile-vkontakte-24.jpg',
            car: 'https://adt.by/wp-content/uploads/2021/04/priz-avtomobil.jpg',
            vacation: 'https://oteli-zamki.ru/israel/images/eilat4.jpg',
            imageGenie: 'https://medinaschool.org/files/images/2017/11/70fded8b4b041393ab3767ba212fc902.png',
        
    };

    res.json(giftsData);

});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server was started on port ${PORT}`);
});
