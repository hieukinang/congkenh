// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { backendUrl, currency } from '../App';
// import { toast } from 'react-toastify';

// const ViewProduct = ({ token }) => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const response = await axios.get(backendUrl + "/api/product/view", {
//                     headers: { token }
//                 });

//                 if (response.data.success) {
//                     setProduct(response.data.product);
//                 } else {
//                     toast.error(response.data.message);
//                 }
//             } catch (error) {
//                 console.log(error);
//                 toast.error("Error fetching product details");
//             }
//         };

//         fetchProduct();
//     }, [id, token]);

//     if (!product) return <p>Loading product details...</p>;

//     return (
//         <div className="p-4">
//             <h2 className="text-xl font-bold">{product.name}</h2>
//             <img className="w-40 my-4" src={product.image[0]} alt={product.name} />
//             <p><b>Category:</b> {product.category}</p>
//             <p><b>Price:</b> {currency}{product.price}</p>
//             <p><b>Description:</b> {product.description}</p>
//         </div>
//     );
// };

// export default ViewProduct;