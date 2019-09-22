import React from 'react';
import { extractCommonClasses } from '../../Helpers/index.js'
import './closebutton.scss';

class CloseButton extends React.PureComponent {
    render() {
        return (
            <div className={`Sidebar-close-button ${extractCommonClasses(this.props)}`} onClick={this.closeSidebar}>
                <p>X</p>
            </div>
        )
    }
}

export default CloseButton;