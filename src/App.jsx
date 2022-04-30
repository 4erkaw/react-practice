// import PaintingList from "./components/PaintingList";
import Section from "./components/Section";
import paintings from "./paintings.json";
import PaintingList from "./components/PaintingList";

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Best">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
