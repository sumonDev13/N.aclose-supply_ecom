import { useAuth } from "../../context/auth";
import ScrollToTopOnRouteChange from "../../utils/ScrollToTopOnRouteChange";
import Categories from "../../components/header/Categories";
import Banner from "./Banner/Banner";
// import DealSlider from "./DealSlider/DealSlider";
import Info from "../../components/info/Info";
import ProductSlider from "./ProductsListing/ProductSlider";
import { electronicProducts } from "../../utils/electronics";
import { accessories } from "../../utils/accessories";
import { fashionProducts } from "../../utils/fashion";
import chocolates from '../../assets/images/productCardImages/cklateart2.png';
import mailingBags from "../../assets/images/productCardImages/mailbagart.png";
import batteries from '../../assets/images/productCardImages/bat2.png'
import SeoData from "../../SEO/SeoData";

const Home = () => {
    // const [auth, setAuth] = useAuth();
    return (
        <>
            <SeoData title="Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!" />
            <ScrollToTopOnRouteChange />
            <div className="flex-grow border-t border-gray-200"></div>
            <Info/>
            
            {/* <Categories /> */}
            <main className="flex flex-col items-center gap-3 px-2 pb-5 sm:mt-2">
                {/* <pre className="min-h-[60vh]">
                    {JSON.stringify(auth, null, 3)}
                </pre> */}
                <Banner />
                <Categories />
                {/* <DealSlider title={"Discounts for You"} /> */}
                <ProductSlider
                    title={"Best of Chocolates"}
                    products={electronicProducts}
                    logo={chocolates}
                />
                <ProductSlider
                    title={"Mailing Bags"}
                    products={accessories}
                    logo={mailingBags}
                />
                {/* <Suggestion
                    title={"Suggested for You"}
                    tagline={"Based on Your Activity"}
                /> */}

                <ProductSlider
                    title={"Batteries"}
                    products={fashionProducts}
                    logo={batteries}
                />
                {/* <ProductSlider
                    title={"TVs & Appliances"}
                    products={applianceProducts}
                    logo={applianceCard}
                />
                <ProductSlider
                    title={"Furniture & More"}
                    products={furnitureProducts}
                    logo={furnitureCard}
                /> */}
            </main>
        </>
    );
};

export default Home;
