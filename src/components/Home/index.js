import { useState, useContext } from "react";
import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";

import Header from "../Header";
import "./index.css";
import CartContext from "../../context/CartContext";

const carouselImagesList = [
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560378/Container_pke88q.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560389/Item_Link_xndbek.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560400/Item_Link2_goguuv.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560420/Iframe_gnad7v.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560466/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce_ygmh92.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560466/5083dbf10b1310f93fb627c024ace1751e4e1dff_mtdw08.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560465/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0_o8mly9.png",
  "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560469/d625e2acb74e9990ead5626314b86c7ace643f33_lakdz3.png",
];

const itemDetailsList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560461/8d93649b099c59282802fa91e97511eef4488f59_nfflpb.png",
    size: 125,
    price: 55.88,
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560461/200507dc6ca527981f47be16abbf956084e04dbd_pc4jjx.png",
    size: 150,
    price: 66.51,
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560461/d07b7562a11ef9ede254e5ffddc9a19e57a99608_y9kbtc.png",
    size: 150,
    price: 66.91,
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560460/7de1f09601655c832d5893519fdcced0e555d0c4_j3mj2p.png",
    size: 200,
    price: 88.74,
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560459/f429565081532e5175a5f130ddd6ae84d203fb8c_ttho9i.png",
    size: 200,
    price: 89.14,
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560458/58c66a54fbac705a9aec08ed66696b0281f25e4a_iawecn.png",
    size: 175,
    price: 77.69,
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560457/9e1262aea547565b6267d2ade6938b34433af5bb_yt7u4m.png",
    size: 125,
    price: 60.37,
  },
];

