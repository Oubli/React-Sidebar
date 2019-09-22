### Idiomas
* [SPA](./README_ES.md)
* [ENG](./README.md)

# React Sidebar
React Sidebar es un componente listo para funcionar como sidebar lateral 
( en futuras versiones también  horizontal ) que incluye la posibilidad de desplazamiento 
desde la derecha o desde la izquierda.

Aún está en desarrollo, pero es plenamente funcional para proyectos básicos.

El estado de apertura del componente debe ser controlado desde fuera.

## Instalación

```$xslt
npm install @oubli/react-sidebar --save
```

## Uso
El uso es realmente sencillo, sólo debes importar la librería
e incluir dentro del componente los elementos que quieras mostrar en su interior.

```javascript
import React from 'react';
import Sidebar from '@oubli/react-sidebar'

const Example = (props) => (
    <Sidebar
        position={'right'}
        open={true}
    >
        <section>
            <p>The inside</p>
        </section>
    </Sidebar>
)
```


# Propiedades
| Name          | Default       | Description  |
| ------------- |:-------------:| ------------:|
| position           | 'left'          |  |
| open           | false      |  |

## A tener en cuenta
Sólo acepta un elemento react en su interior, 
por lo que si quieres renderizar más, debe estar envuelto en una etiqueta.