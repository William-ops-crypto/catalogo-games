import styled from 'styled-components';

export const ContainerMenu = styled.div`
display:flex;
margin: 0px 10px;
font-size: 30px;
color: rgb(240, 248, 240);

@media(max-width: 600px){}
`;

export const Title = styled.h1`
font-size: 55px;
color: #e2e6ef;
animation: flipTitle 4s;

@keyframes flipTitle {
from{
    transform: rotateX(90deg);

}
to{
    transform: rotateX(0deg);
}
}
@media(max-width: 600px){
font-size: 35px;
margin-top: 0px;   
}
`;

export const Text = styled.span`
display: flex;
align-items: center;
justify-items: center;
margin-bottom: 1px;
margin-top: 10px;
font-weight: bold;
font-size: 15px;

@media(max-width: 600px){
display: flex;
align-items: center;
justify-items: center;
margin-right: 10px;
margin-top: 10px;
}
`;
export const Logo = styled.img`
    alt:"Imagem";
    width: 120px;
    height: 150px;
    margin: 5px;
`;
