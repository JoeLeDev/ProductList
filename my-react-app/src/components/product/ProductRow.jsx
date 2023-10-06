export function ProductRow ({product}) {


    const style = product.stocked ? undefined : {color:'red'} // Le produit est-il en stock si non met en rouge

    return <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
    </tr>
}