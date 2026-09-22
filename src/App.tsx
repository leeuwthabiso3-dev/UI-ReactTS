import './App.css'

function App() {

  return (
    <div>
      <div className="header">
        <div className='heading'>
          <label>B</label>
          <label className='lovey'>Lovey</label>
        </div>
        <div className="navbar">
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#artists">Artists</a>
          <a href="#news">News</a>
        </div>
        <input className='input' placeholder='Search' />
        <button className='btn'>Register</button>
      </div>

      <div>
        <button className='imgBtn'>Get started</button>
        <img src="images/office.jpg"
          className='imgHead' />
      </div>

      <div className='grid'>
        <div className='inline'>
          <div className='content'>
            <h1> revgaer rwga gra </h1>
            <p>rfcgc uhygyug ugug  jhygygjy hjbjhbjhj
              jnkjn nkjnkn hjbjhb jhvjv hjvvhjv hjvjhvjh jhybjb jhybjg jhbgjg jhgj jgbjg
              ubhuih uihuihihb iuhuih iuhiu iuhiu uihuih iuhuih jhgcbdfnb
              uyguygu guyguyg uyguy gyujguy g</p>
            <button>ok</button>
            <button className='btn2'>ok</button>
          </div>
          <img className="imgGrid" src="images/chair.jpg" />
        </div>

        <div className='inline'>
          <img className="imgGrid" src="images/lamp.jpg" />
          <div className='content'>
            <h1> revgaer rwga gra </h1>
            <p>rfcgc uhygyug ugug  jhygygjy hjbjhbjhj
              jnkjn nkjnkn hjbjhb jhvjv hjvvhjv hjvjhvjh jhybjb jhybjg jhbgjg jhgj jgbjg
              ubhuih uihuihihb iuhuih iuhiu iuhiu uihuih iuhuih jhgcbdfnb
              uyguygu guyguyg uyguy gyujguy g</p>
            <button>ok</button>
            <button className='btn2'>ok</button>
          </div>
        </div>
      </div>

      <div>
        <button className='imgBtn1'>Get started</button>
        <img className='imgHead' src="images/office.jpg" />
      </div>

    </div>
  )
}

export default App
