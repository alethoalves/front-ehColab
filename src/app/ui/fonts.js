import { Montserrat } from "next/font/google";
import localFont from 'next/font/local'

export const montserrat = Montserrat({ subsets: ['latin'] });
export const neueLight = localFont({ src: '../../font/NeueMachina-Light.otf' });
export const neueRegular = localFont({ src: '../../font/NeueMachina-Regular.otf' });
export const neueBold = localFont({ src: '../../font/NeueMachina-Ultrabold.otf' })