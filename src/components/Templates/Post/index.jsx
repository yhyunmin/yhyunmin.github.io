import Profile from '@components/Molecules/Profile';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { styled } from 'styled-components';
import ReactMarkdown from 'react-markdown';
import DarkTheme from '@components/Atoms/DarkTheme/DarkTheme';
import { useThemeAction } from 'src/store/ThemeStore';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as LeftArrowIcon } from '@img/mdi_arrow_left.svg';
import BackBtn from '@components/Atoms/BackBtn';
import { generateSlug } from 'src/util/generateSlug';
const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 144rem;
  /* height: 100vh; */
`;
const SectionWrapper = styled.div`
  display: flex;
  /* 반응형 */
  /* flex-wrap: wrap; */
`;
const BannerSection = styled.aside`
  width: 32rem;
  display: flex;
  flex-direction: column;
  /* 반응형 */
  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
  /* width: 144rem; */
  gap: 1.6rem;
  order: 1;
`;
const PostSection = styled.section`
  width: 116.2rem;
  order: 2;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 4.8rem;
  width: 100%;
  padding: 20px 0;
  margin: 20px 0;
  border-bottom: 1px solid #aaa;
`;

const Contents = styled.div``;
const Template = ({ post, summary }) => {
  const toggleTheme = useThemeAction();
  const navigate = useNavigate();
  console.log(post);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    // Use map instead of forEach to create an array of slugs
    const newSlugs = summary.map(element =>
      generateSlug(element).replace(/^-/, '')
    );

    // Update the state with the array of slugs
    setContents(newSlugs);
    console.log(newSlugs);
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
          <BackBtn onClick={() => navigate(-1)} />
          <DarkTheme onClick={toggleTheme} />
          <div>
            <p>Contents</p>
            {contents &&
              contents.map((heading3Title, index) => (
                <p>
                  <a href={`#${heading3Title}`} key={index}>
                    {heading3Title}
                  </a>
                </p>
              ))}
          </div>
        </BannerSection>
      </SectionWrapper>
    </Container>
  );
};

export default Template;
