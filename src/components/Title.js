import classes from './Title.module.css'

import logo from '../assets/logo.png'

function Title (props)
{
    return <div>
        <h1 className={classes.title}>Examon AI<img src={logo} alt="Logo" className={classes.logo} /></h1>
    </div>; 
}

export default Title; 