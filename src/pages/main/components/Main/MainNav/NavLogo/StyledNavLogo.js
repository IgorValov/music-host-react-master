import React from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../themes';

export function StyledNavLogo() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <svg
            width="114px"
            height="18px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 114 18"
        >
            <path
                d="M3.19264 17.414C1.36821 18.4678 0.0576172 17.5896 0.0576172 16.0275C0.0576172 14.3647 0.0576172 9.37523 0.0576172 9.37523C0.0576172 9.37523 0.0576172 4.38579 0.0576172 2.72291C0.0576172 1.16086 1.3674 0.28267 3.19264 1.3365C6.03415 2.97742 14.5579 7.90181 14.5579 7.90181C15.6912 8.55639 15.6912 10.1932 14.5579 10.8478C14.5579 10.8486 6.03415 15.773 3.19264 17.414Z"
                fill="#00C1FF"
            />
            <path
                d="M12.5745 17.413C10.75 18.4668 9.43945 17.5886 9.43945 16.0266C9.43945 14.3637 9.43945 9.37425 9.43945 9.37425C9.43945 9.37425 9.43945 4.38481 9.43945 2.72193C9.43945 1.15989 10.7492 0.281694 12.5745 1.33553C15.3534 2.94067 23.6901 7.75691 23.6901 7.75691C24.9349 8.47573 24.9349 10.2728 23.6901 10.9916C23.6893 10.9916 15.3534 15.8078 12.5745 17.413Z"
                fill="#BCEC30"
            />
            <mask
                id="mask0_6_353"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="9"
                y="0"
                width="16"
                height="18"
            >
                <path
                    d="M12.5745 17.413C10.75 18.4668 9.43945 17.5886 9.43945 16.0266C9.43945 14.3637 9.43945 9.37425 9.43945 9.37425C9.43945 9.37425 9.43945 4.38481 9.43945 2.72193C9.43945 1.15989 10.7492 0.281694 12.5745 1.33553C15.3534 2.94067 23.6901 7.75691 23.6901 7.75691C24.9349 8.47573 24.9349 10.2728 23.6901 10.9916C23.6893 10.9916 15.3534 15.8078 12.5745 17.413Z"
                    fill="#6FE4FF"
                />
            </mask>
            <g mask="url(#mask0_6_353)">
                <g filter="url(#filter0_f_6_353)">
                    <path
                        d="M3.19313 17.414C1.3687 18.4678 0.0581055 17.5896 0.0581055 16.0275C0.0581055 14.3647 0.0581055 9.37523 0.0581055 9.37523C0.0581055 9.37523 0.0581055 4.38579 0.0581055 2.72291C0.0581055 1.16086 1.36789 0.28267 3.19313 1.3365C6.03464 2.97742 14.5584 7.90181 14.5584 7.90181C15.6917 8.55639 15.6917 10.1932 14.5584 10.8478C14.5584 10.8486 6.03464 15.773 3.19313 17.414Z"
                        fill="#99D100"
                    />
                </g>
            </g>
            <path
                d="M30.5687 12.3437L30.8865 11.62C31.1032 11.1278 31.4933 10.9976 31.9845 11.3594C32.9235 12.0542 34.4693 12.5608 36.5352 12.5608C38.2977 12.5608 39.0489 12.1121 39.0489 11.5765C39.0489 10.9686 38.4277 10.8094 37.402 10.6791L35.0616 10.3752C32.2445 9.99885 30.8287 8.98565 30.8287 7.2198C30.8287 5.32368 32.3745 3.81836 35.9573 3.81836C37.9509 3.81836 39.2367 4.12232 40.0746 4.44075C40.9992 4.80261 41.1292 5.10656 41.1292 5.85922V6.84347C41.1292 7.45139 40.9125 7.65403 40.3202 7.65403H39.6556C39.0489 7.65403 38.8466 7.43691 38.8466 6.84347V6.52504C38.4566 6.39477 37.4886 6.2066 36.3618 6.2066C34.3826 6.2066 33.4291 6.56846 33.4291 7.17638C33.4291 7.62508 34.007 7.88561 35.0616 8.03035L37.3586 8.33431C40.1324 8.68169 41.6059 9.5212 41.6059 11.5476C41.6059 13.6029 39.6556 14.9201 36.174 14.9201C33.6169 14.9201 31.5655 14.1095 30.7421 13.3569C30.4531 13.0674 30.4098 12.7055 30.5687 12.3437Z"
                fill={themeMode.logo.currentColor}
            />
            <path
                d="M55.936 14.7465H54.7514C54.1735 14.7465 53.9857 14.6597 53.6968 14.2255L51.472 10.9398C51.1542 10.4911 50.9086 10.3753 50.244 10.3753H48.0193V13.936C48.0193 14.5439 47.8026 14.7465 47.2102 14.7465H46.3579C45.7511 14.7465 45.5489 14.5294 45.5489 13.936V3.254H44.7543C44.1476 3.254 43.9453 3.03689 43.9453 2.44345V1.71974C43.9453 1.11182 44.162 0.90918 44.7543 0.90918H47.2247C47.8315 0.90918 48.0337 1.12629 48.0337 1.71974V7.97259H50.0273C50.6919 7.97259 50.923 7.87127 51.2553 7.4081L53.1189 4.52773C53.4223 4.07903 53.6101 3.99219 54.188 3.99219H55.3726C56.0227 3.99219 56.1383 4.51326 55.7771 5.0488L53.6968 8.20418C53.4801 8.50814 53.22 8.82657 52.9744 9.08711C53.2345 9.30422 53.5957 9.66607 53.7401 9.88319L56.3405 13.7189C56.7017 14.2255 56.5717 14.7465 55.936 14.7465Z"
                fill={themeMode.logo.currentColor}
            />
            <path
                d="M60.1634 16.7152V16.006C60.1634 15.398 60.3801 15.1954 60.9724 15.1954H61.9981C62.6193 15.1954 62.9227 15.0651 63.1538 14.573L63.2838 14.298L58.372 4.99108C58.0686 4.42659 58.3142 4.00684 58.9499 4.00684H60.0622C60.6401 4.00684 60.9001 4.10816 61.1168 4.52791L63.1683 8.75438C63.645 9.72415 64.1795 10.8387 64.5985 11.8084C65.0319 10.8676 65.5231 9.78205 65.9854 8.84122L68.0801 4.52791C68.2679 4.12263 68.5569 4.00684 69.1347 4.00684H70.2471C70.8972 4.00684 71.1284 4.44106 70.825 4.99108L65.2341 15.6296C64.584 16.8599 63.8473 17.5402 62.1715 17.5402H60.9435C60.3656 17.5402 60.1634 17.3231 60.1634 16.7152Z"
                fill={themeMode.logo.currentColor}
            />
            <path
                d="M85.9318 9.37646C85.9318 12.7924 83.4037 14.9201 79.9943 14.9201C78.5207 14.9201 77.3939 14.5582 76.5993 14.1095V17.0333C76.5993 17.6412 76.3826 17.8439 75.7903 17.8439H74.938C74.3312 17.8439 74.129 17.6268 74.129 17.0333V6.35135H73.3344C72.7276 6.35135 72.5254 6.13423 72.5254 5.54079V4.81708C72.5254 4.20916 72.7421 4.00652 73.3344 4.00652H75.4147C76.0215 4.00652 76.2237 4.22364 76.2237 4.81708V4.87498C77.0327 4.33943 78.2607 3.81836 79.9943 3.81836C83.4037 3.83283 85.9318 5.96054 85.9318 9.37646ZM83.3603 9.37646C83.3603 7.37901 81.7568 6.2645 79.7631 6.2645C78.3329 6.2645 77.1628 6.87242 76.6138 7.36454V11.4028C77.1772 11.895 78.3329 12.5029 79.7631 12.5029C81.7568 12.4884 83.3603 11.3739 83.3603 9.37646Z"
                fill={themeMode.logo.currentColor}
            />
            <path
                d="M99.3906 8.5381C99.3906 9.14602 99.1739 9.34866 98.5816 9.34866H97.7292C97.1225 9.34866 96.9202 9.17497 96.9202 8.5381C96.9202 6.94594 96.3135 6.2367 94.8688 6.2367C93.4964 6.2367 92.3551 7.09068 91.7195 8.13282V13.937C91.7195 14.5449 91.5028 14.7475 90.9104 14.7475H90.0581C89.4513 14.7475 89.2491 14.5304 89.2491 13.937V6.3525H88.4545C87.8478 6.3525 87.6455 6.13538 87.6455 5.54194V4.81823C87.6455 4.21031 87.8622 4.00767 88.4545 4.00767H90.5348C91.1416 4.00767 91.3438 4.22479 91.3438 4.81823V5.51299C92.1095 4.65901 93.2797 3.83398 95.2733 3.83398C98.1915 3.83398 99.3906 5.57089 99.3906 8.5381Z"
                fill={themeMode.logo.currentColor}
            />
            <path
                d="M100.924 9.37761C100.924 6.19328 103.611 3.83398 107.179 3.83398C110.719 3.83398 113.391 6.19328 113.391 9.37761C113.391 12.5764 110.704 14.9357 107.179 14.9357C103.611 14.9357 100.924 12.5764 100.924 9.37761ZM110.935 9.37761C110.935 7.52491 109.303 6.17881 107.179 6.17881C105.012 6.17881 103.38 7.53938 103.38 9.37761C103.38 11.2448 105.012 12.6054 107.179 12.6054C109.317 12.6054 110.935 11.2448 110.935 9.37761Z"
                fill={themeMode.logo.currentColor}
            />
            <defs>
                <filter
                    id="filter0_f_6_353"
                    x="-8.87135"
                    y="-8.05348"
                    width="33.209"
                    height="34.857"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation="4.46473"
                        result="effect1_foregroundBlur_6_353"
                    />
                </filter>
            </defs>
        </svg>
    );
}
