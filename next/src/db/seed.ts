import { db } from '.'

async function seed() {
  const categories = [
    { name: 'fibras' },
    { name: 'tecidos' },
    { name: 'fios' },
    { name: 'fitas' },
  ]

  for (const category of categories) {
    await db.categories.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    })
  }

  const categoryFios = await db.categories.findFirst({
    where: {
      name: 'fios',
    },
  })

  if (!categoryFios) {
    throw new Error('Category fios was not found')
  }

  const categoryFitas = await db.categories.findFirst({
    where: {
      name: 'fitas',
    },
  })

  if (!categoryFitas) {
    throw new Error('Category fitas was not found')
  }

  const categoryTecidos = await db.categories.findFirst({
    where: {
      name: 'tecidos',
    },
  })

  if (!categoryTecidos) {
    throw new Error('Category tecidos was not found')
  }

  const categoryFibras = await db.categories.findFirst({
    where: {
      name: 'fibras',
    },
  })

  if (!categoryFibras) {
    throw new Error('Category fibras was not found')
  }

  const productsFios = [
    {
      name: 'fio-1',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://www.laformosa.com.br/octopus/design/images/70/products/b/LF_Lurex500_es.jpg',
        'https://static3.tcdn.com.br/img/img_prod/738352/fio_de_aco_inox_para_cerca_industrial_1_20mm_660_metros_349_1_20191203084807.jpg',
      ],
    },
    {
      name: 'fio-2',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://www.laformosa.com.br/octopus/design/images/70/products/b/LF_Lurex500_es.jpg',
        'https://static3.tcdn.com.br/img/img_prod/738352/fio_de_aco_inox_para_cerca_industrial_1_20mm_660_metros_349_1_20191203084807.jpg',
      ],
    },
  ]

  const productFitas = [
    {
      name: 'fita-1',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,

      categoryId: categoryFios.id,
      image: [
        'https://alltape.com.br/wp-content/uploads/2021/07/industrial-03.jpg',
        'https://ae01.alicdn.com/kf/Hf96eaf1c8c704dda8a35ac932d984845i/Fita-adesiva-gomada-personalizar-o-logotipo-personalizado-embalagem-selada-vermelho-branco-verde-preto-amarelo-azul-rosa.jpg',
      ],
    },
    {
      name: 'fita-2',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://alltape.com.br/wp-content/uploads/2021/07/industrial-03.jpg',
        'https://ae01.alicdn.com/kf/Hf96eaf1c8c704dda8a35ac932d984845i/Fita-adesiva-gomada-personalizar-o-logotipo-personalizado-embalagem-selada-vermelho-branco-verde-preto-amarelo-azul-rosa.jpg',
      ],
    },
  ]

  const productsTecidos = [
    {
      name: 'Tecido de fibra de aramida cardado',
      description: `
      <h2>
        Características:
      </h2>
      <ul>
        <li>Material Isento de poliéster / algodão</li>
        <li>Isento de tratamento antichama, podendo ser lavado ou molhado
        sem prejuízo técnico</li>
        <li>Excelentes propriedades de isolação térmica;</li>
        <li>Alta resistência à ruptura;</li>
        <li>Alta resistência ao corte;</li>
        <li>Resistência à chama direta e a respingos de solda;</li>
        <li>Alta resistência à abrasão;</li>
        <li>Excelente maleabilidade;</li>
        <li>Compatível com silicones, colas diversas e tintas isolantes.</li>
      </ul>
      <h2> Aplicações: </h2>
      <ul>
        <li>Equipamentos de proteção individual;</li>
        <li>Cabines e cortinas para solda;</li>
        <li>Juntas de expansão</li>
        <li>Isolamento para pisos e salas de forno</li>
      </ul>

      <h2> Especificações </h2>
      <table class="border border-zinc-600">
        <thead>
          <th>Espessura</th>
          <th>Gramatura</th>
          <th>Resistência à ruptura</th>
          <th>Largura</th>
          <th>Construção</th>
        </thead>
        <tbody>
          <tr>
            <td>1.4mm</td>
            <td>0.650g/m²</td>
            <td>200.78kg</td>
            <td>1.2m</td>
            <td>Tela</td>
          </tr>
          <tr>
            <td>1.7mm</td>
            <td>0.700g/m²</td>
            <td>200.78kg</td>
            <td>1.2m</td>
            <td>Tela</td>
          </tr>
        </tbody>
      </table>
      `,
      categoryId: categoryTecidos.id,
      image: [
        'https://processoindustrial.com.br/wp-content/uploads/2020/11/tecidos-filtrantes-01.jpg',
        'https://processoindustrial.com.br/wp-content/uploads/2020/11/tecidos-filtrantes-02-600x600.jpg',
      ],
    },
    {
      name: 'tecido-2',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://processoindustrial.com.br/wp-content/uploads/2020/11/tecidos-filtrantes-01.jpg',
        'https://processoindustrial.com.br/wp-content/uploads/2020/11/tecidos-filtrantes-02-600x600.jpg',
      ],
    },
  ]

  const productsFibras = [
    {
      name: 'fibra-1',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://www.anelk.com.br/inc/scripts/thumbs.php?w=120&h=120&imagem=https://www.anelk.com.br/imagens/informacoes/fibra-industrial-vermelha-03.jpg',
        'https://www.anelk.com.br/imagens/informacoes/fibra-industrial-vermelha-03.jpg',
      ],
    },
    {
      name: 'fibra-2',
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.
      Donec nec justo eget felis facilisis fermentum.Aliquam porttitor mauris sit amet orci.Aenean dignissim pellentesque felis.
      Morbi in sem quis dui placerat ornare.Pellentesque odio nisi euismod in pharetra a ultricies in diam.Sed arcu.Cras consequat.
      Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat.Aliquam erat volutpat.Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.
      Phasellus ultrices nulla quis nibh.Quisque a lectus.Donec consectetuer ligula vulputate sem tristique cursus.Nam nulla quam gravida non commodo a sodales sit amet nisi.`,
      categoryId: categoryFios.id,
      image: [
        'https://www.anelk.com.br/inc/scripts/thumbs.php?w=120&h=120&imagem=https://www.anelk.com.br/imagens/informacoes/fibra-industrial-vermelha-03.jpg',
        'https://www.anelk.com.br/imagens/informacoes/fibra-industrial-vermelha-03.jpg',
      ],
    },
  ]

  for (const productData of productsTecidos) {
    const { name, description, image } = productData

    const product = await db.product.create({
      data: {
        name,
        description,
        category_id: categoryTecidos.id,
      },
    })

    for (const imageUrl of image) {
      await db.image.create({
        data: {
          url: imageUrl,
          product_id: product.id,
        },
      })
    }
  }

  for (const productData of productsFibras) {
    const { name, description, image } = productData

    const product = await db.product.create({
      data: {
        name,
        description,
        category_id: categoryFibras.id,
      },
    })

    for (const imageUrl of image) {
      await db.image.create({
        data: {
          url: imageUrl,
          product_id: product.id,
        },
      })
    }
  }

  for (const productData of productFitas) {
    const { name, description, image } = productData

    const product = await db.product.create({
      data: {
        name,
        description,
        category_id: categoryFitas.id,
      },
    })

    for (const imageUrl of image) {
      await db.image.create({
        data: {
          url: imageUrl,
          product_id: product.id,
        },
      })
    }
  }

  for (const productData of productsFios) {
    const { name, description, image } = productData

    const product = await db.product.create({
      data: {
        name,
        description,
        category_id: categoryFios.id,
      },
    })

    for (const imageUrl of image) {
      await db.image.create({
        data: {
          url: imageUrl,
          product_id: product.id,
        },
      })
    }
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
