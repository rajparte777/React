
import Left from './components/sectionA/Left'
import Right from './components/sectionA/Right'
import Upper from './components/sectionA/Upper'

const App = () => {

const cards = [
{
id: 1,
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit architecto laudantium.",
buttonText: "Satisfied",
image: "https://i.pinimg.com/474x/69/c9/f0/69c9f0889f8c0c2c065f37178d001f0e.jpg"
},
{
id: 2,
description: "Discover new experiences and enjoy every moment of your journey.",
buttonText: "Happy",
image: "https://www.rehahnphotographer.com/wp-content/uploads/2021/06/rehahn-vietnam-portrait-fine-art-photography-dao-ethnic.jpg"
},
{
id: 3,
description: "Explore beautiful places and create unforgettable memories.",
buttonText: "Explore",
image: "https://img.magnific.com/free-photo/smiling-portrait-studio-woman_1303-2289.jpg?semt=ais_hybrid&w=740&q=80"
},
{
id: 4,
description: "Find inspiration in nature and make every day special.",
buttonText: "Inspired",
image: "https://images.stockcake.com/public/b/2/7/b2762e5f-bcdc-4d4a-aaec-c92989485b49_large/striking-facial-portrait-stockcake.jpg"
},
{
id: 5,
description: "Enjoy the beauty of life and keep moving forward.",
buttonText: "Amazing",
image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500"
}
]

  return (
  <>
  <Upper/>
  <div className="w-full h-[80vh] mx-3 px-3 mt-2 flex gap-3 overflow-x-hidden">
<Right/>
<Left cards={cards}/>
  </div>
  </>
  )
}

export default App