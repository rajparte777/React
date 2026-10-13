
import Left from './components/sectionA/Left'
import Right from './components/sectionA/Right'
import Upper from './components/sectionA/Upper'

const App = () => {
  return (
  <>
  <Upper/>
  <div className="w-full h-[80vh] mx-3 px-3 mt-2 flex gap-3 overflow-hidden">
<Right/>
<Left />
  </div>
  </>
  )
}

export default App