import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;
    background-color: #232129;
    padding: 0 0 3rem 0;
`;

export const BoxText = styled.div`
    display: flex;
    justify-content: center;
    padding: 3rem 0;
`;

export const Text = styled.h2`
    color: #FFF;
    font-size: 3.2em;
`;

export const TextYellow = styled.h2`
    color: #fad305;
    font-size: 3.2em;
    margin-left: 10px;
`;

export const ContainerCar = styled.div`
    display: flex;
    justify-content: center;
`;

export const BoxCar = styled.div`
    background: #FFF;
    width: 22rem;
    margin-left: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Number = styled.p`
    color: #FFF;
    font-size: 1.9em;
    padding: 1.2rem;
    text-align: center;
    background: #fad305;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    position: relative;
    bottom: 3rem;
    margin: 0;
`;

export const TextCar = styled.p`
    color: black;
    text-transform: uppercase;
    font-size: 1.5em;
    margin: 0;
`;

export const DescriptionCar = styled.p`
    color: black;
    font-size: 1.4em;
    width: 70%;
    text-align: center;
`;

export const ImageCar = styled.img`
    width: 18rem;
`;

export const BoxAll = styled.div`
    display: flex;
    justify-content: center;
`;

export const BoxWhy = styled.div`
    display: flex;
    padding: 4.2rem 0 1rem 0; 
    border-bottom: 1px solid black;
    width: 45%;
    margin-bottom: 5rem;
`;

export const Title = styled.h2`
    color: black;
    font-size: 3.3em;
    margin: 0 0 0 2.8rem;
`;

export const TitleYellow = styled.h2`
    color: #fad305;
    font-size: 3.3em;
    margin: 0 15px;
`;

export const BoxItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

export const BoxTextItemRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    margin-left: 2rem;
`;

export const BoxTextItemLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 45rem;
    margin-right: 2rem;
    align-items: flex-end;
`;

export const TitleItem = styled.h3`
    color: #232129;
    font-weight: 100;
    font-size: 1.5em;
    margin: 0;
`;

export const DescriptionItem = styled.p`
    color: #232129;
    font-size: 1.1em;
    line-height: 1.8rem;
`;

export const DescriptionItemLeft = styled.p`
    color: #232129;
    font-size: 1.1em;
    text-align: right;
    line-height: 1.8rem;
`;

export const Button = styled.button`
    background: #fad305;
    border: none;
    width: 8.5rem;
    height: 3.3rem;
    text-transform: uppercase;
    color: #FFF;
    font-size: 1em;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: background 0.3s;

    :hover {
        background: black;
    }
`;

export const BoxDownload = styled.div`
    background: url(${props => props.src}) center no-repeat;
	background-size: 100%;
    height: 40rem;
    display: flex;
    justify-content: end;
`;

export const BoxTextDown = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6.5rem 0;
    margin-right: 8rem;
`;

export const TextDownload = styled.h3`
    color: #232129;
    font-weight: 100;
    font-size: 3.1em;
    margin: 0;
`;

export const TextApp = styled.h3`
    color: #FFF;
    font-weight: 100;
    font-size: 3.1em;
    margin: 0;
    padding: 1.8rem 0 0 0;
`;

export const ImagePhone = styled.img`
    height: 35rem;
    margin-top: 4rem;
    margin-right: 2.5rem;
`;
