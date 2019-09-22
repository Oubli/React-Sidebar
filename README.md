### Languages
* [ESP](./README_ES.md)
* [ING](./README.md)

# React Sidebar
React Sidebar is a component ready to work as a side sidebar (in future versions also horizontal) 
that includes the possibility of displacement from the right or from the left.

It is still under development, but is fully functional for basic projects.

The opening state of the component must be controlled from outside. 

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
