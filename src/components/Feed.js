import React, { useEffect, useState, useContext } from "react";
import { Item } from "semantic-ui-react";

function Feed(props) {
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
            <Item.Meta>{props.meta}</Item.Meta>
            <Item.Extra>{props.contact}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
}

export default Feed;
