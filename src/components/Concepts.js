import List from "./List";
import Card from "./Card";

function Concepts(props) {
  return (
    <ul id="concepts">
      {props.concept.map((i) => {
        return (
          <List>
            <Card title={i.title} image={i.image} description={i.description} />
          </List>
        );
      })}
    </ul>
  );
}
export default Concepts;
