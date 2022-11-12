import cartWhite from "../../img/cart-white.svg"

const ButtonAddCart = () => {
    return(
        <button id="addCart">
            <img src={cartWhite} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;