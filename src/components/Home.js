import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import Feed from "./Feed";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function Home() {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const docRef = doc(db, "examination", "all");
    const docSnap = await getDoc(docRef);
    setData(Object.entries(docSnap.data()));
  };

  return (
    <div>
      {data.length > 0 &&
        data.map((data) => (
          <Segment>
            <Feed
              name={data[0]}
              url="https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png"
              meta={data[0][1].examname}
              description={data[1].bio}
              contact={data[1].phone}
            />
          </Segment>
        ))}
    </div>
  );
}

export default Home;
