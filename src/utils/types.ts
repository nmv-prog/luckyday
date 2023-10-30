export interface ObjectType{
    recognizePage?: RecognizePageType;
    descriptions?: DescriptionsType;
    coupons?: CouponsType;
    qrcodes?: QRCodesType;
}

export interface RecognizePageType {
    titleRecognizePage?: string;
    imageGenie?: string;
    logoAzrieli?: string;
}

export interface DescriptionsType{
    descriptionSteimatzky: string;
    descriptionSweetime: string;
    descriptionSuperpharm: string;
}

export interface CouponsType extends DescriptionsType{
    couponSteimatzky: string;
    couponSweetime: string;
    couponSuperpharm: string;
}

export interface QRCodesType {
    [key: string]: string | undefined;
    qrcodeSteimatzky?: string;
    qrcodeSweetime?: string;
    qrcodeSuperpharm?: string;
}
