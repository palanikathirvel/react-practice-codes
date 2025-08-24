import react, {useState} from 'react';
function Newfile(){
    const [name, setname] = useState();
    const [quantity,setquantity]=useState(1);
    const [comment,setcomment]=useState("");
    const [payment,setpay]=useState();
    const [shipping,setship]=useState("");
    function namechange(event) {
        setname(event.target.value);
    }
    function qchange(event){
        setquantity(event.target.value);
    }
    function commentchange(event){
        setcomment(event.target.value);
    }
    function changepayment(event){
        setpay(event.target.value);
    }
    function changeship(event){
        setship(event.target.value);
    }
return (
    <>
    
    <h1>Name:{name}</h1>
        <input value={name} onChange={namechange} />
        <h1>quantity:{quantity}</h1>
        <input value={quantity} onChange={qchange} />
        <h1>comment:{comment}</h1>
        <input value={comment} placeholder="enter your comment" onChange={commentchange} />
        <h1>payment:{payment}</h1>
        <select value={payment} onChange={changepayment}>
            <option value="" >select option</option>
            <option value="visa">visa</option>
            <option value="debitcard">debitcard</option>
            <option value="creditcard">creditcard</option>
        </select>
        <h1>deliverymethod:{shipping}</h1>
        <label>
        <input type="radio" value="visa" checked = {shipping === "visa"} onChange={changeship}></input>
        visa
        </label>
        <br></br>
        <label>
            <input type="radio" value="debitcard" checked={shipping === "debitcard"} onChange={changeship}></input>
            debitcard
        </label>
    </>
)
}
export default Newfile