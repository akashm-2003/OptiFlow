import React from "react";
import styled from "styled-components";
const FeedbackCard = () => {
  return (
    <>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            The PLM system greatly improved our team's collaboration and
            streamlined our product development process.
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> Jeet Shah
          </p>
          <p>
            <strong>Email:</strong> shahjeet64@gmail.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            Using the PLM system has significantly reduced our time-to-market
            and increased our product quality.
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> Akash Manna
          </p>
          <p>
            <strong>Email:</strong> akashmanna318@gmail.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            The PLM system's customizable workflows and comprehensive data
            management capabilities have revolutionized our product lifecycle
            management.
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> Dhruvin Dholakia
          </p>
          <p>
            <strong>Email:</strong> dd2242003@gmail.com
          </p>
        </UserInfo>
      </Card>
      <Card>
        <CardContent>
          <h3>Feedback</h3>
          <p>
            We love how the PLM system integrates seamlessly with our suppliers,
            enhancing communication and efficiency across the supply chain.
          </p>
        </CardContent>
        <UserInfo>
          <p>
            <strong>Name:</strong> Rupesh Raut
          </p>
          <p>
            <strong>Email:</strong> rupeshraut@gmail.com
          </p>
        </UserInfo>
      </Card>
    </>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  margin: 20px;
`;

const CardContent = styled.div`
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export default FeedbackCard;
