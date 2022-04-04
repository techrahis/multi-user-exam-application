import React from "react";
import { Link } from "react-router-dom";
import { Item } from "semantic-ui-react";

function Feed(props) {
  return (
    <div>
      <Link to={"/exam" + "/" + props.meta}>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={props.url} />
            <Item.Content>
              <Item.Header as="a">{props.name}</Item.Header>
              <Item.Description>
                <p>{props.description}</p>
              </Item.Description>
              <Item.Meta>Click 👆🏻 to appear for the exam</Item.Meta>
              <Item.Extra>{props.contact}</Item.Extra>
              {/* <Item.Extra>
              <Button primary onClick={takeExam}>
                Take Exam
              </Button>
            </Item.Extra> */}
            </Item.Content>
          </Item>
        </Item.Group>
      </Link>
    </div>
  );
}

export default Feed;
