import { feedback } from "../constants";
import styles from "../style";
import FeadBack from "./FeadBack";

const Clients = () => (
  <section id="clients" className={`flex sm:flex-row flex-col justify-between items-center sm:my-4 -my-12`}>
    {
      feedback.map((value) => {
        return <FeadBack {...value} key={value.id} />
      })
    }
  </section>
);

export default Clients;
