import React from 'react';
import { styled } from 'styled-components';
import convertDate from '@libs/convertDate';
import { ReactComponent as ArrowRightIcon } from '@img/mdi_arrow_right.svg';

const Container = styled.article`
  position: relative;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
  &::after {
    display: none;
    position: absolute;
    top: 4rem;
    left: -2rem;
    content: '';
    width: 0.4rem;
    height: 2.4rem;
    background-color: ${props => props.theme.primary};
  }
  &:hover::after {
    display: block;
  }
`;
const Dates = styled.time`
  font-weight: 600;
  font-size: 1.6rem;
`;
const Divider = styled.span`
  margin: 0 0.675rem;
`;
const Tag = styled.span`
  font-weight: 600;
`;
const Title = styled.h2`
  flex: 0;
  display: inline;
  font-size: 2.8rem;
  cursor: pointer;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover {
    opacity: 0.7;
  }
`;
const Subtitle = styled.p`
  font-weight: 400;
`;
const ReadMore = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 600;
  opacity: 0.9;
  z-index: 2;
  /* svg {
    z-index: -1;
    transform: translateX(-50%);
    opacity: 0;
    /* transition: ease-in-out 0.2s all; */
  /* }
  &:hover {
    opacity: 1;
    svg {
      transform: translateX(0%);
      opacity: 0.9;
    }
  } */
`;

const Article = ({ attributes = {}, onClick }) => {
  return (
    <Container className='borderColor'>
      {attributes && (
        <>
          <div>
            <Dates>{convertDate(attributes.date)}</Dates>
            <Divider>·</Divider>
            <Tag className='tag'>{attributes.tags}</Tag>
          </div>
          <Title onClick={() => onClick()}>{attributes.title}</Title>
          <Subtitle className='subTitle'>{attributes.description} </Subtitle>
          <ReadMore onClick={() => onClick()}>
            Read More
            <ArrowRightIcon className='primary' width={16} height={16} />
          </ReadMore>
        </>
      )}
    </Container>
  );
};

export default Article;
