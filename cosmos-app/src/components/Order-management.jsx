import React, { useEffect } from "react";
import { CreateOrder, GetOrders } from '../services/order-service'

export default function OrderManagement() {

    const [customerId, setCustomerId] = React.useState("");
    const [productId, setProductId] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [qty, setQty] = React.useState("");
    const [orders, setOrders] = React.useState([]);

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        console.log("order submitted");
        try {
            const order = {
                customerId,
                items: [
                    {
                        productId,
                        price,
                        quantity: qty
                    }
                ]
            }
            const response = await CreateOrder(order);
            console.log(response.data);
        } catch (error) {
            alert(console.error);

        }
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await GetOrders();
            console.log(response);
            setOrders(response);
        }
        catch (error) {
            console.log(error);
            alert(error);
        }

    }

    return (
        <>
            <p>Create Order</p>

            <form onSubmit={handleOrderSubmit}>

                <label htmlFor="cus_id">Customer ID</label>
                <input type="text" id="cus_id" name="cus_id" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required></input>
                <br />

                <label htmlFor="prod_id">Product ID</label>
                <input type="text" id="prod_id" name="prod_id" value={productId} onChange={(e) => setProductId(e.target.value)} required></input>
                <br />

                <label htmlFor="price">Price</label>
                <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required></input>
                <br />

                <label htmlFor="qty">Quantity</label>
                <input type="text" id="qty" name="qty" value={qty} onChange={(e) => setQty(e.target.value)} required></input>
                <br />

                <input type="submit" value="submit" />

            </form>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Customer ID</th>
                    <th>Date</th>
                    <th></th>
                </tr>
                {
                    orders && orders.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.customer}</td>
                            <td>{item.createdAt}</td>
                            <td><button>Edit</button></td>
                            <td><button>View</button></td>
                        </tr>
                    )
                    )
                }
            </table>

        </>
    )
}

