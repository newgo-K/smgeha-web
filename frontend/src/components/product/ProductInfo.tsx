import { css } from '@emotion/react';
import palette from 'lib/styles/palette';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';
import ProductImgCarousel from './ProductImgCarousel';
import { formWidth, mediaQuery } from 'lib/styles/common';
import Button, { ButtonProps } from 'components/common/Button';

export type ProductInfoProps = {
  name: string;
  serial: string;
  size: string;
  manufacture: string;
  price: number;
  url: string;
  subTypes: string;
  imgs: Array<string>;
  onEdit: () => void;
  onDelete: () => void;
};

function ProductInfo({
  name,
  serial,
  size,
  manufacture,
  price,
  url,
  subTypes,
  imgs,
  onEdit,
  onDelete,
}: ProductInfoProps) {
  const [type, setType] = useState<string>('');

  useEffect(() => {
    if (subTypes) {
      setType(subTypes.split(',')[2]);
    }
  }, [subTypes]);

  return (
    <Wrap>
      <ModifyBtnStyles
        variant="outlined"
        size="large"
        maxWidth
        onClick={onEdit}
      >
        수정
      </ModifyBtnStyles>
      <DeleteBtnStyles
        variant="outlined"
        size="large"
        maxWidth
        onClick={onDelete}
      >
        삭제
      </DeleteBtnStyles>
      <Title>
        <Typography variant="h1">{name}</Typography>
      </Title>
      <ContentWrap>
        <Grid item xs={7}>
          {/* Carousel */}
          <ProductImgCarousel imgs={imgs} />
        </Grid>
        <Grid item xs={5}>
          {/* Content */}
          <ContentTitle>시리얼</ContentTitle>
          <ContentSub>{serial}</ContentSub>
          <ContentTitle>제조사</ContentTitle>
          <ContentSub>{manufacture}</ContentSub>
          <ContentTitle>크기</ContentTitle>
          <ContentSub>{size}</ContentSub>
          {type && (
            <>
              <ContentTitle>유형</ContentTitle>
              <ContentSub>{type}</ContentSub>
            </>
          )}
          {price && (
            <ContentPrice>
              {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </ContentPrice>
          )}
        </Grid>
      </ContentWrap>

      <GuideDetail>
        <Typography variant="subtitle1">제품 소개</Typography>
      </GuideDetail>
      {/* 블로그 내용이 없다면 제품 소개란은 보여주지 않는다. */}
      {url ? (
        <>
          {/* 블로그 연동 시 보여주는 영역 */}
          <iframe title={url} width="100%" height="500" src={url} />
        </>
      ) : (
        <>
          <ShopWrap>
            <ShopTitle css={css``}>군산새만금중고가전</ShopTitle>
            <ShopInfo>
              안녕하세요!!! 궁금사항은 해당 제품 시리얼로 문의 부탁드립니다.
              최고의 품질로 최고의 만족을 드리겠습니다. 감사합니다.
            </ShopInfo>
            <ShopPhone>전화번호 : 063-453-4137</ShopPhone>
            <ShopMapInfo>오시는 길</ShopMapInfo>
            <ShopAddr>도로명 : 전북 군산시 팔마로 46 BAR</ShopAddr>
            <ShopAddr>지번 : 전북 군산시 문화동 908-21 BAR</ShopAddr>

            <img
              css={css`
                width: 100%;
                margin: auto;
                padding: 10px 0;
                background-size: contain;
              `}
              src="/img/map.png"
              alt="지도"
            />
          </ShopWrap>
        </>
      )}
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 430px;
  margin-top: 4.375rem;

  ${mediaQuery('xs')} {
    width: ${formWidth()};
  }
`;

const ModifyBtnStyles = (props: ButtonProps) => (
  <Button
    css={css`
      margin-bottom: 0.625rem !important;
    `}
    {...props}
  />
);

const DeleteBtnStyles = (props: ButtonProps) => (
  <Button
    css={css`
      margin-bottom: 0.625rem !important;
      border: 1px solid red !important;
      color: red !important;
    `}
    {...props}
  />
);

const ContentWrap = styled.div`
  display: flex;
`;

const Title = styled.div`
  padding-top: 5px;
  padding-bottom: 20px;
`;

const ContentTitle = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[8]} !important;
      line-height: 1;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);

const ContentSub = (props: any) => (
  <div
    css={css`
      color: ${palette.grey[4]} !important;
    `}
  >
    <Typography variant="subtitle1" {...props} />
  </div>
);

const ContentPrice = styled.div`
  padding: 0.3125rem 0;
  color: ${palette.main[4]};
  font-weight: 500;
  font-size: 1.125rem;
`;

const GuideDetail = styled.div`
  margin-top: 2.5rem;
  padding: 0.125rem 0.4375rem;
  color: ${palette.white[0]};
  background-color: ${palette.black[0]};
`;

const ShopWrap = styled.div`
  overflow: auto;
  height: 500px;
`;

const ShopTitle = styled.div`
  padding: 0.9375rem;
  border-bottom: 1px solid ${palette.grey[3]};
  font-size: 1.1875rem;
  text-align: center;
`;

const ShopInfo = styled.div`
  padding: 0.625rem 0;
  border-bottom: 1px solid ${palette.grey[3]};
  color: ${palette.grey[5]};
  font-size: 1.0625rem;
`;

const ShopPhone = styled.div`
  padding: 0.625rem 0;
  border-bottom: 1px solid ${palette.grey[3]};
  color: ${palette.grey[5]};
`;

const ShopMapInfo = styled.div`
  padding: 5px 0;
  color: ${palette.grey[7]};
`;

const ShopAddr = styled.div`
  color: ${palette.grey[5]};
`;

export default ProductInfo;
