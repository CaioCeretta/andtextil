/* eslint-disable prettier/prettier */
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
	const fiosAramidaCategory =
		await prisma.category.findFirst({
			where: { name: 'fios aramida' },
		})

	const tecidosAramidaCategory =
		await prisma.category.findFirst({
			where: { name: 'tecidos aramida' },
		})

	// Buscando specificationField

	// Buscando os campos de especificação que você quer associar ao produto
	const texField =
		await prisma.specificationField.findFirst({
			where: {
				name: 'tex',
				categoryId: fiosAramidaCategory!.id, // A categoria de 'fios aramida' deve ser usada aqui
			},
		})

	const resistenciaRupturaField =
		await prisma.specificationField.findFirst({
			where: {
				name: 'resistenciaRuptura',
				categoryId: fiosAramidaCategory!.id,
			},
		})

	const temperaturaTrabalhoField =
		await prisma.specificationField.findFirst({
			where: {
				name: 'resistenciaTemperatura',
				categoryId: fiosAramidaCategory!.id,
			},
		})

	// // Criação dos produtos
	// const fioAramidaCardada = await prisma.product.create({
	// 	data: {
	// 		name: 'Fio de Fibra Aramida Cardada',
	// 		description: '',
	// 		slug: 'fio-fibra-aramida-cardada',
	// 		category_id: fiosAramidaCategory!.id, // Associando com a categoria correta
	// 		images: {
	// 			create: [
	// 				{
	// 					url: 'https://andtextil.com.br/assets/imagens/produtos/fio-cardado.png',
	// 				},
	// 			],
	// 		},
	// 		Specification: {
	// 			create: [
	// 				{
	// 					specificationFieldId: texField!.id, // Usando o ID do campo de especificação "tex"
	// 					value: '600',
	// 				},
	// 				{
	// 					specificationFieldId:
	// 						resistenciaRupturaField!.id, // Usando o ID do campo "resistenciaRuptura"
	// 					value: '16.3kgf',
	// 				},
	// 				{
	// 					specificationFieldId:
	// 						temperaturaTrabalhoField!.id, // Usando o ID do campo "resistenciaTemperatura"
	// 					value: 'Constante 280º - Controlado 450º',
	// 				},
	// 			],
	// 		},
	// 		Application: {
	// 			create: [
	// 				{ value: 'Isolamento de Fios e Cabos' },
	// 				{ value: 'Fabricação de gaxetas e cordões' },
	// 				{ value: 'Fabricação de Fitas e Tecidos' },
	// 			],
	// 		},
	// 		Characteristic: {
	// 			create: [
	// 				{ value: 'Boa resistência mecânica' },
	// 				{ value: 'Boa resistência térmica' },
	// 				{ value: 'Excelente absorção' },
	// 				{ value: 'Boa resistência a tração' },
	// 				{ value: 'Não condutivo' },
	// 				{ value: 'Antichama' },
	// 			],
	// 		},
	// 	},
	// })

	// console.log(
	// 	'Produto "Fio de Fibra Aramida Cardada" inserido com sucesso!'
	// )

	// const linhaCosturaAramida = await prisma.product.create({
	// 	data: {
	// 		name: 'Linha para costura 100% aramida',
	// 		description: '',
	// 		slug: 'linha-costura-100-aramida',
	// 		category_id: fiosCategory!.id,
	// 		Characteristic: {
	// 			create: [
	// 				{
	// 					value:
	// 						'Excelentes propriedades de isolação térmica',
	// 				},
	// 				{ value: 'Alta resistência mecânica' },
	// 				{ value: 'Alta Tenacidade' },
	// 				{ value: 'Alto módulo' },
	// 				{ value: 'Excelente flexibilidade' },
	// 			],
	// 		},
	// 		Application: {
	// 			create: [
	// 				{ value: 'Cortinas para solda e agulhamentos' },
	// 				{ value: 'Juntas de Expansão' },
	// 				{ value: 'Cintos de segurança' },
	// 				{ value: 'Luvas de proteção' },
	// 				{ value: 'EPIs' },
	// 				{ value: 'Proteções térmicas removíveis' },
	// 			],
	// 		},
	// 		Specification: {
	// 			create: [
	// 				{ specificationFieldId: 1, value: '90' },
	// 				{ specificationFieldId: 2, value: '5.5kgf' },
	// 				{ specificationFieldId: 3, value: '4.1%' },
	// 				{ specificationFieldId: 4, value: '400º' },
	// 				{ specificationFieldId: 5, value: '11.000' },
	// 				{ specificationFieldId: 6, value: 'Fiada' },
	// 			],
	// 		},
	// 		images: {
	// 			create: [
	// 				{
	// 					url: 'https://andtextil.com.br/assets/imagens/produtos/linha-para-costura-aramida.jpg',
	// 				},
	// 			],
	// 		},
	// 	},
	// })

	// const TecidoFibraAramidaFialemtno =
	// 	await prisma.product.create({
	// 		data: {
	// 			name: 'Tecido de fibra de aramida filamento',
	// 			description: '',
	// 			slug: 'tecido-de-fibra-de-aramida-filamento',
	// 			category_id: tecidosCategory!.id,
	// 			Characteristic: {
	// 				create: [
	// 					{
	// 						value:
	// 							'Excelentes propriedades de isolação térmica',
	// 					},
	// 					{ value: 'Alta resistência à ruptura' },
	// 					{ value: 'Alta resistência ao corte' },
	// 					{ value: 'Alta resistência à abrasão' },
	// 					{ value: 'Excelente maleabilidade' },
	// 					{
	// 						value:
	// 							'Compatível com silicones, colas diversas e tintas isolantes.',
	// 					},
	// 				],
	// 			},
	// 			Application: {
	// 				create: [
	// 					{
	// 						value:
	// 							'Alta gama de aplicações, principalmente fabricação de EPIs',
	// 					},
	// 					{ value: 'Dutos sanfonados' },
	// 					{ value: 'Proteções térmicas' },
	// 					{ value: 'Luvas de proteção' },
	// 					{ value: 'Juntas de expansão' },
	// 					{
	// 						value:
	// 							'Cortinas para proteção contra respingos de solda',
	// 					},
	// 				],
	// 			},
	// 			Specification: {
	// 				create: [
	// 					{ specificationFieldId: 11, value: '0.6mm' },
	// 					{ specificationFieldId: 25, value: '0.412kgf' },
	// 					{ specificationFieldId: 12, value: '403kg' },
	// 					{ specificationFieldId: 13, value: '1.2mm' },
	// 					{
	// 						specificationFieldId: 14,
	// 						value: 'Contínuo: 300º - Controlado 400º',
	// 					},
	// 					{ specificationFieldId: 15, value: 'Tela' },
	// 					{ specificationFieldId: 11, value: '1.2mm' },
	// 					{ specificationFieldId: 25, value: '0.600kgf' },
	// 					{ specificationFieldId: 12, value: '806kg' },
	// 					{ specificationFieldId: 13, value: '1.2mm' },
	// 					{
	// 						specificationFieldId: 14,
	// 						value: 'Contínuo: 300º - Controlado 400º',
	// 					},
	// 					{ specificationFieldId: 15, value: 'Tela' },
	// 				],
	// 			},
	// 			images: {
	// 				create: [
	// 					{
	// 						url: 'https://andtextil.com.br/assets/imagens/produtos/linha-para-costura-aramida.jpg',
	// 					},
	// 				],
	// 			},
	// 		},
	// 	})

	const TecidoFibraAramidaFialemtno =
		await prisma.product.create({
			data: {
				name: 'Tecido de Fibra Aramida Cardado',
				description: '',
				slug: 'tecido-fibra-aramida-cardado',
				category_id: tecidosAramidaCategory!.id,
				Characteristic: {
					create: [
						{
							value:
								'Material isento de poliéster / algodão',
						},
						{
							value:
								'Isento de tratamento antichama, podendo ser lavado ou molhado sem prejuizo tecnico',
						},
						{
							value:
								'Excelentes propriedades de isolação térmica;',
						},
						{ value: 'Alta resistência à ruptura' },
						{ value: 'Alta resistência ao corte' },
						{
							value:
								'Resistência à chama direta e a respingos de solda',
						},
						{ value: 'Alta resistência à abrasão' },
						{ value: 'Excelente maleabilidade' },
						{
							value:
								'Compatível com silicones, colas diversas e tintas isolantes.',
						},
					],
				},
				Application: {
					create: [
						{
							value: 'Equipamentos de proteção individual',
						},
						{ value: 'Cabines e cortinas para solda' },
						{ value: 'Proteções térmicas' },
						{ value: 'Juntas de expansão' },
						{
							value:
								'Isolamento para pisos e salas de forno',
						},
					],
				},
				Specification: {
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
