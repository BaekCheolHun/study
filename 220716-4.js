const products = [
    { title: 'Cabbage', id: 1},
    { title: 'Tomato', id: 2},
    { title: 'Orange', id: 3},
]

const listItems = products.map(product =>
        <li key={product.id}>
            {product.title}
        </li>
    );

return (
    <ul>{listItems}</ul>
)