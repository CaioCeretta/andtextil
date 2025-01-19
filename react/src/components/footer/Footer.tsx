import { Link } from "react-router-dom";
import { Container } from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#695823] text-[#033246].text-sm.mt-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
            <FooterList>
              <h3 className="text-base font-bold mb-2">Visualizar Categorias</h3>
              <Link to="#">Categoria 1</Link>
              <Link to="#">Categoria 2</Link>
              <Link to="#">Categoria 3</Link>
              <Link to="#">Categoria 4</Link>
              <Link to="#">Categoria 5</Link>
              <Link to="#">Categoria 6</Link>
            </FooterList>

            <FooterList>
              <h3 className="text-base font-bold mb-2">Sobre Nós</h3>
              <Link to="#">Institucional</Link>
              <Link to="#">Valores</Link>
              <Link to="#">História</Link>
            </FooterList>
          </div>
        </Container>

      </footer>
    </div>

  );
}

export { Footer };