### Idiomas
* [SPA](./README_ES.md)
* [ENG](./README.md)

# React Background Image

React Sidebar is a component ready to work as a side sidebar (in future versions also horizontal) 
that includes the possibility of displacement from the right or from the left.

It is still under development, but is fully functional for basic projects.

The opening state of the component must be controlled from outside. 

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