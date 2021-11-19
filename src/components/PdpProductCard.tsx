import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "../model/Product";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
  product: Product;
};

const PdpProductsContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 86vh;
  gap: 10px;
`;

const StyledProductCode = styled.p`
  color: black;
  text-decoration: solid;
  font-size: 25px;
  padding-top: 10px;
  padding-left: 25px;
  font-weight: bolder;
`;

const CardContainer = styled.div`
  height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "img details";
  padding-bottom: 2rem;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: img;
  padding-left: 2rem;
  grid-column: 1/2;
`

const Img = styled.img`
  min-width: 80%;
  max-height: max-content;
`;

const ProductDetailsContainer = styled.div`
  grid-area: details;
  height: 100%;
`;

const AddBtn = styled.button`
  padding: 10px;
  width: 15%;
  background-color: #1976d2;
  color: white;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 15px;
`;

const BolderTxt = styled.span`
  font-weight: bolder;
`;

const PdpProductCard: React.FC<Props> = ({ product }) => {
  const [variant, setVariant] = useState<
    Product | Omit<Product, "variants"> | undefined
  >();
  useEffect(() => setVariant(product), [product]);
  return (
    <PdpProductsContainer>
      {variant ? (
        <>
          <StyledProductCode>P05004ST</StyledProductCode>
          <CardContainer>
            <ImgContainer>
            <Img src={variant.imageUrl} alt="" />
            </ImgContainer>
            <ProductDetailsContainer>
              <BolderTxt className="product-name">{variant.name}</BolderTxt>
              <p className="product-price">
                {variant.price.current.value} {variant.price.currency}
              </p>
              <p>
                Availability:{" "}
                <BolderTxt>
                  {variant.availability.stock > 0 ? "in stock" : "out of stock"}
                </BolderTxt>
              </p>
              <p>
                Upc: <BolderTxt>{variant.UPC}</BolderTxt>
              </p>
              <AddBtn>Add to cart</AddBtn>
            </ProductDetailsContainer>
          </CardContainer>
          <div className="swiper-container">
          <p className="available-txt">Available colors</p>
            <Swiper
              spaceBetween={50}
              slidesPerView={"auto"}
              className="swiper-wrapper"
            >
              {product.variants.map((variant, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  <img
                    alt=""
                    src={variant.imageUrl}
                    onClick={() => setVariant(variant)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      ) : null}
    </PdpProductsContainer>
  );
};

export default PdpProductCard;
