import './style.scss';

interface LinkButtonProps {
    children: string;
    href: string;
    target: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href = "", target = "", children = "" }) => {
    return (
        <button className='link-btn'>
            <a href={href} target={target}>{children}</a>
        </button>
    );
};