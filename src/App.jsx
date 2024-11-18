import { useState } from 'react'
import './App.css'

function App() {

  const images = ["2.png", "1.png", '3.png', '4.png']
  const [mainImg, setMainImg] = useState(images[0])
  const [newImg, setNewImg] = useState(images[0])
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(1)
  const [buyCount, setBuyCount] = useState(1)


  const increase = () => {
    setBuyCount(buyCount + 1);
  }
  const decrease = () => {
    if (buyCount > 1) {
      setBuyCount(buyCount - 1);
    } else {
      setBuyCount(1);
    }
  }
  
  const nextHandler = () => {
    const newCount = (count + 1) % images.length;
    setCount(newCount);
    setNewImg(images[newCount]);
  }

  const prevHandler = () => {
    const newCount = (count - 1 + images.length) % images.length;
    setCount(newCount);
    setNewImg(images[newCount]);
  };

  return (
    <>
      <div>
        <div className='row'>
          <img className='logo' src={`/img/5.avif`} alt="" />
          <div className='span'>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
          <div className='cart-icon'>
            <img src={`/img/6.svg`} alt="" />
            <img src={`/img/7.png`} alt="" />
          </div>
    


        </div>

        <div className='container'>

          <div className='images'>

            <img onClick={() => setShow(true)} className='mainimg' src={`/img/${mainImg}`} alt="" />

            <div className='small-img'>
              {images.map(el => (
                <img onClick={() => setMainImg(el)} key={el} src={`/img/${el}`} />
              ))}
            </div>

          </div>

          <div className='desc'>
            <h3>SNEAKER COMPANY</h3>
            <h1>Fall limited edition <br />
              sneakers
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae temporibus accusantium voluptates ea sunt, soluta hic possimus corporis asperiores cupiditate!</p>
            <div className='price'>
              <h1>125$</h1>
              <h2>50%</h2>
            </div>
            <h2 className='old-price'>250$</h2>
            <div className="buy">
              <div className='counter'>
                <i onClick={increase} className="fa-solid fa-plus"></i>
                <p>{buyCount}</p>
                <i onClick={decrease} className="fa-solid fa-minus"></i>
              </div>
              <button className='buy-button'>
                <i className="fa-solid fa-cart-shopping"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {show && <div className='modal'>

          <img className='close' onClick={() => setShow(false)} src={`/img/9.svg`} alt="" />


          <div className='switch'>
            <button onClick={prevHandler} className='left'>
              <img src={`/img/prev.svg`} alt="" />
            </button>

            <img className='mainimg' src={`/img/${newImg}`} alt="" />

            <button onClick={nextHandler} className='right'>
              <img src={`/img/next.svg`} alt="" />
            </button>
          </div>

          <div className='small-img'>
            {images.map(el => (
              <img onClick={() => setNewImg(el)} key={el} src={`/img/${el}`} />
            ))}
          </div>

        </div>}
      </div>
    </>
  )
}

export default App
