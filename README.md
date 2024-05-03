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

## Inicialización del sistema

Ejecutar los siguientes comandos:

bun install
bunx prisma db push

## Rellenado de datos de prueba

Ejecutar el siguiente comando:

bun prisma/seed.ts

## Script newTech.ts

Introduce nuevos technicians en la base

bun scripts/newTech.ts <firstName> <lastName>

## Script newLab.ts

Introduce nuevos laboratories en la base

bun scripts/newLab.ts <labName>

## Script newProj.ts

Introduce nuevos projects en la base

bun scripts/newProj.ts <projectName>

## Script newReg.ts

Introduce nuevos registers en la base

bun scripts/newReg.ts <day> <hour> <techId> <labId> <projectId>

## Script findRegByTechId.ts

Saca por consola todos los registers del techId indicado

bun scripts/findRegByTechId.ts <techId>

## Script findRegById.ts

Saca por consola el register del hoursRegisterId indicado

bun scripts/findRegById.ts <hoursRegisterId>

## Script deleteRegById.ts

Elimina de la base de datos el register indicado por hoursRegisterId

bun scripts/deleteRegById.ts <hoursRegisterId>