import React from "react";
import { useCart } from "react-use-cart";

const Basket = () => {
  const {
    isEmpty,
    cartTotal,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) {
    return <h1 className="text-center">Your Basket is Empty</h1>;
  }
  return (
    <div>
      <section className="py-4 container">
        <h2 className="text-center">Total Price:{cartTotal}$</h2>
        <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12">
              <h5>
                Card:{totalUniqueItems} Total Items:{totalItems}
              </h5>
              <table className="d-flex align-items-center justify-content-center table table-light table-hover m-0">
                <tbody>
                  {items.map((deyer, acar) => {
                    return (
                      <tr>
                        <td><img src={deyer.img} width="100" alt={deyer.title} /></td>
                        <td>{deyer.title}</td>
                        <td><font color="orange">{deyer.price}$</font></td>
                        <td>
                          <button className="btn btn-danger mx-1" onClick={()=>updateItemQuantity(deyer.id, deyer.quantity - 1)}>-</button>
                          <font color="red">{deyer.quantity}</font>
                          <button className="btn btn-success mx-1" onClick={()=>updateItemQuantity(deyer.id, deyer.quantity + 1)}>+</button>
                        </td>
                        <td><button className="btn btn-warning" onClick={()=>{removeItem(deyer.id)}}>clear</button></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-3 col-auto ms-auto d-flex align-items-center justify-content-center w-100">
              <button className="btn btn-outline-danger" onClick={()=>{emptyCart()}}>Clear Card</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basket;
