import React from 'react';
import './closebutton.scss';

class CloseButton extends React.PureComponent {
    render() {
        const { position, open } = this.props;
        const classes = {
            open: open ? 'open' : 'close',
            position: position === 'right' ? 'right' : 'left'
        };
        console.log(Object.values(classes));
        return (
            <div className={`Sidebar-close-button ${open ? 'open' : 'close'}`} onClick={this.closeSidebar}>
                <p>X</p>
            </div>
        )
    }
}

export default CloseButton;