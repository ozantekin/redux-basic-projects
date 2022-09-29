import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addBasket } from '../redux/actions/index.actions'

const Products = (props) => {
  return (
    <div>
      <h2>
        <span>Alınacaklar Listem</span>
        <Link className='link' to='/basket'>
          Faturam &#10095;
        </Link>
      </h2>
      {props.productList.map((product) => (
        <div className='product'>
          <img src={product.image} alt={product.name} />
          <div>
            <h4>{product.name}</h4>
            <p>{product.price}₺</p>
            <button onClick={() => props.addBasket(product)}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    productList: state.productList,
    basket: state.basket,
  }
}

export default connect(mapStateToProps, { addBasket })(Products)
