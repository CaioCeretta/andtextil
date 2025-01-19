import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default function Empresa() {
	return (
		<MaxWidthWrapper className="px-5">
			<div className="flex flex-col gap-5 items-center md:items-start">
				<h1 className="font-black text-3xl ">
					Quem somos?
				</h1>

				<p>
					Em agosto de 2023, foi fundada a AND com o
					objetivo de atender empresas do segmento de
					vedação e isolação, oferecendo produtos de alta
					performance contra temperatura elevadas e também
					fabricação de Tecidos antichama.
				</p>

				<p>
					Para alcançar esse objetivo, associamo-nos a
					fornecedores e parceiros que se propuseram a
					desenvolver produtos que atendam a essas demandas.
				</p>

				<p>
					Atendemos tanto transformadores como consumidores
					finais, sempre nos dedicando a criar e desenvolver
					produtos específicos conforme a necessidade de
					cada cliente
				</p>

				<p>
					Trabalhamos com Tecidos, Fitas, Linhas para
					costura e Fios técnicos
				</p>
			</div>
		</MaxWidthWrapper>
	)
}
