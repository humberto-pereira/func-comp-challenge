import React from 'react'
import css from './css/NavBarSimple.module.css'

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Hello, guest!',
            buttonText: 'log in',
            title: 'My Gallery'
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) =>{
            console.log('previous state', prevState);
            console.log('previous props', prevProps);
            return {
                greeting: prevState.greeting === 'Hello, guest!' ? 'Welcome back, user!' : 'Hello, guest!',
                buttonText: prevState.buttonText === 'log in' ? 'log out' : 'log in',
            }
        });
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>{this.state.title}</h1>
                <button button onClick={() => this.handleClick()}>
                    {this.state.buttonText}
                </button>
                <span>{this.state.greeting}</span>
            </div>  
        )
    }
    
}



export default NavBarSimple;