import './style.scss';

import { LinkButton } from '../LinkButton';
import { useEffect, useState } from 'react';

export const AboutUs = () => {

    const [opportunitiesLink, setOpportunitiesLink] = useState('');

    useEffect(() => {
        setOpportunitiesLink('https://platform.senior.com.br/hcmrs/hcm/curriculo/?tenant=ferreiracostacombr&tenantdomain=ferreiracosta.com.br#!/vacancies/list');
    }, []);

    return (
        <section className='mainn-container'>
            <div className='image-frame-container'>
                <div className='image-frame-wrapper'>
                    <img src="/src/assets/imgs/employees-interacting.png" alt="Colaboradores interagindo em seu dia a dia." />
                    <svg width="756" height="499" viewBox="0 0 756 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.5V498.5H755.5V236.5M460 0.5H629M599 16.5L736 16.5" stroke="#E71C35"/>
                    </svg>
                </div>
            </div>
            <div className='text-button-container'>
                <div className='text-button-wrapper'>
                    <p>
                        Transformar o mundo de cada um no melhor lugar para se viver. Este é o propósito da <b>Ferreira Costa</b>,
                        e nós do FCx Labs temos o papel importante de colaborar, levando soluções tecnológicas para todas as 
                        áreas da empresa, simplificando a jornada do nosso cliente interno e externo através da melhor experiência.
                    </p>
                    <LinkButton href={opportunitiesLink} target='_blank'>Ver nossas oportunidades</LinkButton>
                    <svg width="738" height="393" viewBox="0 0 738 393" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 52.5V2.5H733.5V387" stroke="#53565A"/>
                    </svg>
                </div>
            </div>
            <img className='code-lines-vector' src="/src/assets/imgs/code_lines_vector.svg" alt="Art Design que representa uma tela de códigos." />
            <img className='grey-void-bars' src="/src/assets/imgs/grey-void-bars.svg" alt="Art Design de 3 barras retangulares vazias em com bordas cinzas." />
        </section>
    );
};