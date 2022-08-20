import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { set } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import useProductDetail from "../../Hooks/useProductDetail";
import "./Inventory.css";
const Inventory = () => {
  const { inventoryId } = useParams();
  const [inventory] = useProductDetail(inventoryId);
  console.log(inventory);
  const [orderQuantity, setOrderQuantity] = useState(inventory.quantity);
  const [inputValue, setInputValue] = useState(0);

  if (inventory.quantity) {
    // console.log(orderQuantity);
  }
  useEffect(() => {
    setOrderQuantity(inventory.quantity);
    console.log(orderQuantity);
  }, [inventory.quantity]);

  const reducedQuantity = () => {
    setOrderQuantity(orderQuantity - 1);
    // console.log(orderQuantity);
  };

  const handleChange = (e) => {
    console.log(typeof e.target.value);
    setInputValue(e.target.value);
  };
  // console.log(inputValue);
  const restock_qunatity = (event) => {
    event.preventDefault();

    setOrderQuantity(parseInt(orderQuantity) + parseInt(inputValue));
    event.target.reset();
  };
  // console.log(typeof orderQuantity);
  return (
    <div className="container">
      <div style={{display:"flex", alignItems:"center"}} className="selected-product w-50 mx-auto my-5">
        {/* <h1>{product.id}</h1>
               <h3>{product.name}</h3> */}
        <Card className="shadow">
          <Card.Img variant="top" src={inventory.img} />
          <Card.Body>
            <Card.Title>Name : {inventory.course_name}</Card.Title>
       
            <Card.Text>Price : $ {inventory.course_rate}</Card.Text>

       
          </Card.Body>

          <Card.Body>
            <Card.Link
              // onClick={() => reducedQuantity(inventory.quantity)}
              onClick={reducedQuantity}
              className="prd-btn btn btn-link"
            >
              Confirm
            </Card.Link>
          </Card.Body>
        </Card>
  
      </div>
   
    </div>
  );
};

export default Inventory;
