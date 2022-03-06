import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Feed from "./Feed";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const docRef = doc(db, "institute", "all");
    const docSnap = await getDoc(docRef);
    setData(Object.entries(docSnap.data()));
  };
  return (
    <div>
      {data.length > 0 &&
        data.map((data) => (
          <Segment>
            <Feed
              name={data[1].name}
              url="https://cdn.freelogovectors.net/wp-content/uploads/2021/04/indian-institute-of-science-logo-freelogovectors.net_.png"
              meta={data[1].address}
              description={data[1].bio}
              contact={data[1].phone}
            />
          </Segment>
        ))}
    </div>
  );
}

export default Home;
