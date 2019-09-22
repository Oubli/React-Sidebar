### Languages
* [ESP](./README_ES.md)
* [ING](./README.md)

# React Background Image
React Sidebar es un componente listo para funcionar como sidebar lateral 
( en futuras versiones también  horizontal ) que incluye la posibilidad de desplazamiento 
desde la derecha o desde la izquierda.

Aún está en desarrollo, pero es plenamente funcional para proyectos básicos.

El estado de apertura del componente debe ser controlado desde fuera. 

## How to Install

```$xslt
npm install @oubli/react-sidebar --save
```

## Usage
The use is really simple, just import the library
and include inside the component the elements that you want to show inside.

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

# Props
| Name          | Default       | Description  |
| ------------- |:-------------:| ------------:|
| position           | 'left'          |  |
| open           | false      |  |

## Tips 
The parent container should have a defined height and width, if this is not likely to cause problems.
