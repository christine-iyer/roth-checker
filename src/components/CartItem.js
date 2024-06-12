import React from 'react';

export default function CartItem({ item }) {
    return (
        <li>
            {item.name} - {item.price}
        </li>
    );
}