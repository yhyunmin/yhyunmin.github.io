import Profile from '@components/Molecules/Profile';
import React, { useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import { useThemeAction } from 'src/store/ThemeStore';
import { useNavigate } from 'react-router-dom';
import BackBtn from '@components/Atoms/BackBtn';
import { generateSlug } from 'src/util/generateSlug';
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;
  //media 500px
  @media (max-width: 500px) {
    padding-top: 0;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 144rem;
  padding-bottom: 200px;
  /* height: 100vh; */
  @media (max-width: 500px) {
    width: 100%;
    padding-bottom: 80px;
  }
  h3 > a {
    color: ${({ theme }) => theme.subTitle};
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* 반응형 */
  /* flex-wrap: wrap; */
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;
const BannerSection = styled.aside`
  width: 32.9rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  /* 반응형 */
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  /* width: 144rem; */
  gap: 1.6rem;
  order: 1;
`;
const PostSection = styled.section`
  width: 104.3rem;
  order: 2;
  @media (max-width: 500px) {
    width: 100%;
    order: 1;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4.8rem;
  @media (max-width: 500px) {
    margin: 20px 0;
    padding: 0 20px;
  }
  width: 100%;
  padding: 20px 0;
  margin: 20px 0;
  border-bottom: 1px solid #aaa;
  border-color: ${({ theme }) => theme.borderColor};
`;

const SideBar = styled.div`
  position: sticky;
  top: 10rem;
`;
const BookmarkNav = styled.ul`
  margin: 2rem;
  /* border: 1px solid #aaa; */
  /* border-color: ${({ theme }) => theme.borderColor}; */
  background-color: ${({ theme }) => theme.elevateColor};
  border-radius: 8px;
  padding: 1.2rem 2.4rem;

  @media (max-width: 500px) {
    display: none;
  }
  li {
    list-style: none;
    margin: 0.4rem;
    a {
      color: ${({ theme }) => theme.subtitle};
    }
    &:hover a {
      border-bottom: 1px solid #aaa;
      border-color: ${({ theme }) => theme.borderColor};
    }
  }
`;

const Contents = styled.div`
  ul li,
  ol li {
    margin-left: 1em;
  }
`;
const Template = ({ post, summary }) => {
  const toggleTheme = useThemeAction();
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (!summary) {
      return;
    }
    // Use map instead of forEach to create an array of slugs
    const newSlugs = summary.map(element =>
      generateSlug(element).replace(/^-/, '')
    );

    // Update the state with the array of slugs
    setContents(newSlugs);
  }, [summary]);

  const MarkdownComponents = useMemo(() => {
    return {
      h3: props => {
        const children = Array.isArray(props.children)
          ? props.children
          : [props.children];
        const heading = children
          .flatMap(element =>
            typeof element === 'string'
              ? element
              : element?.type !== undefined &&
                typeof element.props.children === 'string'
              ? element.props.children
              : []
          )
          .join('');

        const slug = generateSlug(heading);
        return (
          <h3 id={slug}>
            <a href={`#${slug}`} {...props}></a>
          </h3>
        );
      },
    };
  }, []);

  return (
    <Container>
      <Title>{post && post.attributes.title}</Title>
      <SectionWrapper>
        <PostSection>
          <Contents>
            <ReactMarkdown components={MarkdownComponents}>
              {post && post.body}
            </ReactMarkdown>
          </Contents>
        </PostSection>
        <BannerSection>
          <Profile />
          <DarkTheme onClick={toggleTheme} />
          <SideBar>
            <BookmarkNav>
              {contents &&
                contents.map((heading3Title, index) => (
                  <li key={index}>
                    <a href={`#${heading3Title}`} key={index}>
                      {heading3Title}
                    </a>
                  </li>
                ))}
            </BookmarkNav>
            <BackBtn onClick={() => navigate('/')} />
          </SideBar>
        </BannerSection>
      </SectionWrapper>
    </Container>
  );
};

export default Template;
