import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import {BsShop} from 'react-icons/bs'
import './Sidebar.css'


const Sidebar = ({handleChange}) => {
    
    return ( 
        <>
        <section className="sidebar">
            <div className="logo-container">
                <BsShop style={{fontSize: "35px", marginTop: '25px', cursor: "pointer"}}/>
            </div>
            <Category handleChange = {handleChange} />
            <Price handleChange ={handleChange}/>
            <Colors handleChange = {handleChange} />
        </section>
        </>
     );
}
 
export default Sidebar;