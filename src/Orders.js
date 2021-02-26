import React, { useEffect, useState } from 'react';
import './Orders.css';
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from './Order';

function Orders() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {


            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')                           //return all the orders as document
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (                     //magic function (gives the real-time database)
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>

        </div>
    )
}

export default Orders
