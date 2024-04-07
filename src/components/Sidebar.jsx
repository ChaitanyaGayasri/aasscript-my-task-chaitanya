

import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { VscHeart } from "react-icons/vsc";
import Footer from "./Footer";
import "./sidebar.css"

const Sidebar = () => {
    const [arrow, setArrow] = useState(false);
    const [data, setData] = useState([]);

    const handleArrow = () => setArrow(!arrow);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const products = await response.json();
                setData(products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="sidebar-container">
            <div className="product">
                <div className="sidebar-menu">
                    <div className="menu-section">
                        <div className="section-header">
                            <input type="checkbox" />
                            <p>CUSTOMIZABLE</p>
                        </div>
                        <hr />
                        <div className="section-content">
                            <div className="arrow-section" onClick={handleArrow}>
                                <p>IDEAL FOR</p>
                                {arrow ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                            {arrow && (
                                <div className="sub-categories">
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Men</p>
                                    </div>
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Women</p>
                                    </div>
                                    <div className="sub-category">
                                        <input type="checkbox" />
                                        <p>Children</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    <hr />
                    
                    <div >
                    <div style={{ display: "flex", gap: "100px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>OCCASION</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />


                        <div style={{ display: "flex", gap: "135px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>WORK</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />


                        <div style={{ display: "flex", gap: "125px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>FABRIC</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />


                        <div style={{ display: "flex", gap: "110px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>SEGMENT</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />

            
                        <div style={{ display: "flex", gap: "75px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>SUITABLE FOR</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />

                        <div style={{ display: "flex", gap: "60px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>RAW MATERIALS</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />

            
                        <div style={{ display: "flex", gap: "110px", alignItems: "center", paddingTop: "20px", paddingBottom: "20px" }}>
                            <p>PATTERN</p>
                            {<MdKeyboardArrowDown />}
                        </div>
                        <p>All</p>
                        <hr style={{ width: "200px" }} />
                    </div>
                        
                    </div>
                </div>
            
            

            <div className="product-grid">
                {data.map((item, id) => (
                    <div key={id} className="product-item">
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <div className="price-section">
                            <p>{item.price}</p>
                            <VscHeart />
                        </div>
                    </div>
                ))}
                </div>
                </div>
                
            <Footer />
        </div>
    );
};

export default Sidebar;










