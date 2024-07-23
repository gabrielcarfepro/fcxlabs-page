import './style.scss';
import { LandingHome } from '../../ui/components/LandingHome';
import { AboutUs } from '../../ui/components/AboutUs';
import { OurPillars } from '../../ui/components/OurPillars';

export const Home = () => {
    return (
        <>
         <LandingHome />
         <AboutUs />
         <OurPillars />
        </>
    );
}