const Home = () => {
  const [image, setImage] = useState(0);
  const [varient, setVarient] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [purchaseOption, setPurchaseOption] = useState(1);
  const [magicCont, setMagicCont] = useState(false);
  const { addCartItems } = useContext(CartContext);
  const actualPrice = itemDetailsList[varient - 1].price * quantity;
  const discountedPrice = itemDetailsList[varient - 1].price * 0.8 * quantity;

  const onClickedAddToCartBtn = () => {
    addCartItems({
      ...itemDetailsList[varient - 1],
      quantity,
      price: purchaseOption === 1 ? actualPrice : discountedPrice,
    });
  };

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-left-container">
          <div className="home-carousel-container">
            <button
              type="button"
              className="carousel-btn"
              onClick={() => image !== 0 && setImage((prev) => prev - 1)}
            >
              <PiCaretLeftLight
                className={`carousel-btn-icon ${image === 0 && "nonclickable"}`}
              />
            </button>
            <img
              src={carouselImagesList[image]}
              alt="carousel-image"
              className="carousel-image"
            />
            <button
              type="button"
              className="carousel-btn"
              onClick={() =>
                image !== carouselImagesList.length - 1 &&
                setImage((prev) => prev + 1)
              }
            >
              <PiCaretRightLight
                className={`carousel-btn-icon ${
                  image === carouselImagesList.length - 1 && "nonclickable"
                }`}
              />
            </button>
          </div>
          <div className="home-carousel-images-container">
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560389/Item_Link_xndbek.png"
              className="carousel-imagee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560400/Item_Link2_goguuv.png"
              className="carousel-imagee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560420/Iframe_gnad7v.png"
              className="carousel-imageee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560466/fa92b02e035d7f44a3b6c424e8d30e41f82a30ce_ygmh92.png"
              className="carousel-imagee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560466/5083dbf10b1310f93fb627c024ace1751e4e1dff_mtdw08.png"
              className="carousel-imagee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560465/fe5dbfcfe027ae1e7e36e7d174edd37c3ca0b9d0_o8mly9.png"
              className="carousel-imagee"
            />
            <img
              alt="carousel-image"
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560469/d625e2acb74e9990ead5626314b86c7ace643f33_lakdz3.png"
              className="carousel-imagee"
            />
          </div>
        </div>
        <div className="home-right-container">
          <p className="home-item-details extra-margin">Manuka Honey</p>
          <p className="home-item-details">
            UMF™ <span className="home-item-span">24+</span>
          </p>
          <p className="home-item-details">
            MGO <span className="home-item-span">1122+</span>
          </p>
          <div className="disclaimer-container">
            <IoMdInformationCircleOutline
              className="home-info-icon"
              onClick={() => setMagicCont(true)}
            />
            <span className="disclaimer-text">What is UMF and MGO?</span>
          </div>
          <div
            className={`home-magic-container ${
              !magicCont && "magic-cont-hide"
            }`}
          >
            <div className="home-magic-inner-cont">
              <p className="magic-text1">
                <span className="magic-span">UMF</span> is the strength and
                purity rating of Manuka honey.
              </p>
              <div className="magic-mini-containers-cont">
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor1">10+</p>
                  <hr className="magic-mini-hr color1 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor2">15+</p>
                  <hr className="magic-mini-hr color2 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor3">20+</p>
                  <hr className="magic-mini-hr color3 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor4">24+</p>
                  <hr className="magic-mini-hr color4 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor5">26+</p>
                  <hr className="magic-mini-hr color5 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor6">28+</p>
                  <hr className="magic-mini-hr color6 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor7">30+</p>
                  <hr className="magic-mini-hr color7 rrrr" />
                </div>
              </div>
              <p className="magic-text2">
                The higher the number, the greater the potency and rarity of
                Manuka honey.
              </p>
            </div>
            <div className="home-magic-inner-cont">
              <p className="magic-text1">
                <span className="magic-span">MGO</span> is the key natural
                compound that gives Manuka honey its special antibacterial
                strength.
              </p>
              <div className="magic-mini-containers-cont">
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor1">263+</p>
                  <hr className="magic-mini-hr color1 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor2">514+</p>
                  <hr className="magic-mini-hr color2 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor3">829+</p>
                  <hr className="magic-mini-hr color3  rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor4">1122+</p>
                  <hr className="magic-mini-hr color4 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor5">1282+</p>
                  <hr className="magic-mini-hr color5 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor6">1450+</p>
                  <hr className="magic-mini-hr color6 rrrr" />
                </div>
                <div className="magic-mini-cont">
                  <p className="magic-mini-text coloor7">1620+</p>
                  <hr className="magic-mini-hr color7 rrrr" />
                </div>
              </div>
              <p className="magic-text2">
                The higher the number, the higher the antibacterial properties
                in the honey.
              </p>
            </div>
            <button
              type="button"
              className="magic-button"
              onClick={() => setMagicCont(false)}
            >
              Close
            </button>
          </div>
          <div className="reviews-text-container">
            <span className="review-text">The Optimiser</span>
            <div className="reviews-container">
              <FaHeart className="review-like-icon" />
              <FaHeart className="review-like-icon" />
              <FaHeart className="review-like-icon" />
              <FaHeart className="review-like-icon" />
              <FaHeart className="review-like-icon" />
              <p className="reviews-count">825 REVIEWS</p>
            </div>
          </div>
          <p className="about-item">
            For those times in life when quality comes first. This pure UMF™ 24+
            Manuka Honey is powerfully active, sourced from wild and rugged
            locations around Aotearoa New Zealand and great for almost all uses.
            It has a full, delicious flavour and your body will love you for it.
          </p>
          <div className="logos-container">
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560464/091bee2154df16d16ed70217774440bf225f2900_v3j85q.png"
              alt="logo-image"
              className="logo-image"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/783e7711502694fd9e1b70bbd66f02804411f849_ddzkb0.png"
              alt="logo-image"
              className="logo-image"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/b70a6f585ec0a964285e98003337d6ec3752867c_nqxvrp.png"
              alt="logo-image"
              className="logo-image"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756643840/8c97517d9ebbd3a76cb0f638e2c795fd65e3a277_fiqxm7.png"
              alt="logo-image"
              className="logo-image"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/2c2fd2a45d55be2cd951d8759843038f01211cd5_fljljk.png"
              alt="logo-image"
              className="logo-image"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560462/4988d44823061da38da9b65e1479dcdbc959917d_rhgcsy.png"
              alt="logo-image"
              className="logo-image"
            />
          </div>
          <p className="size-text">SIZE (SELECT ONE)</p>
          <p className="varient-text">
            Varient: {itemDetailsList[varient - 1].size}g | 4.4oz
          </p>
          <ul className="home-list-items-container">
            {itemDetailsList.map((i) => (
              <li key={i.id} className="home-list-item">
                <button
                  id={i.id}
                  type="button"
                  className={`home-list-btn ${varient === i.id && "selected"}`}
                  onClick={(e) => setVarient(parseInt(e.currentTarget.id))}
                >
                  <img
                    src={i.imageUrl}
                    alt={i.size}
                    className="home-list-btn-img"
                  />
                </button>
              </li>
            ))}
          </ul>
          <p className="size-text">PAYMENT OPTIONS (SELECT ONE)</p>
          <div className="home-ot-sub-container">
            <div className="home-options-cont">
              <button
                className={`home-opt-cont ${
                  purchaseOption === 1 && "selected-purchase-option"
                }`}
                type="button"
                id="purchase-opt1"
                onClick={() => setPurchaseOption(1)}
              >
                <span className="home-opt-span1">One-time purchase</span>
                <span className="home-opt-span2">
                  ${actualPrice.toFixed(2)} USD
                </span>
              </button>
              <button
                className={`home-opt-cont ${
                  purchaseOption === 2 && "selected-purchase-option"
                }`}
                type="button"
                id="purchase-opt2"
                onClick={() => setPurchaseOption(2)}
              >
                <span className="home-opt-span1">Subscribe & save 20%</span>
                <span className="home-opt-span2">
                  ${discountedPrice.toFixed(2)} USD
                </span>
              </button>
            </div>
            <div className="home-what-sub-cont">
              <IoMdRefresh className="refresh-icon" />
              <p>What is a Subscription?</p>
            </div>
          </div>
          <p className="size-text">SELECT QUANTITY</p>
          <div className="home-quantity-cart-container">
            <div className="home-quantity-cont">
              <button
                type="button"
                className="dec-inc-btn"
                onClick={() => quantity > 1 && setQuantity((prev) => prev - 1)}
              >
                -
              </button>
              <span className="quantity-num">{quantity}</span>
              <button
                type="button"
                className="dec-inc-btn"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              type="button"
              className="add-to-cart-btn"
              onClick={onClickedAddToCartBtn}
            >
              ADD TO CART
            </button>
          </div>
          <div className="beauty-bundle-container">
            <div className="top-cont">
              <button type="button" className="top-btn top-left">
                <PiCaretLeftLight className="" />
              </button>
              <span className="top-text">Beauty Bundle</span>
              <button type="button" className="top-btn">
                <PiCaretRightLight className="" />
              </button>
            </div>
            <div className="bundle-items-add-bundle-btn-container">
              <div className="bundle-items-container">
                <div className="connt">
                  <div className="connt-img-cont">
                    <img
                      className="connt-img"
                      alt="bundle-image"
                      src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560457/066620652678ace2a8b18d99958799a6750696c0_wu4zr6.png"
                    />
                  </div>
                  <p className="connt-text">UMF 20+</p>
                  <select className="connt-drop-down-cont">
                    <option>250g</option>
                    <option>150g</option>
                  </select>
                </div>
                <span className="connt-plus">+</span>
                <div className="connt">
                  <div className="connt-img-cont">
                    <img
                      className="connt-img"
                      alt="bundle-image"
                      src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/327394c3fd8ec3ec3d902b06fa874c76353a27e5_mfuu4r.png"
                    />
                  </div>
                  <p className="connt-text">UMF 24+</p>
                  <select className="connt-drop-down-cont">
                    <option>250g</option>
                    <option>150g</option>
                  </select>
                </div>
                <span className="connt-plus">+</span>
                <div className="connt">
                  <div className="connt-img-cont">
                    <img
                      className="connt-img"
                      alt="bundle-image"
                      src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560457/999979079a923079d63d37a1077ca3eeb88fd930_zhiif0.png"
                    />
                  </div>
                  <p className="connt-text">
                    Wooden
                    <br /> Spoon
                  </p>
                </div>
              </div>
              <div className="add-bundle-btn-container">
                <div className="prices-cont">
                  <span className="prices-span1">$478.75 USD</span>
                  <span className="prices-span2">$430.88 USD</span>
                  <span className="prices-span3">Save 10%</span>
                </div>
                <button type="button" className="add-bundle-to-cart-btn">
                  ADD BUNDLE TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="reward-points-container">
            <div className="reward-points-img-cont">
              <img
                src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560454/a4ae2eaca1629c3adae1c7714b22764214572002_oyg2ez.png"
                className="reward-points-image"
                alt="reward-points-image"
              />
            </div>
            <p className="reward-points-text">
              Colourclub members earn up to{" "}
              <span className="reward-points-span">56</span> reward points when
              buy this item. Sign up or log in
            </p>
          </div>
          <div className="delivery-container">
            <p className="delivery-text">
              DELIVERY
              <br />
              FREE DELIVERY ON ORDERS OVER $30
            </p>
            <p className="delivery-text">
              ESTIMATED DELIVERY DATE:
              <br />
              Jun 9 - Jun 13
            </p>
          </div>
          <hr className="home-hr-line" />
          <div className="after-pay-container">
            <p className="after-pay-text">AFTER PAY</p>
            <div className="after-pay-text-icon-cont">
              <p className="after-pay-text">
                or 4 interest-free payments of $13.97 with{" "}
                <span className="after-pay-span1">$</span>
                <span className="after-pay-span2">Afterpay</span>
              </p>
              <IoMdInformationCircleOutline className="after-pay-icon" />
            </div>
          </div>
          <hr className="home-hr-line" />
          <div className="umf-container">
            <p className="umf-text"> UMF™ SCALE </p>
            <div className="umf-mini-containers-cont">
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color1" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color2" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color3" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color4" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color5" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color6" />
              </div>
              <div className="umf-mini-cont">
                <p className="umf-mini-text">UMF™ 10+</p>
                <hr className="umf-mini-hr color7" />
              </div>
            </div>
          </div>
          <div className="taste-container">
            <p className="taste-text"> TASTE PROFILE </p>
            <div className="taste-bar-cont">
              <span className="taste-span"></span>
            </div>
            <div className="taste-bar-details-cont">
              <p className="taste-bar-details-text">Clean & Intense</p>
              <p className="taste-bar-details-text"> Bold & Intense</p>
            </div>
          </div>
          <div className="logos-container-bottom">
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560464/091bee2154df16d16ed70217774440bf225f2900_v3j85q.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/783e7711502694fd9e1b70bbd66f02804411f849_ddzkb0.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/b70a6f585ec0a964285e98003337d6ec3752867c_nqxvrp.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756643840/8c97517d9ebbd3a76cb0f638e2c795fd65e3a277_fiqxm7.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560463/2c2fd2a45d55be2cd951d8759843038f01211cd5_fljljk.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <img
              src="https://res.cloudinary.com/dnxaaxcjv/image/upload/v1756560462/4988d44823061da38da9b65e1479dcdbc959917d_rhgcsy.png"
              alt="logo-image"
              className="logo-image-bot"
            />
            <button type="button" className="last-btn">
              FIND OUT MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
