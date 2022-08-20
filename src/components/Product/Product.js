import React from "react";
import './Product.css';
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, img, course_name, course_instructor, course_rate, duration,available} = product;
const navigate = useNavigate();
  const navigateToServiceDetail = (id) =>{
       console.log(id)
       navigate(`/inventory/${id}`);
  }
  return (
    <div className=" col-lg-4 col-md-6 col-12">
      {/* <h1>{product.id}</h1>
            <h3>{product.name}</h3> */}
            {/* style={{ width: "18rem" }} */}
      <Card className="shadow product-card mb-4 " >
        <Card.Img className="shadow" variant="top" src={img} />
        <Card.Body >
          <Card.Title>Course Name : {course_name}</Card.Title>
          <Card.Text>Instructor : {course_instructor }</Card.Text>
          <Card.Text> Fee : $ {course_rate }</Card.Text>
          <Card.Text>Duration : {duration }</Card.Text>
        </Card.Body>

        <Card.Body className="mb-3">
          <Card.Link onClick={()=>navigateToServiceDetail(_id)} className="prd-btn">Purchase</Card.Link>
       
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
