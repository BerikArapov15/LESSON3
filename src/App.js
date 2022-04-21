import { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import EditModal from "./components/EditProduct/EditProduct";
import Header from "./components/Header/Header";
// import ProductCard from "./components/ProductCard/ProductCard";
import ProductList from "./components/ProductList/ProductList";


function App() {


  // ?Модалка для добавления товаров
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


// ? Модалка для изменения товаров
const [editModal, setEditModal] = useState(false);
  const handleEditClose = () => setEditModal(false);
  const handleEditShow = () => setEditModal(true);

  // ? СОСТОЯНИЕ ДЛЯ ОБЩЕГО ЗАДАНИЯ МАССИВА
  const [products,setProducts] = useState([])
console.log(products);


  // ?функция для добавление нового продукта
  const handleProduct =(newObj)=>{
  let newProducts = [...products]
  newProducts.push(newObj)
  setProducts(newProducts)
  }


  // ? функции для удаление

const deleteProduct = (id) => {
   let newProducts = products.filter((item)=>item.id !==id)
   setProducts(newProducts)

}

// ? состояния для изменяемого обьекта
const [editProduct, setEditProduct] = useState({})

// ? функция для поиска редактируемого элемента
 
const handleEdit =(id) => {
  let obj = products.filter((item)=> item.id === id)
  handleEditShow();
  setEditProduct(obj[0]);
}
// ?функция для сохранения отредактированного элемента
 
const handleSave =(obj) =>{
  let newProducts=products.map((item)=>{
    if(item.id ===obj.id ){
      return obj;
    }
    return item;
  });

  setProducts(newProducts);
handleEditClose()
}




  return (
  <>
  <Header  handleShow ={handleShow}/>
  <AddProduct 
  handleClose={handleClose} 
  show={show} 
  handleProduct={handleProduct}/>
  <ProductList
   products= {products}
   deleteProduct={deleteProduct}
   handleEdit ={handleEdit}
   />
  

  {editModal && <EditProduct  
  editModal ={editModal}
  handleEditClose={handleEditClose} 
  handleSave ={handleSave}
  editProduct ={editProduct}
  />}
  
  </>
  );
}

export default App;
