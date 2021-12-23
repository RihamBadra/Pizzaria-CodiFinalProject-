import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import { Card, Image } from "react-bootstrap";
import recycle from "../img/recycle.png";
import food from "../img/food.png";
import organic from "../img/organic.png";
import healthy from "../img/healthy.png";
import pizzaz from "../img/p7.jpeg";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "../css/Home.css";
import axios from "axios";

function Home() {
  const history = useHistory();

  return (
    <React.Fragment>
      {/* <h1 className="text-left home-title mt-4">
        Pizzaria
      </h1> */}
      <p className="home-subtitle">
        Eating Pizza has never been more <span>delicious!</span>
      </p>

      <div className="gradient-line-main" />
      {/* <AwesomeSlider
        animation="cubeAnimation"
        className="mt-5 shadow-sm p-3 bg-white rounded"
        bullets={true}
        style={{ width: 550, height: 400 }}
      >
        <div data-src={require("../img/h1.jpeg")} />
        <div data-src={require("../img/p2.jpeg")} />
        <div data-src={require("../img/p3.jpeg")} />
        <div data-src={require("../img/p4.jpeg")} />
        <div data-src={require("../img/p5.jpeg")} />
      </AwesomeSlider> */}

      <Sli />

      <Description />
      <div className="jumbotron jumbotron-fluid know-us shadow-lg ">
        <div className="container">
          <h2 className="text-center text-uppercase">
            What we offer in each food
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <InfoCards />
      </div>
      <div className="d-flex justify-content-center">
        <Button
          className="btn-green shadow-lg"
          variant="primary"
          onClick={() => {
            navigateToFoodMenu(history);
          }}
        >
          Check out the menu!
        </Button>
      </div>
    </React.Fragment>
  );
}

async function navigateToFoodMenu(history) {
  let user = await getUserCredentials();

  if (user.type === undefined) {
    history.push("/FoodMenu");
  } else {
    history.push("/client/order");
  }
}

async function getUserCredentials() {
  let type = undefined;
  let id = undefined;
  await axios
    .get("/user/credentials")
    .then((res) => {
      type = res.data.type;
      id = res.data.id;
    })
    .catch((err) => {
      console.log(err);
    });

  const user = {
    id: id,
    type: type,
  };
  return user;
}

function Sli() {
  return (
    <div className="row">
      <div className="col-lg-5 text-center">
        <AwesomeSlider
          animation="cubeAnimation"
          className="mt-5 shadow-sm p-3 bg-white rounded"
          bullets={true}
          style={{ width: 550, height: 400 }}
        >
          <div data-src={require("../img/h1.jpeg")} />
          <div data-src={require("../img/p2.jpeg")} />
          <div data-src={require("../img/p3.jpeg")} />
          <div data-src={require("../img/p4.jpeg")} />
          <div data-src={require("../img/p5.jpeg")} />
        </AwesomeSlider>
      </div>
      <div className="col-lg-7 text-center info-panel">
        <h4>
          <b>Top 5 Fun Pizza Facts</b>
        </h4>
        <p style={{ marginBottom: 70, marginTop: 50 }}>
          - Over 5 billion pizzas are sold worldwide each year. <br />
          - 36% of all pizza orders want their pizza topped with pepperoni.{" "}
          <br />
          - Thin crust pizza is the most popular form of crust worldwide.
          <br />
          - Women are more likely to order vegetarian options as opposed to men.{" "}
          <br />- Saturday is the most popular night for eating pizza.
        </p>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="row">
      <div className="col-lg-7 text-center info-panel">
        <h4>
          <b>Who are we?</b>
        </h4>
        <p style={{ marginBottom: 70 }}>
          We are a concept of healthy fast food restaurants that adapt to the
          needs of the modern lifestyle, offering our customers practical and
          economical options. We offer a menu with delicious, customizable food
          that is as healthy as the customer wants it to be, prepared on the
          spot with the freshest ingredients.
        </p>
      </div>
      <div className="col-lg-5 text-center">
        <Image src={pizzaz} fluid style={{ marginTop: 70 }} />
      </div>
    </div>
  );
}

function InfoCards() {
  return (
    <div className="info-cards">
      <div className="row">
        <Card className="col-lg-3 col-md-5 col-xs-5 card-eco shadow-sm p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={organic} className="card-img" />
          <Card.Body>
            <Card.Title>Eco-friendliness</Card.Title>
            <Card.Text>
              We encourage our customers to help the environment by giving them
              eco-friendly materials.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-5 col-xs-5 card-taste shadow-sm p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={food} className="card-img" />
          <Card.Body>
            <Card.Title>Great Taste</Card.Title>
            <Card.Text>
              We delight our customers with delicious food, full of taste.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-5 col-xs-5 card-ingredients shadow-sm p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={recycle} className="card-img" />
          <Card.Body>
            <Card.Title>Natural Ingredients</Card.Title>
            <Card.Text>
              Our goal is to give our customers the most delicious food made
              with natural ingredients.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="col-lg-3 col-md-5 col-xs-5 card-healthy shadow-sm p-3 mb-5 bg-white rounded">
          <Card.Img variant="top" src={healthy} className="card-img" />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
              Apart from our food being delicious and made with natural
              ingredients, it is also healthy.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
