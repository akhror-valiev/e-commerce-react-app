import { useEffect } from "react";
import Category from "../../components/Category/Category";
import Slider from "../../components/Slider/Slider";
import ProductList from "../../components/ProductList/ProductList";

import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, fetchProductsByCategory } from "../../store/categorySlice";
import "./HomePage.scss";
import SingleCategory from "../../components/SingleCategory/SingleCategory";


const HomePage = () => {

    const dispatch = useDispatch();
    const { data: categories, status: categoryStatus } = useSelector((state) =>
        state.category);

    const { catProductAll: productsByCategory, catProductAllStatus } = useSelector((state) => state.category);


    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProductsByCategory(1, "all"));
        dispatch(fetchProductsByCategory(2, "all"));
    }, []);


    return (
        <div className="home-page">
            <Slider />
            <Category categories={categories} status={categoryStatus} />
            <ProductList />
            <section>
                {
                    productsByCategory[0] && <SingleCategory products={productsByCategory[0]} status={catProductAllStatus} />
                }
            </section>

            <section>
                {
                    productsByCategory[1] && <SingleCategory products={productsByCategory[1]} status={catProductAllStatus} />
                }
            </section>
        </div>
    );
};

export default HomePage;