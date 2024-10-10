import Cartao from "../components/Cartao/Cartao";
import ListContainer from "../components/ListContainer/ListContainer";
import Base from "./Base";

const dados = [
    {
        titulo: "um titulo do array",
        texto: "um texto grande do Array",

    },
    {
        titulo: "um outro titulo do array",
        texto: "um outro texto grande do Array",
    }

]

const SobreNos = () => (

    <Base>
        <ListContainer>
            {
                dados.map( (ele, i) => (
                    <Cartao
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto}/>
                ))
            }

            <Cartao titulo= "outro titulo" texto= "oi2"/>
        </ListContainer>
    </Base>

);

export default SobreNos;
