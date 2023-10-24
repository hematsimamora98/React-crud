
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import {Home} from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import { AddItem } from "./components/AddItems";
import { EditItem } from "./components/EditItem";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Navbar/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/addItems' element={<AddItem/>}/>
                        <Route path='/editItems'>
                            <Route path=':id' element={<EditItem/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
