## Nested Creation

Nested creation in Prisma refers to creating a record along with its related records im a single operation. For example, if
a product model has a relation with Application, we can create a product and its associated applications simultaneously.

The `Product` model does not necessarily need to store a direct reference to Application. Instead, we specify the relation
using the relation name as a property in the creation object

If application has a productId column (acting as a foreign key to `Product`), Prisma will automatically create new Application
records and assign them the productId of the newly created product.

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

## File Structuring and Separation between Dal, Shared, Services, and DTOs

### shared/

is usually used to store global typings, such as ProductType, constants and enums, and pre utilitary
functions, such as data formatting

These types are used in any layer of the system

### data/dal/ (Data Access Layer)

These files are used to access the database directly

We can think of DAL like a "raw data repository"

Example:

// Returns the data exactly as prisma would deliver

export const getProductrs = () => {
return db.product.findMany({ include: ... })
}

No data transforming and no business logic, just interaction with the db

### data/services/ (or usecases/, domain/, etc)

These folders are used to apply the business logic, formatting and application rules.

Here we can use the data of the DAL, trransform it and deliver what the superior layer expects. Example:

```ts
// Transforma a estrutura bruta retornada pelo DAL
export const getFormattedProducts = async (): Promise<
  FormattedProductDto[]
> => {
  const products = await getProducts()

  return products.map((product) => ({
    ...product,
    specifications: product.specifications.reduce<Record<string, string[]>>(
      (acc, spec) => {
        const key = spec.specificationField.name
        acc[key] = acc[key] || []
        acc[key].push(spec.value)
        return acc
      },
      {},
    ),
  }))
}
```

### shared/dtos/ or shared/types/dtos (DTOs)

`Data Transfer Objects (DTOs)` are types that are created to transfer data between layers of the system in a controlled way.
They don't need to reflect 1:1 with what comes from the db, but what the interface or the other layer requires

They guarantee that only the necessary data is transferred and nothing else

Example:

export interface FormattedProductDto {
id: string
name: string
images: { url: string }[]
category: { name: string }
specifications: Record<string, string[]>
}

where this DTO can be the return of the getFormattedProduct from the service

Final Comparative:

Concept: Dal
Responsibility: Raw access to the database (without formatting and business rules)
Use case example: prisma.findMany()

Concept: Service
Responsibility: Uses the DAL to apply the business logic and deliver formatted data
Use case example: Format specifications

Concept: DTOs
Responsibility: Defines the final shape of the data to be used in other layers
Use case example: FormattedProductDTO

Concept: shared
Responsibility: Raw types, utilitaries, constants (without business logic)
Use case example: ProductWithDetails

The reason that DTOS and Services are out of the data folder, is because this folder is specific to the infrastructure.
And `services` and `dtos/` belong to the application and domain layer, where the data processing and preparation happen.

So

Layer: Infrastructure
Infrastructure is everything that provides means for the app to work, but doesn't define the application logic.

It is:
. where the data lives
. how they are persisted (SQL, NoSql, Files, etc)
. how we access them (ORM, pure sql, external api, etc)

But it doesn't know
. How to group products by category
. If a product is on sale or not
. If we can or cannot see that data

The db is a mean, but not the brain of the application, a simple analogy would be:

Imagine that we have a restaurant

. Infrastructure = the kitchen (the db), utensils, ingredients.
. Domain = the chef that uses its logic to prepare the dishes
. Application = The waiter bringing the dish organized for the client (DTOs, UI)

We may think that, "if it doesn't know how to group the products by category, why with prisma includes we are able to include
the products of the category?

The main point is, just because we can do it on prisma, it does not mean that we must do all the domain logic. So

Prisma can:
. Fetch categories with its products
. Filter the products by categoryId
. Order by name, price, data, etc.
. Pull relations with include.

Everything is excellent and desirable for performance and simplicity

Where does the responsibility of domain (service) begin?
. Specific business rules such as:

    . Only show products of active categories
    . Group categories by type (ex: clothes, shoes)
    . Apply discounts based on business criteria
    . Formatting the specifications of a product in a special way, like we did with the Record<string, string[]>

🧠 DDD (Domain-Driven Design) Thinking

Even if Prisma can see everything, layer separation gives
. Clarity of what is business rule and what is just data fetching
. Easier tests, we can test just the service with mocked data without depending on the database
. Less coupling with the ORM, which means that even if Prisma is exchanged with other, the DAL changes but the domain doesn'tf

Folder: data/dal/
Responsibility: Raw access to the database
Example: findMany, findUnique, etc

Layer: Domain
Folder: services/
Responsibility: Business logic, formatting, filters, validations
Example: Grouping products, format specifications

Layer: Communication
Folder: dtos/
Responsibility: Format data for the api or components
Example: Transform the product data on the right shape for the front end

Layer: Support
Folder: shared/
Responsibility: Pure types, utils, constants
Example: Global typings, helpers

Therefore, the reason to maintain the services and dtos outside of data is because of

1: Purpose clarity
data/ deals with "how to fetch" the data
services/ deals with "how to use" the data

1. Scalability
   If tomorrow we stop using Prisma by an external library, only `data/` change
   `services/` and `dtos/` remain the same, because they are not coupled to the db

2. Separation by Layers
   data/ = infrastrucutre layer
   services/ = domain layer
   dtos/ = application layer / presentation

## types.ts and prisma-types.ts

Instead of using just the types.ts file for the shared types across the app layers, it is a good approach to also create
a prisma-types, why is it?

Here, we have an example of the product inclues and withDetails

```ts
export const productIncludes = {
  category: true,
  images: true,
  applications: true,
  specifications: {
    include: {
      specificationField: true,
    },
  },
  characteristics: true,
} as const

export type ProductWithDetails = Prisma.ProductGetPayload<{
  include: typeof productIncludes
}>
```

The idea of creating this file, or even a folder of shared/prisma/, is used to organize better the types that come directly
from prisma, specially when types.ts begings to accumulate things like

- Infered types from prisma
- Utilitary types
- DTOs
- Enums or constants

Mixing everything in an unique types.ts can turn into a chaotic mix of things. Basically,. to summarize

DAL - Direct access to the db with prisma, without formatting logic
DTO - Defines the shape of the data to be delivered (the output "contract")
Service - Unites the data and transform them for the DTO using business rules
shared/types.ts - Prisma raw types or utilitaries, without domain logic
