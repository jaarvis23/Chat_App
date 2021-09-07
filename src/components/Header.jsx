import { Navbar , Nav , NavDropdown} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom';

function Header(){
    let user= JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function logOut()
    {
        localStorage.clear();
        history.push('/LoginForm')
    }
    
    return(
        <div>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/add" > Navbar </Link>
                            <Link to="/update" >Update Product</Link>
                        </>
                        :
                        <>
                            <Link to="/loggin" > Login </Link>
                            <Link to="/register" >Register</Link>
                        </>

                    }
                </Nav>
                {localStorage.getItem('user-info')}?

                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                </Navbar>
        </div>
    )
}