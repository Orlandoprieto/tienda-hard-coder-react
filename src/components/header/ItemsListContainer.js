import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul>
            <li>
                <Link to="category/procesador"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/placa madre">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/fuente">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/placa de video">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

