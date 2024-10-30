import Footer from './components/Footer'
import BizCard from './components/BizCard'
import data from './data/cardsData'

export default function App() {
  const bizcards = data.map(item => {
    return (
      <BizCard
          key={item.id}
          item={item}
      />
    )
})        
    

  return (
    <>
      <div className='container'>
          {bizcards}
          <Footer />
      </div>
    </>
  )
}
