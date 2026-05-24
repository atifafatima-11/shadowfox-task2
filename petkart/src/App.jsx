import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import "./App.css";



const products = [

/* DOG */
{id:1,name:"Dog Food Premium",animal:"dog",price:999,img:"https://diamondpet.storage.googleapis.com/wp-content/uploads/2025/03/11081957/front-bag-diamond-premium-formula-dogs-031025.png"},
{id:2,name:"Dog Bed",animal:"dog",price:1499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIkJnyd-u2ywJM1vvznN-BbA4wucK6wAcJPw&s"},
{id:3,name:"Dog Leash",animal:"dog",price:599,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAonAPEb9NZXRcoIbl6ealAT9o7zhGYcVj-Q&s"},
{id:4,name:"Dog Shampoo",animal:"dog",price:450,img:"https://m.media-amazon.com/images/I/71e5MZsT79L.jpg"},
{id:5,name:"Dog Toy",animal:"dog",price:299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgym0ixqGkCQamHFLN3tmi9pjGfD6cJEBAuA&s"},
{id:6,name:"Dog Collar",animal:"dog",price:499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxojTtpAnRsYVMWTaZpuXo6kUL2gQtx-djug&s"},
{id:7,name:"Dog Bowl",animal:"dog",price:399,img:"https://m.media-amazon.com/images/I/618IHNRA+dL._AC_UF350,350_QL80_.jpg"},
{id:8,name:"Dog Jacket",animal:"dog",price:799,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWHoSklrBzXS0_9Cx2m1kKR_fHnyXy8ooZ2A&s"},
{id:9,name:"Dog Comb",animal:"dog",price:199,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fXvIgPq-NLfQclEWut1owU3YsUBHuPRKfA&s"},
{id:10,name:"Dog Snacks",animal:"dog",price:250,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUTixgNP1_fzJhgsmtH65YDwDcwzdJkFVQw&s"},

/* CAT */
{id:11,name:"Cat Food",animal:"cat",price:899,img:"https://cdn.dummyjson.com/product-images/groceries/cat-food/1.webp"},
{id:12,name:"Cat Bed",animal:"cat",price:1399,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ra96xaOdMHgswfHRsB8z2VTCVgTrFS1-Lw&s"},
{id:13,name:"Cat Tower",animal:"cat",price:2499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfgh_CBdzEYQIxJupdPSXjmiNNxXWBlY_Ug&s"},
{id:14,name:"Cat Toy",animal:"cat",price:350,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPw6g9O8QbaRULOTP1P9oJwnQeVZmg8XY0BA&s"},
{id:15,name:"Cat Collar",animal:"cat",price:299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3k2QT--cNgpeysVGQRK3NjBFWjEYyE_-gg&s"},
{id:16,name:"Cat Tunnel",animal:"cat",price:599,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGXGTvG-jIUyi1gTvb5JA6kpDwwolM_k2xA&s"},
{id:17,name:"Cat Scratcher",animal:"cat",price:799,img:"https://m.media-amazon.com/images/I/61LsnH5NpzL.jpg"},
{id:18,name:"Cat Brush",animal:"cat",price:199,img:"https://m.media-amazon.com/images/I/71qfz1I1S+L.jpg"},
{id:19,name:"Cat House",animal:"cat",price:999,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8bB99BsV0SCigL_h26c3Z5_5uCGLOoa3hA&s"},
{id:20,name:"Cat Snacks",animal:"cat",price:250,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkqKD_MW-5R_L7GKEytEd-oJW4PsSiZsDPuw&s"},

/* BIRD */
{id:21,name:"Bird Cage",animal:"bird",price:2499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfKAYbo1g1ZxzZjP0G-xH0Vf_PEzd-N-4E6w&s"},
{id:22,name:"Bird Food",animal:"bird",price:499,img:"https://m.media-amazon.com/images/I/81ydmBWzqXL._AC_UF1000,1000_QL80_.jpg"},
{id:23,name:"Bird Swing",animal:"bird",price:350,img:"https://m.media-amazon.com/images/I/61SBpJMTdML._AC_UF894,1000_QL80_.jpg"},
{id:24,name:"Bird Toy",animal:"bird",price:299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYipW6RqskLaHfTjThw9L9uZ2KYjLkTAdLHA&s"},
{id:25,name:"Bird Feeder",animal:"bird",price:399,img:"https://m.media-amazon.com/images/I/71eLfxpBbiL._AC_UF894,1000_QL80_DpWeblab_.jpg"},

/* FISH */
{id:26,name:"Fish Tank",animal:"fish",price:2999,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvam2c9_AQSOZhc1PxlB3yywtwUiuEl6oc6A&s"},
{id:27,name:"Fish Food",animal:"fish",price:399,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9IdaflV-tP943ENCh1Sp_vO0dW8alsHB6SQ&s"},
{id:28,name:"Aquarium Light",animal:"fish",price:699,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4ep0_GsZFe8y-3J0euhZHONIqkhKH25fYA&s"},
{id:29,name:"Tank Filter",animal:"fish",price:899,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRg2fu1KjiYE_j_fITu-NU0ZwMPP_z4pQrQA&s"},
{id:30,name:"Decor Plants",animal:"fish",price:499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnlcccj5uleWzqaZsyuvUMWPQYkQTPyMyzg&s"},

/* RABBIT */
{id:31,name:"Rabbit Food",animal:"rabbit",price:450,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwsaYaf6lIJWX3q6lCtq5EN-9RQrfzRzDS4w&s"},
{id:32,name:"Rabbit Cage",animal:"rabbit",price:1999,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuNL5dGXMkOTH0fvtr2DZYPL7N_FGkrDQ4A&s"},
{id:33,name:"Rabbit Toy",animal:"rabbit",price:250,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB8gXTAEf3KVkHkyyQpcJIKdY9KpnNmeVaDQ&s"},

/* HORSE */
{id:34,name:"Horse Saddle",animal:"horse",price:4999,img:"https://hilason.com/cdn/shop/files/106882-z.jpg?v=1762666822"},
{id:35,name:"Horse Feed",animal:"horse",price:1299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BL3MCBed2Zmc-RrYlugX_RFqoixPgStnwg&s"},

/* HAMSTER */
{id:36,name:"Hamster Wheel",animal:"hamster",price:799,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD6mlyGicPJP2j1FwQt1CJUnO7aFbhznFfA&s"},
{id:37,name:"Hamster Food",animal:"hamster",price:299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBFV2GZqJE1LR0hk9tKWGcu3PexlKAy7a2A&s"},

/* TURTLE */
{id:38,name:"Turtle Tank",animal:"turtle",price:2499,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNlyB5-2fmNBKIR5e3rtq2bA7P8KKdtENtg&s"},
{id:39,name:"Turtle Food",animal:"turtle",price:350,img:"https://eb2fe470.delivery.rocketcdn.me/wp-content/uploads/ZM-92_Hatchling_Fd_22.jpg"},

/* PARROT */
{id:40,name:"Parrot Cage",animal:"parrot",price:2299,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyEX4e4hx4iHFSFxo1CYryzXc9EZlhwwRO5g&s"},
{id:41,name:"Parrot Food",animal:"parrot",price:450,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVFZujou0zRy4ARfibhjDshjjEHDIINSPDg&s"},

/* GUINEA */
{id:42,name:"Guinea Food",animal:"guinea",price:399,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNZ6TJjQehiMYNGJS8-hwwbYpCrZP46ONhLg&s"},
{id:43,name:"Guinea Cage",animal:"guinea",price:1899,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYY0Cr61ikTQQ9YQE90VkjKu8JL60ok4Ftg&s"}

];
function Login({ setUser }) {
  const [owner, setOwner] = useState("");
  const [pet, setPet] = useState("");
  const [type, setType] = useState(" ");
  const navigate = useNavigate();

  const login = () => {
    const user = { owner, pet, type };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  return (
    <div className="login-box">
      <h1 >🐾 PetKart Login</h1>
      <input placeholder="Owner Name" onChange={e => setOwner(e.target.value)} />
      <input placeholder="Pet Name" onChange={e => setPet(e.target.value)} />
      
      <button onClick={login}>Enter Store</button>
    </div>
  );
}


function Navbar({cart}) {
return (
<nav>
<h2>🐾 PetKart</h2>

<Link to="/">Home</Link>
<Link to="/products">Shop</Link>
<Link to="/cart">Cart ({cart.length})</Link>
<div className="nav-links">
  <button onClick={()=>{
localStorage.removeItem("user");
window.location.reload();
}}>
Logout
</button>
</div>

</nav>
);
}

function Home({user}){
return(
<div className="hero">
<div className="mini-logo">🐾</div>
<h1>Welcome {user.pet}</h1>
<p>Owner: {user.owner}</p>


<Link to="/products">
<button>Shop Now</button>
</Link>
</div>
)
}

function Products({add}){
const [search,setSearch]=useState("");

const filtered=products.filter(p =>
p.animal.toLowerCase().includes(search.toLowerCase())
);

return(
<div className="products-page">

<input
placeholder="Search animal"
value={search}
onChange={e=>setSearch(e.target.value)}
/>

<div className="products-grid">
{filtered.map(p=>(
<div key={p.id} className="card">
<img src={p.img}/>
<div className="card-content">
<h3>{p.name}</h3>
<p>{p.animal}</p>
<p className="price">₹{p.price}</p>
<button onClick={()=>add(p)}>Add to Cart</button>
</div>
</div>
))}
</div>
</div>
)
}

function Cart({cart}){
const navigate=useNavigate();

return(
<div className="products-page">
<h1>Your Cart</h1>

{cart.map((p,i)=>(
<div key={i} className="cart-item">
<img src={p.img}/>
<div>
<h3>{p.name}</h3>
<p>{p.animal}</p>
<p className="price">₹{p.price}</p>
</div>
</div>
))}

{cart.length>0 &&
<button onClick={()=>navigate("/payment")}>
Proceed to Buy
</button>
}
</div>
)
}

function Payment({setCart}){

const navigate=useNavigate();

const [mode,setMode]=useState("");
const [address,setAddress]=useState("");
const [phone,setPhone]=useState("");
const [card,setCard]=useState("");
const [cvv,setCvv]=useState("");
const [upi,setUpi]=useState("");

const placeOrder=()=>{

if(!mode || !address || !phone){
alert("Fill all details");
return;
}

if(mode==="card" && (!card || !cvv)){
alert("Enter card details");
return;
}

if(mode==="upi" && !upi){
alert("Enter UPI ID");
return;
}

setCart([]);
alert("✅ Payment Successful! Order Placed.");
navigate("/");
};

return(
<div className="payment-box">

<h1>Checkout Payment</h1>

<h3>Select Payment Mode</h3>

<div className="payment-modes">

<button
className={mode==="upi"?"active":""}
onClick={()=>setMode("upi")}
>
UPI
</button>

<button
className={mode==="card"?"active":""}
onClick={()=>setMode("card")}
>
Credit / Debit Card
</button>

<button
className={mode==="cod"?"active":""}
onClick={()=>setMode("cod")}
>
Cash on Delivery
</button>

</div>

<br/>

<input
placeholder="Delivery Address"
value={address}
onChange={e=>setAddress(e.target.value)}
/>

<input
placeholder="Phone Number"
value={phone}
onChange={e=>setPhone(e.target.value)}
/>

{mode==="upi" && (
<input 
type="password"
placeholder="Enter UPI ID"
value={upi}
onChange={e=>setUpi(e.target.value)}
/>
)}

{mode==="card" && (
<>
<input
type="password"
placeholder="Card Number"
value={card}
onChange={e=>setCard(e.target.value)}
/>

<input
type="password"
placeholder="CVV"
value={cvv}
onChange={e=>setCvv(e.target.value)}
/>
</>
)}

<br/><br/>

<button onClick={placeOrder}>
Complete Payment
</button>

</div>
)
}

export default function App(){

const [cart,setCart]=useState(
()=>JSON.parse(localStorage.getItem("cart"))||[]
);

const [user,setUser]=useState(null);
useEffect(()=>{
localStorage.setItem("cart",JSON.stringify(cart))
},[cart]);

const add=(p)=>setCart([...cart,p]);

if(!user){
return <Login setUser={setUser}/>
}

return(
<>
<Navbar cart={cart}/>

<Routes>
<Route path="/" element={<Home user={user}/>}/>
<Route path="/products" element={<Products add={add}/>}/>
<Route path="/cart" element={<Cart cart={cart}/>}/>
<Route path="/payment" element={<Payment setCart={setCart}/>}/>
<Route path="*" element={<Navigate to="/" />} />
</Routes>
</>
)
}


