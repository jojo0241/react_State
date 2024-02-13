import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import products from '../produits';

if(products.Name != ""){
    products.Image = "./images/cla1.jpg"
}
else
 products.Image = ""


function Header() {
  return (
    <Card style={{ width: '18rem' }}>

      <Card.Body>
        <Card.Title>Produit</Card.Title>
        <Card.Img src = {products.Image}></Card.Img>
        <Card.Text> Prenom :
         {products.Name}
        </Card.Text>
        <Card.Text> Description :
         {products.Description}
        </Card.Text>
        <Card.Text> Prix :
         {products.Price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Header;