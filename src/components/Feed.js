import React from "react";
import { Button, Item } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

function Feed(props) {
  let navigate = useNavigate();
  const takeExam = (e) => {
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={props.url} />
          <Item.Content>
            <Item.Header as="a">{props.name}</Item.Header>
            <Item.Description>
              <p>{props.description}</p>
            </Item.Description>
            <Item.Meta>Exam id : {props.meta}</Item.Meta>
            <Item.Extra>{props.contact}</Item.Extra>
            {/* <Item.Extra>
              <Button primary onClick={takeExam}>
                Take Exam
              </Button>
            </Item.Extra> */}
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}

export default Feed;
