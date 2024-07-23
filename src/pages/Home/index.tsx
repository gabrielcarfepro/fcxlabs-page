import './style.scss';
import { LandingHome } from '../../ui/components/LandingHome';
import { AboutUs } from '../../ui/components/AboutUs';

export const Home = () => {
    return (
        <>
         <LandingHome />
         <AboutUs />
        </>
    );
}