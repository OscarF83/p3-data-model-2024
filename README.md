# Entidades

Se han creado 4 entidades

Entidad technicians
    -techId
    -firstName
    -lastName

Entidad laboratories
    -labId
    -labName

Entidad projects
    -projectId
    -projectName

Entidad hoursRegister
    -hoursRegisterId
    -day
    -techId
    -labId
    -projectId

** Relación Many to Many donde la tabla hoursRegister hace de enlace con el resto de entidades technicians, laboratories y projects.

## Inicialización del sistema

Ejecutar los siguientes comandos:

bun install
bunx prisma db push

## Rellenado de datos de prueba

Ejecutar el siguiente comando:

bun prisma/seed.ts

o también:

bunx prisma db seed

## Script newTech.ts

Introduce nuevos technicians en la base.

bun scripts/newTech.ts <firstName> <lastName>

## Script newLab.ts

Introduce nuevos laboratories en la base.

bun scripts/newLab.ts <labName>

## Script newProj.ts

Introduce nuevos projects en la base.

bun scripts/newProj.ts <projectName>

## Script newReg.ts

Introduce nuevos registers en la base.

bun scripts/newReg.ts <day> <hour> <techId> <labId> <projectId>

## Script findRegByTechId.ts

Saca por consola todos los registers del techId indicado.

bun scripts/findRegByTechId.ts <techId>

## Script findRegById.ts

Saca por consola el register del hoursRegisterId indicado.

bun scripts/findRegById.ts <hoursRegisterId>

## Script deleteRegById.ts

Elimina de la tabla hoursRegister el registro indicado por hoursRegisterId.

bun scripts/deleteRegById.ts <hoursRegisterId>

## Script findTechByFirstName.ts

Busca y saca por consola todos los registros de la tabla hoursRegister a través de un findMany aplicado a technicians filtrando por firstName.

bun scripts/findTechByFirstName.ts <firstName>

## Script findRegAllNamesById.ts

Saca por consola todos los registers del techId indicado pero a diferencia del script findRegById.ts este devuelve los nombres y no los Id, haciendo join con las tablas de technicians, laboratories y projects.

bun scripts/findTechByFirstName.ts <techId>