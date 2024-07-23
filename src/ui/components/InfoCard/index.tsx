import './style.scss';

interface InfoCardProps {
    title: string;
    body: string;
    children: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title = "", body = "", children}) => {
    return (
        <div className='info-card-container'>
            <div className='info-card-title-wrapper'>
                {children}
                <h4>{title}</h4>
            </div>
            <p>{body}</p>
        </div>
    );
}