//import Hooks
import { useState } from 'react'

//import styles
import './flash-notice.css'



let FlashNotice = () => {

  const [showFlashNotice, setShowFlashNotice] = useState(true)

  const activateFlash = () => {
    setShowFlashNotice(true)
    setTimeout(() => {
      setShowFlashNotice(false)
    }, 15000)
  }

  const className = showFlashNotice ? 'flash-notice' : 'flash-notice-dismissed'

  return (
    <div className={className}>
      {showFlashNotice && (

        <div className='container'>
          <div className='wrapper'>
            <div>
            <button onClick={() => setShowFlashNotice(false)}>X</button>
          </div>
          <h2>Message sent!</h2>
          <p>This is the Flash Message!</p>
        </div>
        </div>
      )}
    </div>
  )
}

export default FlashNotice