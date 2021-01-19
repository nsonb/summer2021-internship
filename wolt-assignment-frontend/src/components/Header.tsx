import logo from '../img/wolt-logo-vector.svg'

const Header = () => {
    const style: React.CSSProperties = {
        width: '100%',
        minWidth: '320px',
        height: '4rem',
        background: 'rgb(0, 194, 232)',
        color: 'grey',
        display: 'flex',
        flexDirection: 'row',
    }

    const logoStyle: React.CSSProperties = {
        margin: 'auto'
    }
    return (
        <div style= {style}>
            <img src = {logo} alt='name of the appp: Wolt' style={logoStyle}/>
        </div>
    )
}

export default Header;