import header from '../assets/Header.jpg'

export default function Header() {
  return (
    <header style={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '300px',
      backgroundImage: `url(${header})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        textAlign: 'center'
      }}>
        <h1>¡Mamma Mia Pizzeria!</h1>
        <p> The best pizza in town! </p>
      </div>
    </header>
  )
}
