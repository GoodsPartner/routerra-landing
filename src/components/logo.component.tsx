import desktop_logo from '@/assets/logo-desktop.svg';
import mobile_logo from '@/assets/logo-mobile.svg';
import {useMediaQuery} from "@react-hook/media-query";

export const Logo =()=> {
    const isDesktop = useMediaQuery('(min-width: 768px)');
    return isDesktop ? <img src={desktop_logo} alt="Logo"/> : <img src={mobile_logo} alt="Logo"/>
}