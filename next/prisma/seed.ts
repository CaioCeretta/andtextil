import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Buscando categorias

  const fiosCategory = await prisma.category.findFirst({
    where: { name: 'fios' },
  })

  const tecidosCategory = await prisma.category.findFirst({
    where: { name: 'tecidos' },
  })

  const fitasCategory = await prisma.category.findFirst({
    where: { name: 'fitas' },
  })
  const fiosAramidaCategory = await prisma.category.findFirst({
    where: { name: 'fios aramida' },
  })

  const tecidosVidro = await prisma.category.findFirst({
    where: { name: 'tecido fibra de vidro' },
  })

  // Buscando specificationField

  // Buscando os campos de especificação que você quer associar ao produto
  const texField = await prisma.specificationField.findFirst({
    where: {
      name: 'tex',
      categoryId: fiosAramidaCategory!.id, // A categoria de 'fios aramida' deve ser usada aqui
    },
  })

  const resistenciaRupturaField = await prisma.specificationField.findFirst({
    where: {
      name: 'resistenciaRuptura',
      categoryId: fiosAramidaCategory!.id,
    },
  })

  const temperaturaTrabalhoField = await prisma.specificationField.findFirst({
    where: {
      name: 'resistenciaTemperatura',
      categoryId: fiosAramidaCategory!.id,
    },
  })

  // // Criação dos produtos
  const fioA1 = await prisma.product.create({
    data: {
      name: 'Fio de Fibra Aramida Cardada',
      description: '',
      slug: 'fio-fibra-aramida-cardada',
      categoryId: fiosAramidaCategory!.id, // Associando com a categoria correta
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/fio-cardado.png',
          },
        ],
      },
      specifications: {
        create: [
          {
            specificationFieldId: texField!.id, // Usando o ID do campo de especificação "tex"
            value: '600',
          },
          {
            specificationFieldId: resistenciaRupturaField!.id, // Usando o ID do campo "resistenciaRuptura"
            value: '16.3kgf',
          },
          {
            specificationFieldId: temperaturaTrabalhoField!.id, // Usando o ID do campo "resistenciaTemperatura"
            value: 'Constante 280º - Controlado 450º',
          },
        ],
      },
      applications: {
        create: [
          { value: 'Isolamento de Fios e Cabos' },
          { value: 'Fabricação de gaxetas e cordões' },
          { value: 'Fabricação de Fitas e Tecidos' },
        ],
      },
      characteristics: {
        create: [
          { value: 'Boa resistência mecânica' },
          { value: 'Boa resistência térmica' },
          { value: 'Excelente absorção' },
          { value: 'Boa resistência a tração' },
          { value: 'Não condutivo' },
          { value: 'Antichama' },
        ],
      },
    },
  })

  console.log('Produto "Fio de Fibra Aramida Cardada" inserido com sucesso!')

  const fio1 = await prisma.product.create({
    data: {
      name: 'Linha para costura 100% aramida',
      description: '',
      slug: 'linha-costura-100-aramida',
      categoryId: fiosCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Excelentes propriedades de isolação térmica',
          },
          { value: 'Alta resistência mecânica' },
          { value: 'Alta Tenacidade' },
          { value: 'Alto módulo' },
          { value: 'Excelente flexibilidade' },
        ],
      },
      applications: {
        create: [
          { value: 'Cortinas para solda e agulhamentos' },
          { value: 'Juntas de Expansão' },
          { value: 'Cintos de segurança' },
          { value: 'Luvas de proteção' },
          { value: 'EPIs' },
          { value: 'Proteções térmicas removíveis' },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 1, value: '90' },
          { specificationFieldId: 2, value: '5.5kgf' },
          { specificationFieldId: 3, value: '4.1%' },
          { specificationFieldId: 4, value: '400º' },
          { specificationFieldId: 5, value: '11.000' },
          { specificationFieldId: 6, value: 'Fiada' },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/linha-para-costura-aramida.jpg',
          },
        ],
      },
    },
  })

  const Tecido1 = await prisma.product.create({
    data: {
      name: 'Tecido de fibra de aramida filamento',
      description: '',
      slug: 'tecido-de-fibra-de-aramida-filamento',
      categoryId: tecidosCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Excelentes propriedades de isolação térmica',
          },
          { value: 'Alta resistência à ruptura' },
          { value: 'Alta resistência ao corte' },
          { value: 'Alta resistência à abrasão' },
          { value: 'Excelente maleabilidade' },
          {
            value:
              'Compatível com silicones, colas diversas e tintas isolantes.',
          },
        ],
      },
      applications: {
        create: [
          {
            value: 'Alta gama de aplicações, principalmente fabricação de EPIs',
          },
          { value: 'Dutos sanfonados' },
          { value: 'Proteções térmicas' },
          { value: 'Luvas de proteção' },
          { value: 'Juntas de expansão' },
          {
            value: 'Cortinas para proteção contra respingos de solda',
          },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 11, value: '0.6mm' },
          { specificationFieldId: 25, value: '0.412kgf' },
          { specificationFieldId: 12, value: '403kg' },
          { specificationFieldId: 13, value: '1.2mm' },
          {
            specificationFieldId: 14,
            value: 'Contínuo: 300º - Controlado 400º',
          },
          { specificationFieldId: 15, value: 'Tela' },
          { specificationFieldId: 11, value: '1.2mm' },
          { specificationFieldId: 25, value: '0.600kgf' },
          { specificationFieldId: 12, value: '806kg' },
          { specificationFieldId: 13, value: '1.2mm' },
          {
            specificationFieldId: 14,
            value: 'Contínuo: 300º - Controlado 400º',
          },
          { specificationFieldId: 15, value: 'Tela' },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/linha-para-costura-aramida.jpg',
          },
        ],
      },
    },
  })

  const Tecido2 = await prisma.product.create({
    data: {
      name: 'Tecido de Fibra Aramida Cardado',
      description: '',
      slug: 'tecido-fibra-aramida-cardado',
      categoryId: tecidosCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Material isento de poliéster / algodão',
          },
          {
            value:
              'Isento de tratamento antichama, podendo ser lavado ou molhado sem prejuizo tecnico',
          },
          {
            value: 'Excelentes propriedades de isolação térmica;',
          },
          { value: 'Alta resistência à ruptura' },
          { value: 'Alta resistência ao corte' },
          {
            value: 'Resistência à chama direta e a respingos de solda',
          },
          { value: 'Alta resistência à abrasão' },
          { value: 'Excelente maleabilidade' },
          {
            value:
              'Compatível com silicones, colas diversas e tintas isolantes.',
          },
        ],
      },
      applications: {
        create: [
          {
            value: 'Equipamentos de proteção individual',
          },
          { value: 'Cabines e cortinas para solda' },
          { value: 'Proteções térmicas' },
          { value: 'Juntas de expansão' },
          {
            value: 'Isolamento para pisos e salas de forno',
          },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 17, value: '1.4mm' },
          {
            specificationFieldId: 18,
            value: '0.650g/m²',
          },
          { specificationFieldId: 26, value: '200.78kg' },
          { specificationFieldId: 16, value: '1.2mm' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 250 - Controlado 400º',
          },
          { specificationFieldId: 27, value: 'Tela' },
          { specificationFieldId: 17, value: '1.7mm' },
          {
            specificationFieldId: 18,
            value: '0.700g/m²',
          },
          { specificationFieldId: 26, value: '200.78kg' },
          { specificationFieldId: 16, value: '1.2mm' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 250 - Controlado 400º',
          },
          { specificationFieldId: 27, value: 'Tela' },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/tecido-fibra-aramida-cardado.png',
          },
        ],
      },
    },
  })

  const TecidoFV1 = await prisma.product.create({
    data: {
      name: 'Tecido de Fibra de Vidro Texturizado',
      description: '',
      slug: 'tecido-fibra-vidro-texturizado',
      categoryId: tecidosVidro!.id,
      characteristics: {
        create: [
          {
            value: 'Totalmente isentas de amianto ou outras fibras orgânicas',
          },
          {
            value: 'Excelentes propriedades de isolação térmica',
          },
          {
            value: 'Excelente maleabilidade',
          },
          { value: 'Alta resistência à ruptura' },
          { value: 'Alta resistência ao corte' },
          {
            value:
              'Compatibilidade com silicones, colas, tintas isolantes e resinas sintéticas em geral',
          },
        ],
      },
      applications: {
        create: [
          {
            value: 'Cortinas de solda',
          },
          { value: 'Proteções térmicas removíveis' },
          { value: 'Juntas de expansão' },
          { value: 'Proteções térmicas para maquinas e equipamentos' },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 16, value: '1mm' },
          { specificationFieldId: 17, value: '1.5mm' },
          {
            specificationFieldId: 18,
            value: '1kg/m²',
          },
          { specificationFieldId: 19, value: '25m' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 500 - Controlado 550º',
          },
          { specificationFieldId: 16, value: '1mm' },
          { specificationFieldId: 17, value: '3.2mm' },
          {
            specificationFieldId: 18,
            value: '1.8kg/m²',
          },
          { specificationFieldId: 19, value: '25m' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 500 - Controlado 550º',
          },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/tecido-fibra-de-vidro-texturizado.png',
          },
        ],
      },
    },
  })
  const Fita1 = await prisma.product.create({
    data: {
      name: 'Fita de Aramida 100% Filamento',
      description: '',
      slug: 'fita-aramida-cem-porcento-filamento',
      categoryId: fitasCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Produzidas com fio 100% aramida filamento;',
          },
          {
            value: 'Alta resistência à abrasão',
          },
          {
            value: 'Alta resistência à elétrica',
          },
          { value: 'Alta resistência ao mecânica' },
          { value: 'Baixo Alongamento' },
          {
            value: 'Alto módulo',
          },
          {
            value: 'Alta estabilidade dimensional',
          },
        ],
      },
      applications: {
        create: [
          {
            value: 'Cortinas de solda',
          },
          { value: 'Proteções térmicas removíveis' },
          { value: 'Juntas de expansão' },
          { value: 'Proteções térmicas para maquinas e equipamentos' },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 16, value: '1mm' },
          { specificationFieldId: 17, value: '1.5mm' },
          {
            specificationFieldId: 18,
            value: '1kg/m²',
          },
          { specificationFieldId: 19, value: '25m' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 500 - Controlado 550º',
          },
          { specificationFieldId: 16, value: '1mm' },
          { specificationFieldId: 17, value: '3.2mm' },
          {
            specificationFieldId: 18,
            value: '1.8kg/m²',
          },
          { specificationFieldId: 19, value: '25m' },
          {
            specificationFieldId: 20,
            value: 'Contínuo: 500 - Controlado 550º',
          },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/tecido-fibra-de-vidro-texturizado.png',
          },
        ],
      },
    },
  })

  const Fita2 = await prisma.product.create({
    data: {
      name: 'Fita de Fibra Aramida Cardada',
      description: '',
      slug: 'fita-fibra-aramida-cardada',
      categoryId: fitasCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Excelente isolação elétrica',
          },
          {
            value: 'Excelente isolação térmica',
          },
          {
            value: 'Alta resistência a ruptura no urdume',
          },
          { value: 'Alta resistência ao corte' },
          {
            value:
              'Alta compatibilidade com adesivos, colas, silicones e tintas.',
          },
        ],
      },
      applications: {
        create: [
          {
            value: 'Isolamento de óleos e fluidos térmicos',
          },
          {
            value:
              'Sistemas de ar frio e quente, cabos elétricos, escapamentos automotivos',
          },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 21, value: '1.7mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '97.8kgf',
          },
          {
            specificationFieldId: 24,
            value: 'Contínuo 280º - Controlado 400º',
          },
          { specificationFieldId: 21, value: '3.0mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '195.6kgf',
          },
          {
            specificationFieldId: 24,
            value: 'Contínuo 280º - Controlado 400º',
          },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/fita-aramida-cardada.png',
          },
        ],
      },
    },
  })

  const Fita3 = await prisma.product.create({
    data: {
      name: 'Fita Fibra de Vidro Texturizada',
      description: '',
      slug: 'fita-fibra-vidro-texturizada',
      categoryId: fitasCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Totalmente isentas de amianto ou outras fibras sintéticas',
          },
          {
            value: 'Excelentes propriedades de isolamento térmico;',
          },
          {
            value: 'Excelente maleabilidade',
          },
          { value: 'Compatibilidade com silicones, colas e tintas isolantes' },
          {
            value:
              'Excelente compatibilidade com elastômeros sintéticos e naturais',
          },
        ],
      },
      applications: {
        create: [
          {
            value:
              'Isolamento térmico de tubulações, mangueiras, dutos  de escapamentos automotivos, tubulações de ar condicionado e vedação calhas',
          },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 21, value: '1.1mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 120mm' },
          {
            specificationFieldId: 23,
            value: '244.2kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinâmico 260º' },
          { specificationFieldId: 21, value: '2.0mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '244.2kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinamico 200º' },
          { specificationFieldId: 21, value: '3.0mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '488.4kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinâmico 260º' },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/fita-aramida-cardada.png',
          },
        ],
      },
    },
  })

  const Fita4 = await prisma.product.create({
    data: {
      name: 'Fita Fibra de Vidro Texturizada',
      description: '',
      slug: 'fita-fibra-vidro-texturizada',
      categoryId: fitasCategory!.id,
      characteristics: {
        create: [
          {
            value: 'Totalmente isentas de amianto ou outras fibras sintéticas',
          },
          {
            value: 'Excelentes propriedades de isolamento térmico;',
          },
          {
            value: 'Excelente maleabilidade',
          },
          { value: 'Compatibilidade com silicones, colas e tintas isolantes' },
          {
            value:
              'Excelente compatibilidade com elastômeros sintéticos e naturais',
          },
        ],
      },
      applications: {
        create: [
          {
            value:
              'Isolamento térmico de tubulações, mangueiras, dutos  de escapamentos automotivos, tubulações de ar condicionado e vedação calhas',
          },
        ],
      },
      specifications: {
        create: [
          { specificationFieldId: 21, value: '1.1mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 120mm' },
          {
            specificationFieldId: 23,
            value: '244.2kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinâmico 260º' },
          { specificationFieldId: 21, value: '2.0mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '244.2kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinamico 200º' },
          { specificationFieldId: 21, value: '3.0mm' },
          { specificationFieldId: 22, value: '25, 38, 50, 75, 100mm' },
          {
            specificationFieldId: 23,
            value: '488.4kgf',
          },
          { specificationFieldId: 24, value: 'Estático: 500º - Dinâmico 260º' },
        ],
      },
      images: {
        create: [
          {
            url: 'https://andtextil.com.br/assets/imagens/produtos/fita-aramida-cardada.png',
          },
        ],
      },
    },
  })

  // // Criação dos campos de especificação
  // await prisma.specificationField.createMany({
  // 	data: [
  // 		{
  // 			name: 'tex',
  // 			type: 'number',
  // 			categoryId: fiosAramidaCategory.id,
  // 		},
  // 		{
  // 			name: 'resistenciaRuptura',
  // 			type: 'string',
  // 			categoryId: fiosAramidaCategory.id,
  // 		},
  // 		{
  // 			name: 'temperaturaTrabalho',
  // 			type: 'string',
  // 			categoryId: fiosAramidaCategory.id,
  // 		},
  // 	],
  // })

  console.log('Dados de seed inseridos com sucesso!')
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
