import './App.css'
import Category from './components/Category';
import CategoryList from './components/CategoryList';
import Item from './components/Item';

function App() {
  return (
    <>
    <Category name="Grocery List">
        <CategoryList name="Fruits">
            <Item name="Apple" price={50}/>
            <Item name="Banana" price={30}/>
        </CategoryList>

         <CategoryList name="Vegetables">
            <Item name="Carrot" price={50}/>
            <Item name="Potato" price={30}/>
        </CategoryList>
      </Category>

      <Category name='Animal List'>
        <CategoryList name="Lion">
            <Item name="Panthero leo" weight={140} type="Animal"/>
        </CategoryList>

        <CategoryList name="Zebra">
            <Item name="Equus quagga" weight={240} type="Animal"/>
        </CategoryList>
      </Category>


    </>
  )
}

export default App;
