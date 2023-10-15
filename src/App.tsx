import "./App.css";
import Button from "./Components/Button";
import GroupDesc from "./Components/ListingCard/GroupDesc";
import ListingCard from "./Components/ListingCard/ListingCard";
import AttributeTag from "./Components/ListingCard/AttributeTags/PeopleAttribute"

function App() {
  return (
    <>
      <GroupDesc></GroupDesc>
      <AttributeTag text={"Hello"}></AttributeTag>
      <h1>Hello World! Venusha is gay</h1>
      <Button></Button>
      <ListingCard></ListingCard>
    </>
  );
}

export default App;
