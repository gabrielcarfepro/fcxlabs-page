import './style.scss';

interface TitleUnderlineProps {
    children: string;
}

export const TitleUnderline: React.FC<TitleUnderlineProps> = ({ children = "" }) => {
    return (
        <div className='pillars-title-wrapper'>
            <h2>{children}</h2>
            <svg width="169" height="1" viewBox="0 0 169 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="0.5" x2="169" y2="0.5" stroke="#7AC143"/>
            </svg>
        </div>
    );
}