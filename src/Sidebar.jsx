import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeConsumer} from '@oubli/react-theme';
import CloseButton from './Components/CloseButton/index.jsx';
import './sidebar.scss';
import { extractCommonClasses } from "./Helpers/index.js";

class Sidebar extends React.PureComponent{
    handleOverflowPage = () => {
        // if(this.state.open) {
        //     document.getElementById('root').style.overflow = "hidden";
        //     document.getElementsByTagName('body')[0].style.overflow = "hidden";
        //     document.getElementsByTagName('html')[0].style.overflow = "hidden";
        // }
        // else {
        //     document.getElementById('root').style.overflow = "";
        //     document.getElementsByTagName('body')[0].style.overflow = "";
        //     document.getElementsByTagName('html')[0].style.overflow = "";
        // }
    };

    closeSidebar = () => {
        this.props.closeSidebarFn && this.props.closeSidebarFn()
    };

    openSidebar = () => {
        this.props.openSidebarFn && this.props.openSidebarFn()
    };

    rebuildChildren = () => {
        const { children, position, open } = this.props;
        if(children) {
            const newProps = {
                open,
                closeSidebar: this.closeSidebar,
                openSidebar: this.openSidebar,
                positionSidebar: position,
            };

            return React.cloneElement(children, newProps)
        } else return null;
    };

    render(){
        const { position, open } = this.props;
        const commonClasses = extractCommonClasses({open, position});

        return(
            <div className={`Sidebar-Wrapper ${commonClasses}`}>
                <CloseButton
                    open={open}
                    position={position}
                    closeSidebar={this.closeSidebar}
                />
                <div className={`Sidebar-Content`}>
                    { this.rebuildChildren() }
                </div>
            </div>
        )
    }
}

Sidebar.defaultProps = {
    position: 'right',
    closeSidebarFn: ()=>{},
    openSidebarFn: ()=>{}
};



class SidebarPortal extends React.Component {
    render(){
        const container = document.getElementById('root');
        return container ? ReactDOM.createPortal(<Sidebar {...this.props} />, container) : null

    }
}

export default ThemeConsumer(SidebarPortal)